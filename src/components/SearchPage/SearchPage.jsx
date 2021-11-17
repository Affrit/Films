import './style.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedMoviesData, getSearchedShowsData } from '../../store/actions/searchPageActions';
import { Input } from 'antd';
import { setSearchWordAC } from '../../store/actions/searchPageActions';
import { SearchSider } from '../Layouts/Sider/SearchSider';

const { Search } = Input;

export const SearchPage = ({ children }) => {
  const [ inputValue, setInputValue] = useState('')
  const { isFetching } = useSelector(({ searchPage: { isFetching } }) => ({
   isFetching
  }))
  const dispatch = useDispatch()

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  const onSearch = () => {
    dispatch(setSearchWordAC(inputValue))
    dispatch(getSearchedMoviesData())
    dispatch(getSearchedShowsData())
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
        { children }
      </div>
    </>
  )
}
