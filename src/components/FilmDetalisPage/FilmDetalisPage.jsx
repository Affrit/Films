// libs
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
// components
import { Spin, Button, Skeleton } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Rating } from '../Rating/Rating';
// other
import { getFilmDetalis } from '../../store/actions/filmActions';
import { filmDetalisSelector } from './selector';
import { BASE_URL_IMG } from '../../constants/constants';
import { convertRuntime } from '../../helpers/convertFilmRuntime';
import altImg from '../../img/default.png';
import './style.scss';

export const FilmDetalisPage = () => {
  const {
    isFetching, backdrop_path, poster_path, title,
    overview, tagline, vote_average, release_date,
    genres, runtime, homepage, budget, revenue,
    status, name, first_air_date, vote_count,
  } = useSelector(filmDetalisSelector)
  const [isLoadError, setIsLoadError] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { film: filmId } = useParams()

  const contentType = location.pathname.split('/')[1]
  const releaseYear = (release_date ?? first_air_date)?.split('-')[0]
  const bgSrc = backdrop_path ? BASE_URL_IMG + backdrop_path : ''
  const posterSrc = poster_path ? BASE_URL_IMG + poster_path : ''

  useEffect(() => {
    dispatch(getFilmDetalis(filmId, contentType))
  }, [dispatch, filmId, contentType])

  const onImgLoadError = () => {
    setIsLoadError(true)
  }

  const genreList = genres?.map(genre => {
    return (
      <span className='filmPage__genre' key={genre.id} >
        {genre.name}
      </span>
    )
  })

  const onReturnBtnClicked = () => {
    navigate(-1)
  }

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
                {isFetching ?
                  <Spin size="large" /> :
                  <img
                    onError={onImgLoadError}
                    src={isLoadError ? altImg : posterSrc}
                    className='filmPage__img' alt="#"
                  />}
              </div>
            </div>
          </div>

          <div className='filmPage__rcol'>

            {isFetching ?
              <Skeleton
                paragraph={{ rows: 12, width: ['250px'] }}
                active
              /> :
              <div className='filmPage__info'>

                <div className='filmPage__title-block'>
                  <h1 className='filmPage__title'>
                    {title ?? name}
                    <span className='filmPage__suptitle'>
                      {`(${releaseYear})`}
                    </span>
                  </h1>
                  <span className='filmPage__tag'>
                    {tagline}
                  </span>
                </div>

                <span>{release_date || first_air_date} {status && `(${status})`}</span>

                <div className='filmPage__genres'>
                  {genreList}
                </div>

                <span>{convertRuntime(runtime)}</span>

                <div className='filmPage__rating'>
                  <Rating rating={vote_average} vote_count={vote_count} />
                  <span className='filmPage__rating-name'>
                    User Score
                  </span>
                </div>

                {budget ? <span>Budget: {budget}</span> : ''}
                {revenue ? <span>Revenue: {revenue}</span> : ''}

                <div className='filmPage-overview'>
                  <h2 className='filmPage-overview__title'>Overview</h2>
                  <p className='filmPage-overview__text'>{overview}</p>
                </div>

                {homepage && <a href={homepage} target='blank'>visit homepage</a>}
              </div>
            }

          </div>
        </div>

        <div className='filmPage__bottom'>
          <Button
            onClick={onReturnBtnClicked}
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
