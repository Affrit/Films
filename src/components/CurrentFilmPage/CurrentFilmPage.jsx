import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/actions/filmActions';
import { useLocation } from 'react-router-dom';
import { BASE_URL_IMG } from '../../constants/constants';

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
    return <img src={BASE_URL_IMG + filmData?.poster_path} style={{ width: '500px' }} alt="#" /> //full film info will be here
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
