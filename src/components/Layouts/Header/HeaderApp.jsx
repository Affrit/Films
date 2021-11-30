// libs
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
// components
import { Layout, Menu } from 'antd';
import { User } from '../../User/User';
import { SearchOutlined } from '@ant-design/icons';
import { SearchComponent } from '../../SearchComponent/SearchComponent';
// other
import { authSelector } from '../../PrivateRoute/selector';
import logo from '../../../img/logo.png';
import './style.scss';

const { Header } = Layout

export const HeaderApp = () => {
  const location = useLocation()
  const currentLocation = location.pathname.split('/')[1]
  const { isAuth } = useSelector(authSelector)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    setIsSearchOpen(false)
  }, [currentLocation])

  const onSearchClicked = () => {
    setIsSearchOpen(prevState => !prevState)
  }
  
  const onSearched = () => {
    setIsSearchOpen(false)
  }

  return (
    <Header className="header">
      <div className="header__logo">
        <Link to='/'><img className="header__img" src={logo} alt="" /></Link>
      </div>

      <Menu className="header__menu" theme="dark" mode="horizontal" defaultSelectedKeys={[currentLocation]}>
        <Menu.Item key='movie'>
          <Link to='/movie'>movies</Link>
        </Menu.Item>
        <Menu.Item key='tv'>
          <Link to='/tv'>tv shows</Link>
        </Menu.Item>
        <Menu.Item key='favorites'>
          <Link to='/favorites'>favorites</Link>
        </Menu.Item>
        <Menu.Item onClick={onSearchClicked} key='search'>
          <SearchOutlined />
        </Menu.Item>
      </Menu>

      <div className={isSearchOpen ? 'search' : 'search_hide'}>
        <SearchComponent onSearched={onSearched} />
      </div>

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
