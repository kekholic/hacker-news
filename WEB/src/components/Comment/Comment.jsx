import React, { useEffect, useState } from 'react'
import { getComment } from '../../utils/API';
import style from './Comment.module.scss'
import user from '../../images/user.svg'

import { useDispatch } from 'react-redux';
import { updateStatusLoading, updateStatusNotLoading } from '../../store/action';

export default function Comment({kid, isRootComment}) {
  const [comment, setComment] = useState(null);
  const [showChildComment, showHideChildComment] = useState(!isRootComment);

  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(updateStatusLoading())
    getComment(kid).then((data) => data && setComment(data));
    dispatch(updateStatusNotLoading())
  }, [kid, dispatch])

  function handleShowKids() {
    dispatch(updateStatusLoading())
    showHideChildComment(!showChildComment);
    dispatch(updateStatusNotLoading())
  }
  
  if (comment && comment.deleted) return null;
  return comment && (
    <div className={style['wrapper']}> 
    <div className={style["info"]}>
      <span>
      <img src={user} alt="user" />
      {comment.by}
      </span>
      <span> {new Date(comment.time * 1000).toLocaleDateString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric'
          })}</span>
    </div>
      <div className={`${style['text']} ${comment.kids ? style['hasKids'] : null }`} dangerouslySetInnerHTML={{__html: comment.text}} onClick={handleShowKids}></div>
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
