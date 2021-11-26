import './style.scss'
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/actions/filmActions';
import { BASE_URL_IMG } from '../../constants/constants';
import { currentFilmSelector } from './selector';
import { useLocation, useParams } from 'react-router';
import { Spin } from 'antd';

export const CurrentFilmPage = () => {
  const dispatch = useDispatch()
  const { film: filmId } = useParams()
  const { isFetching, backdrop_path, poster_path, title,
    overview, tagline, vote_average, genres, release_date,
    runtime, homepage, id, original_title, budget, status
  } = useSelector(currentFilmSelector)
  const location = useLocation()
  const contentType = location.pathname.split('/')[1]

  const releaseYear = release_date.split('-')[0]

  useEffect(() => {
    dispatch(getCurrentFilm(filmId, contentType))
  }, [dispatch, filmId, contentType])

  const spawnImg = () => {
    if (!poster_path) return
    return <img src={BASE_URL_IMG + poster_path} className='filmPage__img' alt="#" />
  }

  return (
    <div className='filmPage-wrap' style={{ backgroundImage: `url(${BASE_URL_IMG + backdrop_path})` }}>
      <div className='filmPage'>

        <div className='filmPage__col'>

          <div className='filmPage__visual'>
            <div className='img-wrap'>
              {isFetching ? <Spin size="large" /> : spawnImg()}
            </div>
          </div>

        </div>

        <div className='filmPage__col'>

          <div className='filmPage__info'>
            <h1 className='filmPage__title'>{title}</h1>
            <sup>{`(${releaseYear})`}</sup>
            <Link to='/movies'>to All Films</Link>
            <span>safasfsaf</span>
            <span>safasfsaf</span>
            <span>safasfsaf</span>
            <span>safasfsaf</span>
            <span>safasfsaf</span>
            <span>safasfsaf</span>

            <span>safasfsaf</span>

          </div>

        </div>

      </div>
    </div>
  )
}
