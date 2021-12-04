// libs
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
// components
import { Layout, Menu } from 'antd';
import { User } from '../../User/User';
import { SearchOutlined } from '@ant-design/icons';
import { SearchComponent } from '../../SearchComponent/SearchComponent';
// other
import logo from '../../../img/logo.png';
import './style.scss';

const { Header } = Layout

export const HeaderApp = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()
  const currentLocation = location.pathname.split('/')[1]

  useEffect(() => {
    setIsSearchOpen(false)
  }, [location])

  const onSearchClicked = () => {
    setIsSearchOpen(prevState => !prevState)
  }

  return (
    <Header className="header">
      <div className="header__logo">
        <Link to='/'>
          <img className="header__img" src={logo} alt="" />
        </Link>
      </div>

      <Menu
        className="header__menu"
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentLocation]}
      >
        
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
        <SearchComponent />
      </div>

      <User />

    </Header>
  )
}
