import moment from 'moment'
import React from 'react'
import './_comment.scss'


const Comment = ({comment}) => {

    const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay}=comment
    return (
        <div className='comment p-2 d-flex  my-4  ' >
            <img
                src={authorProfileImageUrl}
                className='rounded-circle mx-4 '
            />

            <div className="comment__body">
                <p className='comment__header mb-1' >
                   {authorDisplayName} -- {moment(publishedAt).fromNow()}
                </p>
                <p className='mb-1' >{textDisplay}</p>
            </div>
        </div>
    )
}

export default Comment
