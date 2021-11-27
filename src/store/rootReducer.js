import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import searchPageReducer from './reducers/searchPageReducer';
import filmDetalisPageReducer from './reducers/filmDetalisPageReducer';
import moviesPageReducer from './reducers/moviesPageReducer';

export default combineReducers({
    login: loginReducer,
    searchPage: searchPageReducer,
    filmDetalisPage: filmDetalisPageReducer,
    moviesPage: moviesPageReducer,
  })
