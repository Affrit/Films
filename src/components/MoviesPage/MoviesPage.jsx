import './style.css'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesSider } from '../Layouts/Sider/MoviesSider';
import { getMoviesPageData, setMoviesFetchingAC } from '../../store/actions/moviesPageActions';
import { Button } from 'antd';
import { moviesSpawner } from '../../helpers/moviesSpawner';

export const MoviesPage = () => {
  const dispatch = useDispatch()
  const { moviesPageData, isMoviesFetching } = useSelector(({ moviesPage: { moviesPageData, isMoviesFetching } }) => ({
    moviesPageData, isMoviesFetching
  }))
  const { page } = useSelector(({ moviesPage: { moviesPageData: { page } } }) => ({
    page
  }))

  useEffect(() => {
    if (isMoviesFetching) {
      dispatch(getMoviesPageData(page + 1))
    }
  }, [isMoviesFetching])

  useEffect(() => {
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onScroll = (e) => {
    const commonHeight = e.target.documentElement.scrollHeight
    const currentPos = e.target.documentElement.scrollTop
    const windowHeigth = window.innerHeight
    const heightBufer = 10
    if (commonHeight - currentPos - heightBufer < windowHeigth) {
      dispatch(setMoviesFetchingAC(true))
    }
  }

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

  const onLoadMore = () => {
    dispatch(setMoviesFetchingAC(true))
    document.addEventListener('scroll', onScroll)
  }

  return (
    <>
      <MoviesSider lol='LOL' />
      <div className='movies-page'>
        Movies Page
        <div className='movies'>
          {moviesSpawner(moviesPageData)}
        </div>
        <Button
          onClick={onLoadMore}
          type="primary"
          loading={isMoviesFetching}
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
