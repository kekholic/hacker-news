import ACTypes from './ACTypes';
import { getStories } from '../utils/API';

export const initStories = () => ({ type: ACTypes.INIT_STORIES });
export const setStories = (stories) => ({ type: ACTypes.SET_STORIES, payload: stories });
export const updateStatusLoading = () => ({ type: ACTypes.CHANGE_STATUS_LOADING });
export const updateStatusNotLoading = () => ({ type: ACTypes.CHANGE_STATUS_NOT_LOADING });

export const getAllStories = () => (dispatch) => {
  dispatch(updateStatusLoading());
  getStories()
    .then((stories) => {
      dispatch(setStories(stories))
    })
    .finally(() => dispatch(updateStatusNotLoading()))
};

