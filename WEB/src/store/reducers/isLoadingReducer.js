import initialState from '../initState';
import ACTypes from '../ACTypes';

const isLoadingReducer = (state = initialState.stories, action) => {
  const { type } = action;

  switch (type) {
    case ACTypes.CHANGE_STATUS_LOADING: {
      return true;
    }
    case ACTypes.CHANGE_STATUS_NOT_LOADING: {
      return false;
    }

    default: return state;
  }
};

export default isLoadingReducer;
