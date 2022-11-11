import React, {useEffect} from 'react';
import StoryItem from '../../components/StoryItem/StoryItem';
import refresh from '../../images/refresh.svg'

import { useDispatch, useSelector } from 'react-redux';
import { getAllStories } from '../../store/action';
import { useUpdatePage } from '../../hooks/updatePage';

import style from './AllStories.module.scss'


const AllStories = () => {

  const dispatch = useDispatch();
  const stories = useSelector((store) => store.stories);
  const isLoading = useSelector((store) => store.isLoading)
  

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
      {/* <button onClick={handleUpdateStories}>Update</button> */}
      <div className={style['refresh']} >
        <img src={refresh} alt="refreshStories" className={isLoading ? style['refreshActive'] : null } onClick={handleUpdateStories}/>

      </div>
        {stories && stories.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </div>
    </>
  );
};

export default AllStories;