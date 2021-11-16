import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import searchPageReducer from './reducers/searchPageReducer';
import currentFilmPageReducer from './reducers/currentFilmPageReducer';

export default combineReducers({
    login: loginReducer,
    searchPage: searchPageReducer,
    currentFilmPage: currentFilmPageReducer,
  })
