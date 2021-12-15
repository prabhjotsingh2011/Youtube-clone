import react, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal'
import { getSubscribedChannel } from '../../redux/actions/videos.action'
import './subscription.scss'
import { Container } from 'react-bootstrap';

const SubscriptionScreen = () => {

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getSubscribedChannel())
    }, [dispatch])

    const {loading,videos} = useSelector(state=> state.subscriptionsChannel);

    return (
        <Container fluid>
        {
             (videos?.map(video=> <VideoHorizontal video={video} key={video.id} subScreen />))
        }
        </Container>
    )
}

export default SubscriptionScreen
