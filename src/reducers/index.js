import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import userReducer from './user';

const rootReducer = combineReducers({
  /* nom du tiroir : reducer qui s'occupe du tiroir */
  recipes: recipesReducer,
  user: userReducer,
});

export default rootReducer;
