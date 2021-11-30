// libs
import React from 'react';
import { useSelector } from 'react-redux';
// components
import MoviesSpawner from '../MoviesSpawner/MoviesSpawner';
// other
import { favoritesSelector } from './selector';
import './style.scss';

export const FavoritesPage = () => {
  const { favoritesData } = useSelector(favoritesSelector)

  return (
    <div className='favoritePage'>
      <h1 className='favoritePage__title'>Favorites</h1>
      <MoviesSpawner
        data={favoritesData}
      />
    </div>
  )
}
