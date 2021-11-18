import React, { useState } from 'react';
import { Skeleton, Card } from 'antd';
import { Raiting } from '../Raiting/Raiting';

const { Meta } = Card;

export const MovieCard = ({ filmData, style, isFetching }) => {
  const { imgSrc, title, releaseDate, rating } = filmData
  const [imgFetching, setImgFetching] = useState(true)

  const onLoad = () => {
    setImgFetching(false)
    console.log('LOADED')
  }

  return (
    <Card
      hoverable
      style={style}
      cover={<img alt="example" src={imgSrc} onLoad={onLoad} />}
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
