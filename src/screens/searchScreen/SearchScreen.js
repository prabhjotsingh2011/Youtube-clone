import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal';
import { getVideosBySearch } from '../../redux/actions/videos.action';


const SearchScreen = () => {
    const {videos,loading} =useSelector(state=> state.seachedVideos)

    const {query}=useParams()
    // console.log(query);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideosBySearch(query))
    },[query,dispatch])

console.log(videos[0]);
    return (
        <Container>
            {
                !loading ?
                (
                    videos?.map((video)=>(
                         <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
                    ))
                ):
                <h1>Loading...</h1>
            }
        </Container>
    )
}

export default SearchScreen
