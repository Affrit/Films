// libs
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// components
import { DownOutlined } from '@ant-design/icons';
import { Button, Menu, Dropdown } from 'antd';
// other
import { setLogOut } from "../../store/actions/authActions";
import { setClearFavorites } from "../../store/actions/favoritesPageActions";
import { authSelector } from "../PrivateRoute/selector";
import './style.scss';

export const User = () => {
  const dispatch = useDispatch()
  const { username } = useSelector(authSelector)

  const onLogOut = () => {
    dispatch(setLogOut(false))
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
    </div>
  )
}
