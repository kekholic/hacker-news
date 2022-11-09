// import { legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';

// import initialState from './initState';
// import reducers from './reducers/reducers';

// const composeEnhancers = composeWithDevTools(); // import reduxDevTools

// const store = createStore(reducers, initialState, composeEnhancers);

// export default store;

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/reducers';
import initialState from './initState';

const composeEnhancer = process.env.NODE_ENV === 'production'
  ? applyMiddleware(thunkMiddleware)
  : composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducers, initialState, composeEnhancer);

export default store;