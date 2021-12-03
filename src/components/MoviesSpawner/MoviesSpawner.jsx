import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { Empty, Spin } from 'antd';
import './style.scss';

const MoviesSpawner = ({ data, contentType, isFetching }) => {
  const filmCards = data.map(film => {
    const filmData = {
      contentType: contentType ?? film.contentType,
      id: film.id,
      title: film.title ?? film.name,
      release_date: film.release_date ?? film.first_air_date,
      poster_path: film.poster_path,
      vote_average: film.vote_average,
      vote_count: film.vote_count,
    }
    return (
      <div key={film.id} className='movies__inner'>
        <MovieCard filmData={filmData} />
      </div>
    )
  })

  return (
    <>
      {
        isFetching ? <Spin className='movies__spinner' size='large' /> :
          <div className='movies'>
            {data.length > 0 ? filmCards : <Empty />}
          </div>
      }
    </>
  )
}

export default React.memo(MoviesSpawner)
