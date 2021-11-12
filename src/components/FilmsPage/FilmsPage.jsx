import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../store/actions/actions';

const baseUrl = 'https://image.tmdb.org/t/p/w500'

export const FilmsPage = () => {
  const dispatch = useDispatch()
  const { films } = useSelector(({ filmsPage: { films } }) => ({
    films
  }))

  useEffect(() => {
    dispatch(getFilms(1))
  }, [])

  const spawnImg = () => {
    return films.results.map(film => {
      return <img key={film.id} src={baseUrl + film.poster_path} style={{width: '200px'}} alt="#" />
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
        {films.results && spawnImg()}
      </div>
    </div>
  )
}
