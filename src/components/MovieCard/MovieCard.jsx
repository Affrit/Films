import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/actions/filmActions';
import { useLocation } from 'react-router-dom';
import { BASE_URL_IMG } from '../../constants/constants';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Raiting } from '../Raiting/Raiting';

const { Meta } = Card;

export const MovieCard = ({ filmData, style, isFetching }) => {
  const { Id, imgSrc, title, releaseDate, rating } = filmData
  const [imgFetching, setImgFetching] = useState(true)
  
  const onLoad = () => {
    setImgFetching(false)
    console.log('LOADED')
  }

  return (
    <Card
      hoverable
      style={style}
      cover={<img alt="example" src={imgSrc} onLoad={onLoad}/>}
    >
      <Skeleton loading={isFetching || imgFetching} active>
        <Meta
          avatar={<Raiting rating={rating} />}
          title={title}
          description={releaseDate}
        />
      </Skeleton>
    </Card>
  )
}
