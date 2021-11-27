import './style.scss'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getFilmDetalis } from '../../store/actions/filmActions';
import { BASE_URL_IMG } from '../../constants/constants';
import { filmDetalisSelector } from './selector';
import { useLocation, useParams } from 'react-router';
import { Spin } from 'antd';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const FilmDetalisPage = () => {
  const dispatch = useDispatch()
  const { film: filmId } = useParams()
  const { isFetching, backdrop_path, poster_path, title,
    overview, tagline, vote_average, genres, release_date,
    runtime, homepage, id, original_title, budget, status, name, first_air_date
  } = useSelector(filmDetalisSelector)
  const location = useLocation()
  const contentType = location.pathname.split('/')[1]

  const releaseYear = release_date?.split('-')[0] ?? first_air_date?.split('-')[0]

  useEffect(() => {
    dispatch(getFilmDetalis(filmId, contentType))
  }, [dispatch, filmId, contentType])

  const spawnImg = () => {
    if (!poster_path) return
    return <img src={BASE_URL_IMG + poster_path} className='filmPage__img' alt="#" />
  }

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

  return (
    <div className='filmPage-wrap' style={{ backgroundImage: `url(${BASE_URL_IMG + backdrop_path})` }}>
      <div className='filmPage'>

        <div className='filmPage__lcol'>

          <div className='filmPage__visual'>
            <div className='img-wrap'>
              {isFetching ? <Spin size="large" /> : spawnImg()}
            </div>
          </div>

        </div>

        <div className='filmPage__rcol'>

          <div className='filmPage__info'>
            <h1 className='filmPage__title'>
              {title ?? name}
              <span className='filmPage__suptitle'>{`(${releaseYear})`}</span>
            </h1>
            <span>{release_date}</span>
            <Link to='/movie'>to All Films</Link>
            <span>safasfsaf</span>
            <span>safasfsaf</span>
            <span>safasfsaf</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim qui asperiores, alias fugit ipsam vel iusto repellendus veritatis aperiam sed expedita incidunt laboriosam officia, quaerat nostrum maiores suscipit vitae.</span>
            <span>safasfsaf</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum ea corporis nemo at accusamus beatae neque nam voluptatibus inventore voluptatum, ducimus eos alias pariatur. Dicta praesentium laborum expedita facere?</span>

            <span>safasfsaf</span>

          </div>

        </div>

      </div>
    </div>
  )
}
