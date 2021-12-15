import { createStore,applyMiddleware,combineReducers }  from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {authReducer} from './reducers/auth.reducer'
import {channelVideosReducer, homeVideosReducer,relatedVideoReducer,searchVideosReducer,subscriptionChannelReducer} from './reducers/vidoes.reduces'
import { selectedVideoReducer } from './reducers/vidoes.reduces'
import {selectedVideoReducers} from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer'

const rootReducer=combineReducers({
    auth:authReducer,
    homeVideos:homeVideosReducer,
    selectedVideo:selectedVideoReducer,
    channelDetails:selectedVideoReducers,
    commentsList: commentListReducer,
    relatedVideo:relatedVideoReducer,
    seachedVideos:searchVideosReducer,
    subscriptionsChannel:subscriptionChannelReducer,
    channelVideos: channelVideosReducer
})

// const reducer=(initialState)=> initialState

const store=createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store