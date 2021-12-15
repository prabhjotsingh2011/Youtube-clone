import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS } from "../actionTypes";

const initialState={
    loading:true,
    comments:null
}


export const commentListReducer=(state=(initialState), action)=>{
    const {payload,type}=action;
    switch (type) {
        case COMMENT_LIST_REQUEST:
            return{
                ...state,
                loading:true,
            }
    
        case COMMENT_LIST_SUCCESS:
            return{
                ...state,
                loading:false,
                comments:payload,
                
            }
        case COMMENT_LIST_FAIL:
            return{
                ...state,
                loading:false,
                error:payload,

            }
    
      
        default:
            return state;
    }
}