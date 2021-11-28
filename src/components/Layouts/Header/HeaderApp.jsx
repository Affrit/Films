import React from 'react';
import './style.scss'
import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../PrivateRoute/selector';
import logo from '../../../img/logo.png';
import { User } from '../../User/User';

const { Header } = Layout
const headerLinks = ['sign-up', 'movie', 'tv', 'favorites']
const headerItems = headerLinks.map(item => {
  return <Menu.Item key={item}>
    <Link to={`/${item}`} >{item}</Link>
  </Menu.Item>
})

export const HeaderApp = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const currentLocation = location.pathname.split('/')[1]
  const { username, isAuth } = useSelector(authSelector)

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

      {isAuth ?
        <User /> :
        <div className='header__refs'>
          <Link to="/">log in</Link>
          <Link to="/sign-up">sign up</Link>
        </div>
      }
    </Header>
  )
}

