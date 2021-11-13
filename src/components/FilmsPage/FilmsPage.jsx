import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../store/actions/actions';

const baseUrl = 'https://image.tmdb.org/t/p/w500'

export const FilmsPage = () => {
  const dispatch = useDispatch()
  const { filmsData, isFetching } = useSelector(({ filmsPage: { filmsData, isFetching } }) => ({
    filmsData, isFetching
  }))

  useEffect(() => {
    dispatch(getFilms(1))
  }, [])

  const spawnImg = () => {
    if (!filmsData.results) return
    return filmsData.results.map(film => { ////////// film card will be return here
      return <Link key={film.id} to={`/films/${film.id}`}> 
        <img src={baseUrl + film.poster_path} style={{ width: '200px' }} alt="#" /> 
      </Link>
    })
  }


  return (
    <div>
      <div>
        FilmsPage
        <div>
          <Link to='/sign-in' >to sign-in</Link>
        </div>
        <div>
          <Link to='/sign-up' >to sign-up</Link>
        </div>
        <div>
          <Link to='/favorites' >to favorites</Link>
        </div>
      </div>
      <div>
        {isFetching ? <span>LOADING...</span> : spawnImg()}
      </div>
    </div>
  )
}
