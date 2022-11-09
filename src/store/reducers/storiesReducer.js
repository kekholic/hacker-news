import initialState from '../initState';
import ACTypes from '../ACTypes';

const storiesReducer = (state = initialState.stories, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTypes.SET_STORIES: {
      return [...payload];
    }

    default: return state;
  }
};

export default storiesReducer;
