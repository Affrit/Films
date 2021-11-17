import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL_IMG } from '../../constants/constants';
import { MoviesSider } from '../Layouts/Sider/MoviesSider';
import { getMoviesPageData } from '../../store/actions/moviesPageActions';

export const MoviesPage = () => {
  const dispatch = useDispatch()
  const { moviesPageData, isFetching } = useSelector(({ moviesPage: { moviesPageData, isFetching } }) => ({
    moviesPageData, isFetching
  }))

  useEffect(() => {
    dispatch(getMoviesPageData(1))
  }, [])

  const spawnImg = (data) => {
    if (!data.results) return
    if (data.results.length === 0) return <span>Films not Found</span>

    return data.results.map(film => { ////////// film card will be return here
      return <Link key={film.id} to={`/films/${film.id}`}>
        <div className='films__item'>
          <img src={BASE_URL_IMG + film.poster_path} style={{ width: '200px' }} alt="#" />
        </div>
      </Link>
    })
  }

  return (
    <>
      <MoviesSider />
      <div className='films'>
        Movies Page
        {isFetching ? <span>LOADING...</span> : spawnImg(moviesPageData)}
      </div>
    </>
  )
}
