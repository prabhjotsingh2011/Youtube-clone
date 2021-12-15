import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/commnets.action'
import Comment from './comment/Comment'
import './_commnets.scss'

const Comments = ({videoId,totalComments}) => {

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getCommentsOfVideoById(videoId))
    },[videoId,dispatch])


    const comments=useSelector(state=>state.commentsList.comments)

    const [text, setText] = useState('');

    const _comments= comments?.map(comment=> comment.snippet.topLevelComment.snippet)

    const handleComment=(e)=>{
        e.preventDefault();
        dispatch(addComment(videoId,text))
        setText('')
    }
    return (
        <div className="commnets" >
            <p>{totalComments} commnets</p>
            <div className="comments__form d-flex " >

                <img src="https://scontent.fccu19-1.fna.fbcdn.net/v/t1.18169-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NVZpEvSB__wAX_Ochg-&_nc_ht=scontent.fccu19-1.fna&oh=67493e08bd16b5e503614aef02db7ec9&oe=61AD18B3"
                    className='rounded-circle mr-3'
                 />
                 <form
                  className='d-flex flex-grow-1'
                  onSubmit={handleComment}
                  >

                    <input 
                        type='text'
                        className='flex-grow-1'
                        placeholder='write a comment....'
                        onChange={(e)=> setText(e.target.value)}
                     />

                     <button type="submit" className='border-0 p-2'>Comment</button>
                 </form>

            </div>


            <div className="commnets__list">
                {
                    _comments?.map((comment,i)=>(
                        <Comment comment={comment} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default Comments
