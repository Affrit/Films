import './style.scss'
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/actions/filmActions';
import { useLocation } from 'react-router-dom';
import { BASE_URL_IMG } from '../../constants/constants';
import { currentFilmSelector } from '../../helpers/selector';

export const CurrentFilmPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { filmData, isFetching  } = useSelector(currentFilmSelector)
  
  useEffect(() => {
    const filmId = location.pathname.split('/').pop()
    dispatch(getCurrentFilm(filmId))
  }, [dispatch, location.pathname])

  const spawnImg = () => {
    if (!filmData.poster_path) return
    return <img src={BASE_URL_IMG + filmData?.poster_path} className='filmPage__img' alt="#" /> //full film info will be here
  }

  return (
    <div className='filmPage-wrap'>
      <div>FilmID {location.pathname}</div>
      <div className='filmPage'>
        {isFetching ? <span>LOADING...</span> : spawnImg()}
      </div>
      <Link to='/movies'>to All Films</Link>
    </div>
  )
}
