import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import searchPageReducer from './reducers/searchPageReducer';
import filmDetalisPageReducer from './reducers/filmDetalisPageReducer';
import moviesPageReducer from './reducers/moviesPageReducer';
import favoritesPageReducer from './reducers/favoritesPageReducer';

export default combineReducers({
    login: loginReducer,
    searchPage: searchPageReducer,
    filmDetalisPage: filmDetalisPageReducer,
    moviesPage: moviesPageReducer,
    favoritesPage: favoritesPageReducer,
  })
