import { combineReducers } from 'redux';
import isLoadingReducer from './isLoadingReducer';
import storiesReducer from './storiesReducer';


const reducers = combineReducers({
  stories: storiesReducer,
  isLoading: isLoadingReducer,
});

export default reducers;
