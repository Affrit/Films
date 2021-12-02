// libs
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import MoviesSpawner from '../MoviesSpawner/MoviesSpawner';
// other
import { favoritesSelector } from './selector';
import { authSelector } from '../PrivateRoute/selector';
import { getFavoriteList } from '../../helpers/favoriteHelpers';
import { setFavorites } from '../../store/actions/favoritesPageActions';
import './style.scss';

export const FavoritesPage = () => {
  const dispatch = useDispatch()
  const { favoritesData } = useSelector(favoritesSelector)
  const { username } = useSelector(authSelector)

  useEffect(() => {
    const listFromStorage = getFavoriteList(username)
    if (listFromStorage) {
      dispatch(setFavorites(listFromStorage))
    }
  }, [dispatch, username])

  return (
    <div className='favoritePage'>
      <h1 className='favoritePage__title'>Favorites</h1>
      <MoviesSpawner
        data={favoritesData}
      />
    </div>
  )
}
