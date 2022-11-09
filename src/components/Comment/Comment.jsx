import React, { useEffect, useState } from 'react'
import { getComment } from '../../utils/API';
import style from './Comment.module.css'

export default function Comment({kid, isRootComment}) {
  const [comment, setComment] = useState(null);
  const [showChildComment, showHideChildComment] = useState(!isRootComment);

  useEffect(() => {
    getComment(kid).then((data) => data && setComment(data));
  }, [kid])

  function handleShowKids() {
    showHideChildComment(!showChildComment);
  }
  
  if (comment && comment.deleted) return null;
  return comment && (
    <div className={style['wrapper']}> 
    <div className={style["info"]}>
      <span>{comment.by}</span>
      <span> {new Date(comment.time * 1000).toLocaleDateString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric'
          })}</span>
    </div>
      <div className={`${comment.kids ? style['hasKids'] : null }`} dangerouslySetInnerHTML={{__html: comment.text}} onClick={handleShowKids}></div>
      {!showChildComment && comment.kids &&
      <div className={style['more']} onClick={handleShowKids}>
        { comment.kids?.length } more
      </div>}
      {showChildComment && comment.kids && comment.kids.map((kid) => (
        <Comment kid={kid} key={kid} isRootComment={false}/>
      ))}
    </div>
  )
}
