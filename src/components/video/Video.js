import React, { useEffect, useState } from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'
import { useHistory } from 'react-router'

const Video = ({ video, channelScreen }) => {

    // const {snippet.title,snippet.thumbnails.high.url}

    const {
         id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: {
                medium
            }
        },
        contentDetails,
    } = video

    const _videoId = id?.videoId || contentDetails?.videoId || id;

    useEffect(() => {
        const get_videos_details = async () => {
            const { data: { items } } = await request.get('/videos', {
                params: {
                    part: "snippet,contentDetails,statistics",
                    id: _videoId,
                }
            })
            // console.log(items);
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
            // console.log(publishAt);
        }
        get_videos_details();
    }, [_videoId])


    useEffect(() => {
        const get_icon = async () => {
            const { data: { items } } = await request.get('/channels', {
                params: {
                    part: "snippet",
                    id: channelId,
                }
            })
            // console.log(items);\
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_icon();
    }, [channelId])

    const [views, setViews] = useState(null)
    const [Duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const seconds = moment.duration(Duration).asSeconds()
    const duration = moment.utc(seconds * 1000).format("mm:ss")


    const history = useHistory()

    const handleVideoClick = () => {
        history.push(`watch/${_videoId}`)
    }

    return (
        <div className="video" onClick={handleVideoClick}>
            <div className="video__top">
                <img src={medium.url} alt="" srcset="" />
                <span>{duration}</span>
            </div>

            <div className="video__title">
                {title}
            </div>

            <div className="video__details">
                <span>
                    <AiFillEye /> {numeral(views).format("0.a")}
                </span>&nbsp;&nbsp;&nbsp;
                <span>{moment(publishedAt).fromNow()}</span>
            </div>
            {!channelScreen && (
                <div className="video__channel">
                    <img src={channelIcon?.url} alt="" />
                    <p>{channelTitle}</p>
                </div>)}
        </div>
    )
}

export default Video
