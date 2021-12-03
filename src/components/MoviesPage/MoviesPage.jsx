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
  getMoviesPageData, setMoviesPage,
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
    dispatch(setMoviesPage(page))
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
          isFetching={isMoviesFetching}
        />

        {total_results > 20 &&
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
