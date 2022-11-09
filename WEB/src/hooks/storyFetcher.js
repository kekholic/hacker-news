import { useState, useEffect } from 'react';
import { getStories } from '../utils/API';
import { useDispatch } from 'react-redux';
import { getAllStories } from '../store/action';

const useStoryFetcher = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getStories()
      .then((stories) => {
        setStories(stories);
        dispatch(getAllStories(stories));
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return { isLoading, stories };
};

export default useStoryFetcher;