import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import filmsPageReducer from './reducers/filmsPageReducer';
import currentFilmPageReducer from './reducers/currentFilmPageReducer';

export default combineReducers({
    login: loginReducer,
    filmsPage: filmsPageReducer,
    currentFilmPage: currentFilmPageReducer,
  })
