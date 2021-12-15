import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HomeScreen = () => {

    const dispatch = useDispatch();
    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)
    // console.log('====================================');
    // console.log(videos);
    // console.log('====================================');
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])


    const fetchDate = () => {
        if (activeCategory === 'All')
            dispatch(getPopularVideos())
        else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }
    return (
        <Container>
            <CategoriesBar />
            {/* <row> */}
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchDate}
                hasMore={true}
                Loader={
                    <div className=" spinner-border text-danger d-block mx-auto"></div>
                }
                className="row"
            >
                {
                    videos.map((video) => (
                            <Col lg={3} md={4} key={videos.id}>
                                <Video video={video} />
                            </Col>
                        ))
                }
            </InfiniteScroll>
            {/* </row> */}
        </Container>
    )
}

export default HomeScreen
