import React from 'react';
import { useSelector } from 'react-redux';
import { favoritesSelector } from './selector';
import MoviesSpawner from '../MoviesSpawner/MoviesSpawner';
import './style.scss'

export const FavoritesPage = () => {
  const { favoritesData } = useSelector(favoritesSelector)

  return (
    <div className='favoritePage'>
      FavoritesPage
      <MoviesSpawner
        data={favoritesData}
      />
    </div>
  )
}
