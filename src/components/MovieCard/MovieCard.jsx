import React, { useState } from 'react';
import './style.scss'
import { Skeleton, Card } from 'antd';
import { Raiting } from '../Raiting/Raiting';
import altImg from '../../img/default.png'

const { Meta } = Card;

export const MovieCard = ({ filmData, style, isFetching }) => {
  const { imgSrc, title, releaseDate, rating } = filmData
  const [imgFetching, setImgFetching] = useState(true)
  const [isLoadError, setIsLoadError] = useState(false)

  const onLoad = () => {
    setImgFetching(false)
  }

  const onError = () => {
    setImgFetching(false)
    setIsLoadError(true)
  }

  return (
    <Card
      hoverable
      className='card'
      cover={<img alt='#' src={isLoadError ? altImg : imgSrc} onLoad={onLoad} onError={onError} />}
    >
      <Skeleton loading={imgFetching} active>
        <Meta
          avatar={<Raiting rating={rating} />}
          title={title}
          description={releaseDate}
        />
      </Skeleton>
    </Card>
  )
}
