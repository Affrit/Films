import React, { useState } from 'react';
import './style.scss'
import { Skeleton, Card, Button } from 'antd';
import { Rating } from '../Rating/Rating';
import altImg from '../../img/default.png'
import { Link } from 'react-router-dom';
import { favoritesToggle } from '../../store/actions/favoritesPageActions';
import { useDispatch } from 'react-redux';
import { BASE_URL_IMG } from '../../constants/constants';

const { Meta } = Card;

export const MovieCard = ({ filmData, style, isFetching }) => {
  const { id, poster_path, title, release_date, vote_average, vote_count, contentType } = filmData
  const [imgFetching, setImgFetching] = useState(true)
  const [isLoadError, setIsLoadError] = useState(false)
  const dispatch = useDispatch()
  const imgSrc = BASE_URL_IMG + poster_path

  const onLoad = () => {
    setImgFetching(false)
  }

  const onError = () => {
    setImgFetching(false)
    setIsLoadError(true)
  }

  const onLikeClicked = () => {
    dispatch(favoritesToggle(filmData))
    console.log('LIKE')
  }

  const imgLink = <Link to={`/${contentType}/${id}`}>
    <img
      className='movie-card__img' alt='#'
      src={isLoadError ? altImg : imgSrc}
      onLoad={onLoad} onError={onError}
    />
  </Link>
  const titleLink = <Link to={`/${contentType}/${id}`}>{title}</Link>

  return (
    <Card
      extra={<Button onClick={onLikeClicked}>TEST</Button>}
      hoverable
      className='movie-card'
      cover={imgLink}
    >
      <Skeleton loading={imgFetching} active>
        <Meta
          avatar={<div className='movie-card__rating'><Rating rating={vote_average} vote_count={vote_count} /></div>}
          title={titleLink}
          description={release_date}
        />
      </Skeleton>
    </Card>
  )
}
