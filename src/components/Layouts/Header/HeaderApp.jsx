import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export const HeaderApp = () => {
  return (
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to='/sign-in' >sign-in</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/sign-up' >sign-up</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/films' >films</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to='/favorites' >favorites</Link>
          </Menu.Item>
        </Menu>
      </Header>
  )
}

