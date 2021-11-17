import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import searchPageReducer from './reducers/searchPageReducer';
import currentFilmPageReducer from './reducers/currentFilmPageReducer';
import moviesPageReducer from './reducers/moviesPageReducer';

export default combineReducers({
    login: loginReducer,
    searchPage: searchPageReducer,
    currentFilmPage: currentFilmPageReducer,
    moviesPage: moviesPageReducer,
  })
