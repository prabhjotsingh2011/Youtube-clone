import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS,CREATE_COMMENT_SUCCESS,CREATE_COMMENT_FAIL } from "../actionTypes";
import request from '../../api'


export const getCommentsOfVideoById = (id) => async dispatch => {
    try {
        dispatch({
            type: COMMENT_LIST_REQUEST,
        })

        const { data } = await request.get('/commentThreads', {
            params: {
                part: 'snippet',
                videoId: id
            }
        })
        dispatch({
            type: COMMENT_LIST_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log("error while calling getChannelDetails", error);
        dispatch({
            type: COMMENT_LIST_FAIL,
            payload: error.message
        })
    }
}



export const addComment = (id,text) => async (dispatch,getState) => {
    try {


        const obj={
            snippet:{
                videoId:id,
                topLevelComment:{
                    snippet:{
                        textOriginal:text,
                    }
                }
            }
        }

        await request.post('/commentThreads', obj,{
            params: {
                part: 'snippet',
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`
            }
        })
        dispatch({
            type: CREATE_COMMENT_SUCCESS,
        })

        setTimeout(() => {
        }, 3000);
        dispatch(getCommentsOfVideoById(id))
        
    } catch (error) {
        console.log("error while calling getChannelDetails", error);
        dispatch({
            type: CREATE_COMMENT_FAIL,
            payload: error.message
        })
    }
}

