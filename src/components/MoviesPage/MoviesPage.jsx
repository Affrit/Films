import './style.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL_IMG } from '../../constants/constants';
import { MoviesSider } from '../Layouts/Sider/MoviesSider';
import { getMoviesPageData, setCleanMoviesState, setPageAC } from '../../store/actions/moviesPageActions';
import { Button } from 'antd';

export const MoviesPage = () => {
  const dispatch = useDispatch()
  const { moviesPageData, isFetching } = useSelector(({ moviesPage: { moviesPageData, isFetching } }) => ({
    moviesPageData, isFetching
  }))
  const { page } = useSelector(({ moviesPage: { moviesPageData: { page } } }) => ({
    page
  }))

  useEffect(() => {
    dispatch(getMoviesPageData(page))
  }, [page])

  useEffect(() => {
    /*
    const onScroll = (e) => {
      console.log(e)
      //console.log(e.wheelDelta < 0)
      console.log(window.scrollY)
    }
    window.addEventListener('wheel', onScroll)
    */
  }, [])

  const spawnImg = (data) => {
    if (!data.results) return
    if (data.results.length === 0) return <span>Films not Found</span>

    return data.results.map(film => { ////////// film card will be return here
      return <Link key={film.id} to={`/films/${film.id}`}>
        <div className='films__item'>
          <img src={BASE_URL_IMG + film.poster_path} style={{ width: '200px' }} alt="#" />
        </div>
      </Link>
    })
  }

  const onLoadMore = () => {
    dispatch(setPageAC(page + 1))
  }

  return (
    <>
      <MoviesSider lol='LOL' />
      <div className='movies-page'>
        Movies Page
        <div className='movies'>
          {isFetching ? <span>LOADING...</span> : spawnImg(moviesPageData)}
        </div>
        <Button
          onClick={onLoadMore}
          type="primary"
          loading={isFetching}
          block={true}
          shape="round"
          size={'large'}
        >
          Load More
        </Button>
      </div>
    </>
  )
}
