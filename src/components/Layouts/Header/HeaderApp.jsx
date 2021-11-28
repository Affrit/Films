import React from 'react';
import './style.scss'
import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../PrivateRoute/selector';
import logo from '../../../img/logo.png';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { setLogOut } from '../../../store/actions/authActions';

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

  const onLogOut = () => {
    dispatch(setLogOut(false))
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={onLogOut} size="small">Log out</Button>
      </Menu.Item>
    </Menu>
  );

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
        <div className='header__user'>
          <span>{`user: ${username}`}</span>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              settings <DownOutlined />
            </a>
          </Dropdown>
        </div> :
        <Link to="/">log in</Link>
      }

    </Header>
  )
}

