// libs
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// components
import { DownOutlined } from '@ant-design/icons';
import { Button, Menu, Dropdown } from 'antd';
// other
import { authToggle, setLogOut, setUserData } from "../../store/actions/authActions";
import { setClearFavorites } from "../../store/actions/favoritesPageActions";
import { authSelector } from "../PrivateRoute/selector";
import { getRemeberedUser } from "../../helpers/authHelpers";
import './style.scss';

export const User = () => {
  const dispatch = useDispatch()
  const { username } = useSelector(authSelector)
  const { isAuth } = useSelector(authSelector)

  useEffect(() => {
    const remeberedUser = getRemeberedUser()
    if (remeberedUser) {
      dispatch(setUserData(remeberedUser))
      dispatch(authToggle(true))
    }
  }, [dispatch])

  const onLogOut = () => {
    dispatch(setLogOut(false))
    localStorage.removeItem('MC-remebered')
    dispatch(setClearFavorites())
  }

  const menu = (
    <Menu>
      <Menu.Item key='log-out'>
        <Button onClick={onLogOut} size="small">Log out</Button>
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      {isAuth ?
        <div className='user-block'>
          <div>
            <span className='user-block__title' >user:</span>
            <span>{username}</span>
          </div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              settings <DownOutlined />
            </span>
          </Dropdown>
        </div> :

        <div className='header__refs'>
          <Link to="/">log in</Link>
          <Link to="/sign-up">sign up</Link>
        </div>
      }
    </>
  )
}
