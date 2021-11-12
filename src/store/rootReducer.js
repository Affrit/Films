import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import filmsPageReducer from './reducers/filmsPageReducer';

export default combineReducers({
    login: loginReducer,
    filmsPage: filmsPageReducer,
  })
