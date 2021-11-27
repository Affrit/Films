import React, { useState } from 'react';
import './style.scss'
import { Skeleton, Card } from 'antd';
import { Rating } from '../Rating/Rating';
import altImg from '../../img/default.png'
import { Link } from 'react-router-dom';

const { Meta } = Card;

export const MovieCard = ({ filmData, style, isFetching }) => {
  const { id, imgSrc, title, releaseDate, rating, contentType } = filmData
  const [imgFetching, setImgFetching] = useState(true)
  const [isLoadError, setIsLoadError] = useState(false)

  const onLoad = () => {
    setImgFetching(false)
  }

  const onError = () => {
    setImgFetching(false)
    setIsLoadError(true)
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
      hoverable
      className='movie-card'
      cover={imgLink}
    >
      <Skeleton loading={imgFetching} active>
        <Meta
          avatar={<Rating rating={rating} />}
          title={titleLink}
          description={releaseDate}
        />
      </Skeleton>
    </Card>
  )
}
