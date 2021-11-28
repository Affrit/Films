import './style.scss'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesSider } from './MoviesPageSider/MoviesSider';
import { getMoviesPageData, setMoviesPageAC } from '../../store/actions/moviesPageActions';
import { Pagination } from 'antd';
import MoviesSpawner from '../MoviesSpawner/MoviesSpawner';
import { moviesDataSelector } from './selector';
import { useLocation } from 'react-router';
import { getCurrentLocation } from '../../helpers/getLocation';
import { getGenreList } from '../../store/actions/moviesPageActions';

export const MoviesPage = () => {
  const dispatch = useDispatch()
  const { page, total_results, results } = useSelector(moviesDataSelector)
  const location = useLocation()
  const contentType = getCurrentLocation(location.pathname)
  const [savedLocation, setSavedLocation] = useState(contentType)

  useEffect(() => {
    dispatch(getMoviesPageData(page, contentType))
  }, [dispatch, page])

  useEffect(() => {
    if (contentType !== savedLocation) {
      dispatch(getMoviesPageData(1, contentType))
      setSavedLocation(contentType)
    }
    dispatch(getGenreList(contentType))
  }, [dispatch, contentType])

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
      <div className='movies-page' >
        Movies Page
        <MoviesSpawner
          data={results}
          contentType={contentType}
        />
        {
          total_results > 20 &&
          <Pagination
            showQuickJumper
            showSizeChanger={false}
            current={page} pageSize={20}
            total={total_results}
            onChange={onChangePage}
            className='pagination'
          />
        }
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