import { Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu

export const SearchSider = ({ currentLocation }) => {
  return (
    <SiderApp>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[currentLocation]}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        <SubMenu key="sub1" icon={<SearchOutlined />} title="Search results" style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
        }}>
          <Menu.Item key="movies" style={{ width: '200px' }}>
            <Link to='/search/movies'>
              <span>Movies</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="shows" style={{ width: '200px' }}>
            <Link to='/search/shows'>
              <span>Shows</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </SiderApp>
  )
}
