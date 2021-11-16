import './style.css'
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesData, getShowsData } from '../../store/actions/searchPageActions';
import { Input } from 'antd';
import { setSearchWordAC } from '../../store/actions/searchPageActions';
import { SearchSider } from '../Layouts/Sider/SearchSider';
import { SearchedMovies } from './SearchedMovies';
import { SearchedShows } from './SearchedShows';

const { Search } = Input;

export const SearchPage = () => {
  const [ inputValue, setInputValue] = useState('')
  const { isFetching } = useSelector(({ searchPage: { isFetching } }) => ({
   isFetching
  }))
  const dispatch = useDispatch()
  const location = useLocation()
  const currentLocation = location.pathname.split('/').pop()

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  const onSearch = () => {
    dispatch(setSearchWordAC(inputValue))
    dispatch(getMoviesData(1))
    dispatch(getShowsData(1))
  }

  
  return (
    <>
      <SearchSider />
      <div className='search-page'>
        <div>
          SearchPage
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
        {currentLocation === 'movies' ? <SearchedMovies /> : <SearchedShows />}
      </div>
    </>
  )
}
