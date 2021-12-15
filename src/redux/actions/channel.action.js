import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SET_SUBSCRIPTION_STATUS, SUBSCRIPTIONS_CHANNEL_FAIL, SUBSCRIPTIONS_CHANNEL_REQUEST, SUBSCRIPTIONS_CHANNEL_SUCCESS } from "../actionTypes";
import request from '../../api'

export const getChannelDetails = (id) => async dispatch => {
    try {
        dispatch({
            type:CHANNEL_DETAILS_REQUEST,
        })

        const {data}=await request.get('/channels',{
            params:{
                part:'snippet,statistics,contentDetails',
                id:id
            }
        })
        dispatch({
            type:CHANNEL_DETAILS_SUCCESS,
            payload:data.items[0]
        })
    } catch (error) {
        console.log("error while calling getChannelDetails",error);
        dispatch({
            type:CHANNEL_DETAILS_FAIL,
            payload:error.message
        })
    }
}


export const checkSubscriptionStatus = (id) => async (dispatch,getState) => {
    try {
        
        dispatch({
            type:SUBSCRIPTIONS_CHANNEL_REQUEST
        })
        const {data}=await request.get('/subscriptions',{
            params:{
                part: 'snippet',
                forChannelId: id,
                mine: true,
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`,
                Accept: 'application/json'
            },
            
            
        })
        dispatch({
            type:SUBSCRIPTIONS_CHANNEL_SUCCESS,
            payload:data.items
        })
    } catch (error) {
        console.log("error while calling subscription check ",error);
        dispatch({
            type:SUBSCRIPTIONS_CHANNEL_FAIL,
            payload:error.response.data
        })
    }
}