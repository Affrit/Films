import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { BASE_URL_IMG } from '../../constants/constants';
import './style.scss'

export const MoviesSpawner = ({ data }) => {
  const filmCards = data.map(film => {
    const filmData = {
      id: film.id,
      title: film.title ?? film.name,
      releaseDate: film.release_date ?? film.first_air_date,
      imgSrc: BASE_URL_IMG + film.poster_path,
      rating: film.vote_average
    }
    return (
      <div key={film.id} className='movies__inner'>
        <MovieCard isFetching={false} filmData={filmData} />
      </div>
    )
  })

  return (
    <div className='movies'>
      {data.length > 0 ? filmCards : <span>Films not Found</span>}
    </div>
  )
}
