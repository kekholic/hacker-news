import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getStory} from '../../utils/API'
import Comment from '../../components/Comment/Comment';
import style from './StoryItemPage.module.css'


export default function StoryItemPage() {
  const {id} = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    getStory(id).then((story) => {
      setStory(story.data);
    });
  }, [id])
  
  function handleUpdateComments() {
    getStory(id).then((story) => {
      setStory(story.data);
    }); 
  }


  return story && (
    <div className={style['storyPageWrapper']}>
      <div className={style['titleWrapper']}>
        <NavLink to='/'>Back to the news</NavLink>
        <a href={story?.url} target="blank">Source of original</a>
        <button onClick={handleUpdateComments}>Update comments</button>
        <h2>{story.title}</h2>
        <span>
          {new Date(story.time * 1000).toLocaleDateString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>|
        <span>
            {`by ${story.by} `}
        </span>
        <span>
          {` ${story.kids && story.kids.length > 0 ? story.kids.length : 0} comments`}
        </span>
      </div>
      <div dangerouslySetInnerHTML={{__html: story.text}} />
          {story.kids.map((kid) => (
            <Comment kid={kid} key={kid} isRootComment={true} />
          ))}
    </div>
    
  )
}