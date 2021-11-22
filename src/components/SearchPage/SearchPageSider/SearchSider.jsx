import { Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SiderApp } from '../../Layouts/Sider/SiderApp';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchPageAC } from '../../../store/actions/searchPageActions';

const { SubMenu } = Menu

export const SearchSider = ({ currentLocation }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setSearchPageAC(1))
  }

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
          <Menu.Item key="movie" style={{ width: '200px' }}>
            <Link to='/search/movie' onClick={handleClick}>
              <span>Movies</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="tv" style={{ width: '200px' }}>
            <Link to='/search/tv' onClick={handleClick}>
              <span>Shows</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </SiderApp>
  )
}
