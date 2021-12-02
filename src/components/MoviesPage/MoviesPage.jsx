// libs
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
// components
import { Pagination, Alert } from 'antd';
import { MoviesSider } from './MoviesPageSider/MoviesSider';
import MoviesSpawner from '../MoviesSpawner/MoviesSpawner';
// other
import {
  getMoviesPageData, setMoviesPageAC,
  getGenreList, setClearData, setClearMoviesErrors
} from '../../store/actions/moviesPageActions';
import { moviesDataSelector } from './selector';
import { getCurrentLocation } from '../../helpers/getLocation';
import { spawnErorrsText } from '../../helpers/spawnErrorsText';
import './style.scss';

export const MoviesPage = () => {
  const dispatch = useDispatch()
  const { page, total_results, results, errors, isMoviesFetching } = useSelector(moviesDataSelector)
  const location = useLocation()
  const contentType = getCurrentLocation(location.pathname)
  const [savedLocation, setSavedLocation] = useState(contentType)

  useEffect(() => {
    if (contentType !== savedLocation) {
      dispatch(setClearData())
      setSavedLocation(contentType)
    } else {
      dispatch(getMoviesPageData(page, contentType))
      dispatch(getGenreList(contentType))
    }
  }, [dispatch, page, contentType, savedLocation])

  const onChangePage = (page) => {
    dispatch(setMoviesPageAC(page))
  }

  const onAlertClose = () => {
    dispatch(setClearMoviesErrors())
  }

  const title = contentType === 'movie' ? 'All movies' : 'All TV shows'

  return (
    <>
      <MoviesSider contentType={savedLocation} />
      <div className='movies-page' >
        <h1 className='movies-page__title'>{title}</h1>
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
        {errors.length ?
          <Alert
            message="Search error"
            description={spawnErorrsText(errors)}
            onClose={onAlertClose}
            type="error"
            className='search-page__error'
            closable
          /> : ''
        }
      </div>
    </>
  )
}

/* working good but have wornings
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
*/



/*
const dispatch = useDispatch()
  const { moviesPageData, isMoviesFetching } = useSelector(({ moviesPage: { moviesPageData, isMoviesFetching } }) => ({
    moviesPageData, isMoviesFetching
  }))
  const { page } = useSelector(({ moviesPage: { moviesPageData: { page } } }) => ({
    page
  }))

    useEffect(() => {
      const onScroll = (e) => {
        console.log(e)
        //console.log(e.wheelDelta < 0)
        console.log(window.scrollY)
      }
      window.addEventListener('wheel', onScroll)
    }, [])

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