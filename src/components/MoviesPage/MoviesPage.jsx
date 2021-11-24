import './style.scss'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesSider } from './MoviesPageSider/MoviesSider';
import { getMoviesPageData, setMoviesPageAC } from '../../store/actions/moviesPageActions';
import { Button, Pagination } from 'antd';
import { MoviesSpawner } from '../MoviesSpawner/MoviesSpawner';
import { moviesDataSelector } from './selector';

export const MoviesPage = () => {
  const dispatch = useDispatch()
  const { isMoviesFetching, page, total_results, results } = useSelector(moviesDataSelector)

  useEffect(() => {
    dispatch(getMoviesPageData(page))
  }, [dispatch, page])

  const onChangePage = (page) => {
    dispatch(setMoviesPageAC(page))
  }
  /*
    useEffect(() => {
      const onScroll = (e) => {
        console.log(e)
        //console.log(e.wheelDelta < 0)
        console.log(window.scrollY)
      }
      window.addEventListener('wheel', onScroll)
    }, [])
  */
  return (
    <>
      <MoviesSider />
      <div className='movies-page'>
        Movies Page
        <MoviesSpawner
          data={results}
          contentType={'movie'}
        />
        <Pagination
          showQuickJumper
          showSizeChanger={false}
          current={page} pageSize={20}
          total={total_results}
          onChange={onChangePage}
        />
      </div>
    </>
  )
}



/*
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
  }, [dispatch, isMoviesFetching])

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

    const onScroll = (e) => {
      console.log(e)
      //console.log(e.wheelDelta < 0)
      console.log(window.scrollY)
    }
    window.addEventListener('wheel', onScroll)

  }, [])

  const onLoadMore = () => {
    dispatch(setMoviesFetchingAC(true))
    document.addEventListener('scroll', onScroll)
  }

  return (
    <>
      <MoviesSider />
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
  */