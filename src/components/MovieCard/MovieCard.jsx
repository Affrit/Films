// libs
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// components
import { Skeleton, Card, Rate, Alert } from 'antd';
import { Rating } from '../Rating/Rating';
// other
import { favoritesToggle } from '../../store/actions/favoritesPageActions';
import { BASE_URL_IMG } from '../../constants/constants';
import { isInFavorites } from '../../helpers/favoriteHelpers';
import { favoritesSelector } from '../FavoritesPage/selector';
import { authSelector } from '../PrivateRoute/selector';
import altImg from '../../img/default.png';
import './style.scss';

const { Meta } = Card;

export const MovieCard = ({ filmData, isFetching }) => {
  const { id, poster_path, title, release_date, vote_average, vote_count, contentType } = filmData
  const [imgFetching, setImgFetching] = useState(true)
  const [isLoadError, setIsLoadError] = useState(false)
  const [isAuthError, setIsError] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const dispatch = useDispatch()
  const { isAuth } = useSelector(authSelector)
  const { favoritesData } = useSelector(favoritesSelector)
  const imgSrc = poster_path ? BASE_URL_IMG + poster_path : ''

  useEffect(() => {
    if (isInFavorites(filmData, favoritesData)) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    }
  }, [favoritesData, filmData])

  const onLoad = () => {
    setImgFetching(false)
  }

  const onError = () => {
    setImgFetching(false)
    setIsLoadError(true)
  }

  const onLikeClicked = () => {
    if (isAuth) {
      dispatch(favoritesToggle(filmData))
    } else {
      setIsError(true)
    }
  }

  const onAlertClose = () => {
    setIsError(false)
  }

  const cardCover = (
    <div className='movie-card__cover'>
      <Rate
        className='movie-card__like'
        count={1}
        onChange={onLikeClicked}
        value={isLiked}
      />
      <Link to={`/${contentType}/${id}`}>
        <img
          className='movie-card__img' alt='#'
          src={isLoadError ? altImg : imgSrc}
          onLoad={onLoad} onError={onError}
        />
      </Link>
    </div>
  )

  const titleLink = (
    <Link to={`/${contentType}/${id}`}>
      {title}
    </Link>
  )
  const avatar = (
    <div className='movie-card__rating'>
      <Rating
        rating={vote_average}
        vote_count={vote_count}
      />
    </div>
  )

  return (
    <>
      <Card
        hoverable
        className='movie-card'
        cover={cardCover}
      >
        <Skeleton loading={imgFetching} active>
          <Meta
            avatar={avatar}
            title={titleLink}
            description={release_date}
          />
        </Skeleton>

        {isAuthError &&
          <div className='card-alert'>
            <Alert
              message="You must be autorized"
              type="warning"
              closable
              onClose={onAlertClose}
            />
          </div>
        }
      </Card>
    </>
  )
}
