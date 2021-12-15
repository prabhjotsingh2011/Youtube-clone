import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../redux/actions/auth.action'
import './_loginScreen.scss'
const LoginScreen = () => {
    
    const dispatch=useDispatch()
    const accessToken =useSelector(state=> state.auth.accessToken)

    const handleLogin=()=>{
        dispatch(login())
    }

    const history= useHistory()
    useEffect(()=>{
        if(accessToken){
            history.push('/')
        }
    },[accessToken])


    return (
        <div className="login">
                <div className="login__container">
                    <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" srcset="" />
                    <button onClick={handleLogin}>
                        Login With Google
                    </button>

                    <p>Youtube clone By Prabhjot Singh using YOUTUBE API</p>
                </div>
            
        </div>
    )
}

export default LoginScreen
