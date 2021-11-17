import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedShowsData } from '../../store/actions/searchPageActions';
import { Pagination } from 'antd';
import { BASE_URL_IMG } from '../../constants/constants';
import { setShowsPageAC } from '../../store/actions/searchPageActions';
import { SearchPage } from './SearchPage';

export const SearchedShows = () => {
  const { showsData, isFetching } = useSelector(({ searchPage: { showsData, isFetching } }) => ({
    showsData, isFetching
  }))
  const { page, total_results } = useSelector(({ searchPage: { showsData: { page, total_pages, total_results } } }) => ({
    page, total_pages, total_results
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearchedShowsData(page))
  }, [page])

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

  const onChangePage = (page) => {
    dispatch(setShowsPageAC(page))
  }

  return (
    <SearchPage>
      <div className='films'>
        {isFetching ?
          <span>LOADING...</span> :
          spawnImg(showsData)}
      </div>
      <Pagination showQuickJumper showSizeChanger={false}
        current={page} pageSize={20} total={total_results}
        onChange={onChangePage}
      />
    </SearchPage>
  )
}
