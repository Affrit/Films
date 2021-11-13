import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/actions/actions';
import { useLocation } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w500'

export const CurrentFilmPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { filmData, isFetching  } = useSelector(({ currentFilmPage: { filmData, isFetching  } }) => ({
    filmData, isFetching 
  }))
  
  useEffect(() => {
    const filmId = location.pathname.split('/').pop()
    dispatch(getCurrentFilm(filmId))
  }, [])

  const spawnImg = () => {
    if (!filmData.poster_path) return
    return <img src={baseUrl + filmData?.poster_path} style={{ width: '500px' }} alt="#" /> //full film info will be here
  }

  return (
    <div>
      FilmID {location.pathname}
      <div>
        {isFetching ? <span>LOADING...</span> : spawnImg()}
      </div>
      <Link to='/films'>to All Films</Link>
    </div>
  )
}
