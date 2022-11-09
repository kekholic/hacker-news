import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './StoryItem.module.css'

const StoryItem = ({ story: { id, by, title, time, score } }) => {
  const history = useHistory();

  function handleOpenStory(id) {
    history.push(`story/${id}`);
  }

  return (
    <div className={style['storyWrapper']}>
      <div className={style['score']}>
         <img className={style['rating']} src="/icons8-triangle-arrow-16.png" alt="rateUP" />
         <span>{score}</span>
         <img className={style['rating']} src="/icons8-triangle-arrow-16.png" alt="rateDown" />
      </div>
      <div className={style["story"]} onClick={() => handleOpenStory(id)}>
      <div className={style["story-info"]}>       
          <span >
          <img className={style['ava']} src="/ava.png" alt="ava" />
            {` ${by}`}
          </span>
          <span className={style['date']} >
            {new Date(time * 1000).toLocaleDateString('ru-RU', {
              hour: 'numeric',
              minute: 'numeric'
            })}
          </span>
        </div>      
        <div>
         {title}
        </div>
        
      </div>
    </div>
  );
};

export default StoryItem;