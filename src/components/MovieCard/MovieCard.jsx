import React, { useState } from 'react';
import './style.scss'
import { Skeleton, Card, Button } from 'antd';
import { Raiting } from '../Raiting/Raiting';
import altImg from '../../img/default.png'
import { Link } from 'react-router-dom';

const { Meta } = Card;

export const MovieCard = ({ filmData, style, isFetching }) => {
  const { id, imgSrc, title, releaseDate, rating } = filmData
  const [imgFetching, setImgFetching] = useState(true)
  const [isLoadError, setIsLoadError] = useState(false)

  const onLoad = () => {
    setImgFetching(false)
  }

  const onError = () => {
    setImgFetching(false)
    setIsLoadError(true)
  }

  const imgLink = <Link to={`/films/${id}`}>
    <img
      className='movie-card__img' alt='#'
      src={isLoadError ? altImg : imgSrc}
      onLoad={onLoad} onError={onError}
    />
  </Link>

  const titleLink = <Link to={`/films/${id}`}>{title}</Link>

  return (
    <Card
      hoverable
      className='movie-card'
      cover={imgLink}
    >
      <Skeleton loading={imgFetching} active>
        <Meta
          avatar={<Raiting rating={rating} />}
          title={titleLink}
          description={releaseDate}
        />
      </Skeleton>
    </Card>
  )
}
