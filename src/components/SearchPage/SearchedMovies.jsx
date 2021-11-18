import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedMoviesData } from '../../store/actions/searchPageActions';
import { Pagination } from 'antd';
import { setMoviesPageAC } from '../../store/actions/searchPageActions';
import { SearchPage } from './SearchPage';
import { moviesSpawner } from '../../helpers/moviesSpawner';

export const SearchedMovies = () => {
  const { moviesData } = useSelector(({ searchPage: { moviesData } }) => ({
    moviesData
  }))
  const { page, total_results } = useSelector(({ searchPage: { moviesData: { page, total_results } } }) => ({
   page, total_results
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearchedMoviesData(page))
  }, [page])

  const onChangePage = (page) => {
    dispatch(setMoviesPageAC(page))
  }

  return (
    <SearchPage>
      <div className='films'>
        {/*isFetching ? <span>LOADING...</span> : spawnImg(moviesData)*/}
        {moviesSpawner(moviesData)}
      </div>
      <Pagination showQuickJumper showSizeChanger={false}
        current={page} pageSize={20} total={total_results}
        onChange={onChangePage}
      />
    </SearchPage>
  )
}
