import { Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const { SubMenu } = Menu

export const MoviesSider = () => {
  const location = useLocation()
  const currentLocation = location.pathname.split('/').pop()

  return (
    <SiderApp>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
      </Menu>
    </SiderApp>
  )
}
