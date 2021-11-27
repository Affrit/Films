import './style.scss'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getFilmDetalis } from '../../store/actions/filmActions';
import { BASE_URL_IMG } from '../../constants/constants';
import { filmDetalisSelector } from './selector';
import { useLocation, useNavigate, useParams } from 'react-router';
import { Spin } from 'antd';
import { Button, Tooltip } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import altImg from '../../img/default.png'
import { Rating } from '../Rating/Rating';

export const FilmDetalisPage = () => {
  const dispatch = useDispatch()
  const { film: filmId } = useParams()
  const { isFetching, backdrop_path, poster_path, title,
    overview, tagline, vote_average, release_date, genres,
    runtime, homepage, budget, revenue, status, name, first_air_date,
  } = useSelector(filmDetalisSelector)
  const location = useLocation()
  const navigate = useNavigate()
  const posterSrc = BASE_URL_IMG + poster_path
  const bgSrc = BASE_URL_IMG + backdrop_path
  const contentType = location.pathname.split('/')[1]
  const releaseYear = release_date?.split('-')[0] ?? first_air_date?.split('-')[0]

  const [imgFetching, setImgFetching] = useState(true)
  const [isLoadError, setIsLoadError] = useState(false)

  useEffect(() => {
    dispatch(getFilmDetalis(filmId, contentType))
  }, [dispatch, filmId, contentType])

  const onImgLoad = () => {
    setImgFetching(false)
  }

  const onImgLoadError = () => {
    setImgFetching(false)
    setIsLoadError(true)
  }

  const spawnImg = () => {
    return (
      <img
        onLoad={onImgLoad} onError={onImgLoadError}
        src={isLoadError ? altImg : posterSrc}
        className='filmPage__img' alt="#"
      />
    )
  }

  const genreList = genres?.map(genre => {
    return <span className='filmPage__genre' key={genre.id} >{genre.name}</span>
  })

  /*
  const [moveX, setMoveX] = useState()
  const [moveY, setMoveY] = useState()
  const handler = (e) => {
    const winWidth = e.screenX
    const winHeight = e.screenY
    const moveX = e.pageX / (winWidth)
    const moveY = e.pageY / (winHeight)
    console.log(moveX)
    setMoveX(moveX)
    setMoveY(moveY)
    'transform: `translateX(${moveX}%)`, transform: `translateY(${moveY}%)`'
    onMouseMove={handler}
  }
  */

  const onReturn = () => {
    navigate(-1)
  }

  const convertRuntime = (runtime) => {
    if (!runtime) return;
    const minutes = runtime % 60
    const hours = Math.floor(runtime / 60)
    return `${hours}h ${minutes < 10 ? `0${minutes}` : minutes}min`
  }

  /*
  const companiesImages = production_companies.map(company => {
    if (!company.logo_path) return ;
    const imgSrc = BASE_URL_IMG + company.logo_path
    return (
    <img
      src={imgSrc}
      className='filmPage__company-img' alt="#"
    />
    )
  })
  */

  return (
    <div
      style={{ backgroundImage: `url(${bgSrc})` }}
      className='filmPage-wrap'
    >
      <div className='filmPage'>
        <div className='filmPage__body'>

          <div className='filmPage__lcol'>
            <div className='filmPage__visual'>
              <div className='img-wrap'>
                {isFetching ? <Spin size="large" /> : spawnImg()}
              </div>
            </div>
          </div>

          <div className='filmPage__rcol'>
            <div className='filmPage__info'>

              <div className='filmPage__title-block'>
                <h1 className='filmPage__title'>
                  {title ?? name}
                  <span className='filmPage__suptitle'>{`(${releaseYear})`}</span>
                </h1>
                <span className='filmPage__tag'>{tagline}</span>
              </div>

              <span>{release_date || first_air_date} {status && `(${status})`}</span>
              <div className='filmPage__genres'>
                {genreList}
              </div>
              <span>{convertRuntime(runtime)}</span>
              <div className='filmPage__rating'>
                <Rating rating={vote_average} />
                <span className='filmPage__rating-name'>User Score</span>
              </div>
              {budget ? <span>Budget: {budget}</span> : ''}
              {revenue ? <span>Revenue: {revenue}</span> : ''}
              <div className='filmPage-overview'>
                <h2 className='filmPage-overview__title'>Overview</h2>
                <p className='filmPage-overview__text'>{overview}</p>
              </div>
              {homepage && <a href={homepage} target='blank'>visit homepage</a>}
            </div>
          </div>
        </div>

        <div className='filmPage__bottom'>
          <Button
            onClick={onReturn}
            className='filmPage__back-btn'
            type="dashed"
            icon={<LeftOutlined />}
            size="large"
          >
            Return Back
          </Button>
        </div>

      </div>
    </div>
  )
}
