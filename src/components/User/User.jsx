import React from "react"
import { DownOutlined } from '@ant-design/icons';
import { setLogOut } from "../../store/actions/authActions";
import { Button, Menu, Dropdown } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from "../PrivateRoute/selector"; 

export const User = () => {
  const dispatch = useDispatch()
  const { username } = useSelector(authSelector)

  const onLogOut = () => {
    dispatch(setLogOut(false))
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={onLogOut} size="small">Log out</Button>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className='header__user'>
      <span>{`user: ${username}`}</span>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          settings <DownOutlined />
        </a>
      </Dropdown>
    </div>
  )
}