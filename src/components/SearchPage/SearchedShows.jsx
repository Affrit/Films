import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedShowsData } from '../../store/actions/searchPageActions';
import { Pagination } from 'antd';
import { setShowsPageAC } from '../../store/actions/searchPageActions';
import { SearchPage } from './SearchPage';
import { moviesSpawner } from '../../helpers/moviesSpawner';

export const SearchedShows = () => {
  const { showsData, isFetching } = useSelector(({ searchPage: { showsData, isFetching } }) => ({
    showsData, isFetching
  }))
  const { page, total_results } = useSelector(({ searchPage: { showsData: { page, total_results } } }) => ({
    page, total_results
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearchedShowsData(page))
  }, [page])

  const onChangePage = (page) => {
    dispatch(setShowsPageAC(page))
  }

  return (
    <SearchPage>
      <div className='films'>
        {isFetching ?
          <span>LOADING...</span> :
          moviesSpawner(showsData)}
      </div>
      <Pagination showQuickJumper showSizeChanger={false}
        current={page} pageSize={20} total={total_results}
        onChange={onChangePage}
      />
    </SearchPage>
  )
}
