import React, {useEffect} from 'react';
import StoryItem from '../../components/StoryItem/StoryItem';
// import useStoryFetcher from '../hooks/storyFetcher';
// import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStories } from '../../store/action';
import { useUpdatePage } from '../../hooks/updatePage';

import style from './AllStories.module.css'


const AllStories = () => {
  // const { isLoading, stories } = useStoryFetcher();

  const dispatch = useDispatch();
  const stories = useSelector((store) => store.stories);
  

  useEffect(() => {
    dispatch(getAllStories())
  }, [dispatch]);
  
  useUpdatePage(getAllStories);
  


  const handleUpdateStories = () => {
    dispatch(getAllStories());
  }

  return (
    <>
      {/* <Loader show={isLoading}>Loading...</Loader> */}
      <div className={style['container']}>
      <button onClick={handleUpdateStories}>Update</button>
        {stories && stories.map(({ data: story }) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </div>
    </>
  );
};

export default AllStories;