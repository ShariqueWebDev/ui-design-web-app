import React from 'react'
import CommentItem from './CommentItem';

function GetComments(props) {
    const {comments} = props
  return (
    <div>
      {comments.map((comNote)=>{
        return<CommentItem comNote = {comNote} />
      })}
    </div>
  )
}

export default GetComments
