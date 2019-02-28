import { combineReducers } from 'redux';
import markdownListReducer from './markdownListReducer';
import markdownReducer from './markdownReducer';

export default combineReducers({
  markdownListReducer,
  markdownReducer
});
