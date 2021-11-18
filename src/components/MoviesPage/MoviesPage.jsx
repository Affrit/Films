import './style.css'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL_IMG } from '../../constants/constants';
import { MoviesSider } from '../Layouts/Sider/MoviesSider';
import { getMoviesPageData, setMoviesFetchingAC } from '../../store/actions/moviesPageActions';
import { Button } from 'antd';

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
    dispatch(setMoviesFetchingAC(true))
    document.addEventListener('scroll', onScroll)
  }

  return (
    <>
      <MoviesSider lol='LOL' />
      <div className='movies-page'>
        Movies Page
        <div className='movies'>
          {isMoviesFetching ? <span>LOADING...</span> : spawnImg(moviesPageData)}
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
