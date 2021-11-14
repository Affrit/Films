import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../store/actions/actions';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { setPageAC } from '../../store/actions/actions';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const baseUrl = 'https://image.tmdb.org/t/p/w500'

export const FilmsPage = () => {
  const dispatch = useDispatch()
  const { filmsData, isFetching } = useSelector(({ filmsPage: { filmsData, isFetching } }) => ({
    filmsData, isFetching
  }))
  const { page, total_pages, total_results } = useSelector(({ filmsPage: { filmsData: { page, total_pages, total_results } } }) => ({
    page, total_pages, total_results
  }))

  useEffect(() => {
    dispatch(getFilms(page, 'war'))
  }, [page])

  const spawnImg = () => {
    if (!filmsData.results) return
    if (filmsData.results.length === 0) return <span>Films not Found</span>
    return filmsData.results.map(film => { ////////// film card will be return here
      return <Link key={film.id} to={`/films/${film.id}`}>
        <img src={baseUrl + film.poster_path} style={{ width: '200px' }} alt="#" />
      </Link>
    })
  }

  const onChangePage = (page, itemsOnPage) => {
    dispatch(setPageAC(page))
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
        {isFetching ? <span>LOADING...</span> : spawnImg()}
      </div>
      <Pagination showQuickJumper showSizeChanger={false}
        current={page} pageSize={20} total={total_results}
        onChange={onChangePage}
      />
    </div>
  )
}
