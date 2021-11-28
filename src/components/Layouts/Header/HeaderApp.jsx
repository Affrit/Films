import React from 'react';
import './style.scss'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import logo from '../../../img/logo.png';

const { Header } = Layout
const headerLinks = ['sign-up', 'movie', 'tv', 'favorites']
const headerItems = headerLinks.map(item => {
  return <Menu.Item key={item}>
    <Link to={`/${item}`} >{item}</Link>
  </Menu.Item>
})

export const HeaderApp = () => {
  const location = useLocation()
  const currentLocation = location.pathname.split('/')[1]

  return (
    <Header className="header">
      <div className="header__logo">
        <Link to='/'><img className="header__img" src={logo} alt="" /></Link>
      </div>
      <Menu className="header__menu" theme="dark" mode="horizontal" defaultSelectedKeys={[currentLocation]}>
        {headerItems}
        <Menu.Item key='search'>
          <Link to='/search/movie'>search</Link>
        </Menu.Item>
      </Menu>
      <div className='header__user'>User Yesr</div>
    </Header>
  )
}

