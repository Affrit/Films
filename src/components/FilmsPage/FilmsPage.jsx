import './style.css'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../store/actions/actions';
import { Pagination, Input } from 'antd';
import { setPageAC } from '../../store/actions/actions';
import { SiderApp } from '../Layouts/Sider/SiderApp';

const { Search } = Input;
const baseUrl = 'https://image.tmdb.org/t/p/w500'

export const FilmsPage = () => {
  const [ inputValue, setInputValue] = useState('')
  const { filmsData, isFetching } = useSelector(({ filmsPage: { filmsData, isFetching } }) => ({
    filmsData, isFetching
  }))
  const { page, total_results } = useSelector(({ filmsPage: { filmsData: { page, total_pages, total_results } } }) => ({
    page, total_pages, total_results
  }))
  //const { page, total_pages, total_results } = filmsData
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFilms(page, inputValue))
  }, [page])

  const spawnImg = () => {
    if (!filmsData.results) return
    if (filmsData.results.length === 0) return <span>Films not Found</span>

    return filmsData.results.map(film => { ////////// film card will be return here
      return <Link key={film.id} to={`/films/${film.id}`}>
        <div className='films__item'>
          <img src={baseUrl + film.poster_path} style={{ width: '200px' }} alt="#" />
        </div>
      </Link>
    })
  }

  const onChangePage = (page, itemsOnPage) => {
    dispatch(setPageAC(page))
  }

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  const onSearch = () => {
    dispatch(getFilms(page, inputValue))
    setInputValue('')
  }


  return (
    <>
      <SiderApp />
      <div className='films-page'>
        <div>
          FilmsPage
        </div>
        <div>
          <Search
            onChange={onInputChange}
            value={inputValue}
            onSearch={onSearch}
            onPressEnter={onSearch}
            placeholder="input search text"
            enterButton="Search" size="large"
            loading={isFetching}
          />
        </div>
        <div className='films'>
          {isFetching ? <span>LOADING...</span> : spawnImg()}
        </div>
        <Pagination showQuickJumper showSizeChanger={false}
          current={page} pageSize={20} total={total_results}
          onChange={onChangePage}
        />
      </div>
    </>
  )
}
