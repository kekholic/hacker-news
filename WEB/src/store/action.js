import ACTypes from './ACTypes';
import { getStories } from '../utils/API';

export const initStories = () => ({ type: ACTypes.INIT_STORIES });
export const setStories = (stories) => ({ type: ACTypes.SET_STORIES, payload: stories });

export const getAllStories = () => (dispatch) => {
  getStories()
    .then((stories) => {
      dispatch(setStories(stories))
    })
};

