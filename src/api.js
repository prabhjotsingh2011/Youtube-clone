import axios from 'axios'

const request=axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params:{
        // key:process.env.REACT_APP_YT_API_KEY,
        key:'AIzaSyCGIvUwtq5uHiMIv99R0Nq-kQ-qeMXOLaQ',
    }
})

export default request