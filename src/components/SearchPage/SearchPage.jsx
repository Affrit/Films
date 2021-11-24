import './style.scss'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedData, setSearchPageAC } from '../../store/actions/searchPageActions';
import { Input, Pagination } from 'antd';
import { setSearchWordAC } from '../../store/actions/searchPageActions';
import { SearchSider } from './SearchPageSider/SearchSider';
import { MoviesSpawner } from '../MoviesSpawner/MoviesSpawner';
import { searchDataSelector } from './selector';
import { useParams } from 'react-router';

const { Search } = Input;

export const SearchPage = () => {
  const [inputValue, setInputValue] = useState('')
  const { isFetching, searchWord, page, total_results, results } = useSelector(searchDataSelector)
  const dispatch = useDispatch()
  const { type: contentType } = useParams()

  useEffect(() => {
    dispatch(getSearchedData(page, contentType))
  }, [searchWord, page, contentType, dispatch])

  const onChangePage = (page) => {
    dispatch(setSearchPageAC(page))
  }
  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }
  const onSearch = () => {
    if (inputValue.length < 1) return;
    dispatch(setSearchWordAC(inputValue))
    dispatch(setSearchPageAC(1))
  }

  return (
    <>
      <SearchSider currentLocation={contentType} />
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
        {total_results ? <span>We found {total_results} results</span> : ''}
        <MoviesSpawner
          data={results}
          contentType={contentType}
        />
        <Pagination
          showQuickJumper
          showSizeChanger={false}
          current={page} pageSize={20}
          total={total_results}
          onChange={onChangePage}
        />
      </div>
    </>
  )
}
