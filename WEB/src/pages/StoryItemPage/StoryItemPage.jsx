import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getStory} from '../../utils/API'
import Comment from '../../components/Comment/Comment';
import style from './StoryItemPage.module.scss'
import back from '../../images/back.svg'
import refresh from '../../images/refresh.svg'
import source from '../../images/source.svg'
import comments from '../../images/comments.svg'
import user from '../../images/user.svg'
import { useDispatch, useSelector } from 'react-redux';
import { updateStatusLoading, updateStatusNotLoading } from '../../store/action';



export default function StoryItemPage() {
  const {id} = useParams();
  const [story, setStory] = useState(null);

  const isLoading = useSelector((store) => store.isLoading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(updateStatusLoading())
    getStory(id).then((story) => {
      setStory(story.data);
      dispatch(updateStatusNotLoading())
    });
    return () => {
      dispatch(updateStatusNotLoading())
    }
  }, [id, dispatch])
  
  function handleUpdateComments() {
    dispatch(updateStatusLoading())
    getStory(id).then((story) => {
      setStory(story.data);
      dispatch(updateStatusNotLoading())
    }); 
  }


  return story && (
    <div className={style['storyPageWrapper']}>
      <div className={style['titleWrapper']}>
        <span>
          <img src={user} alt="user" />
          {`by ${story.by} `}
        </span>
        <span>
          {new Date(story.time * 1000).toLocaleDateString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>
        <h2>{story.title}</h2>
        <div className={style['menuContainer']}>
          <div>
            <img src={comments} alt="comments"/>
            {` ${story.kids && story.kids.length > 0 ? story.kids.length : 0} `}
          </div>
          <NavLink to='/'><img src={back} alt="back-to-news" /></NavLink>          
          <a href={story?.url} target="blank" className={style['sourceOrig']}><img src={source} alt="back-to-news" /></a>
          <img className={isLoading ? style['refreshActive'] : null } onClick={handleUpdateComments} src={refresh} alt="update-comments" />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{__html: story.text}} />
          {story.kids && story.kids.map((kid) => (
            <Comment kid={kid} key={kid} isRootComment={true}/>
          ))}
    </div>
    
  )
}