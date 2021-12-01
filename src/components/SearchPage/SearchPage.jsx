// libs
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
//components
import { Pagination, Alert } from 'antd';
import { SearchSider } from './SearchPageSider/SearchSider';
import MoviesSpawner from '../MoviesSpawner/MoviesSpawner';
// other
import { getSearchedData, setClearSerchErrors, setSearchPageAC } from '../../store/actions/searchPageActions';
import { searchDataSelector } from './selector';
import { spawnErorrsText } from '../../helpers/spawnErrorsText';
import './style.scss';

export const SearchPage = () => {
  const { searchWord, page, total_results, results, errors } = useSelector(searchDataSelector)
  const dispatch = useDispatch()
  const { type: contentType } = useParams()

  useEffect(() => {
    dispatch(getSearchedData(page, contentType))
  }, [searchWord, page, contentType, dispatch])

  const onChangePage = (page) => {
    dispatch(setSearchPageAC(page))
  }

  const onAlertClose = () => {
    dispatch(setClearSerchErrors())
  }

  return (
    <>
      <SearchSider currentLocation={contentType} />
      <div className='search-page'>
        <div>
          <h1 className='search-page__title'>Search Result</h1>
        </div>

        {total_results ? <span className='search-result'>We found {total_results} results</span> : ''}

        <MoviesSpawner
          data={results}
          contentType={contentType}
        />

        {total_results > 20 &&
          <Pagination
            showQuickJumper
            showSizeChanger={false}
            current={page} pageSize={20}
            total={total_results}
            onChange={onChangePage}
            className='pagination'
          />
        }
        {errors.length ?
          <Alert
            message="Search error"
            description={spawnErorrsText(errors)}
            onClose={onAlertClose}
            type="error"
            className='search-page__error'
            closable
          /> : ''
        }
      </div>
    </>
  )
}
