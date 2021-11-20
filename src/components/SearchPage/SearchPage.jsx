import './style.css'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedData, setSearchPageAC } from '../../store/actions/searchPageActions';
import { Input } from 'antd';
import { Pagination } from 'antd';
import { setSearchWordAC } from '../../store/actions/searchPageActions';
import { SearchSider } from '../Layouts/Sider/SearchSider';
import { moviesSpawner } from '../../helpers/moviesSpawner';
import { useLocation } from 'react-router';

const { Search } = Input;

export const SearchPage = () => {
  const [inputValue, setInputValue] = useState('')
  const { isFetching, searchWord, searchData } = useSelector(({ searchPage: { isFetching, searchWord, searchData } }) => ({
    isFetching, searchWord, searchData
  }))
  const { page, total_results } = useSelector(({ searchPage: { searchData: { page, total_results } } }) => ({
   page, total_results
  }))
  const dispatch = useDispatch()
  const location = useLocation()
  const currentLocation = location.pathname.split('/').pop()

  useEffect(() => {
    dispatch(getSearchedData(page, currentLocation))
  }, [searchWord, page, currentLocation, dispatch])

  const onChangePage = (page) => {
    dispatch(setSearchPageAC(page))
  }

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  const onSearch = () => {
    dispatch(setSearchWordAC(inputValue))
    dispatch(setSearchPageAC(1))
  }

  return (
    <>
      <SearchSider currentLocation={currentLocation} />
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
        {total_results > 0 ? <span>We found {total_results} results</span> : ''}
        <div className='films'>
          {moviesSpawner(searchData)}
        </div>
        <Pagination showQuickJumper showSizeChanger={false}
          current={page} pageSize={20} total={total_results}
          onChange={onChangePage}
        />
      </div>
    </>
  )
}
