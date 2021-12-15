import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import Video from '../../components/video/Video'
import { getVideosByChannel } from '../../redux/actions/videos.action'
import './channelScreen.scss'
import { getChannelDetails } from '../../redux/actions/channel.action'

import numeral from 'numeral'
import './channelScreen.scss'

const ChannelScreen = () => {

    const { channelId } = useParams()

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getVideosByChannel(channelId))
        dispatch(getChannelDetails(channelId))

    }, [dispatch, channelId])


    const { videos, loading } = useSelector(state => state.channelVideos)
    const { snippet, statistics } = useSelector(state => state.channelDetails.channel)


    return (
        <>


            <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
                <div className='d-flex align-items-center m-3'>
                    <img src={snippet?.thumbnails?.default?.url} alt=''  />

                    <div className='ml-6 channelHeader__details'>
                        <h3>{snippet?.title}</h3>
                        <span>
                            {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                            subscribers
                        </span>
                    </div>
                </div>

                <button>Subscribe</button>
            </div>


            <Container>
                <Row className="mt-2">
                    {
                        !loading
                            ? videos.map(video => <Col md={3} lg={3}>
                                <Video video={video} ChannelScreen />
                            </Col>)

                            : "loading..."
                    }
                </Row>
            </Container>
        </>
    )
}

export default ChannelScreen
