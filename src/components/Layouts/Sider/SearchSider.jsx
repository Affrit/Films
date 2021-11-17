import { Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const { SubMenu } = Menu

export const SearchSider = () => {
  const { total_results: countOfMovies } = useSelector(({ searchPage: { moviesData: { total_results } } }) => ({
    total_results
  }))
  const { total_results: countOfShows } = useSelector(({ searchPage: { showsData: { total_results } } }) => ({
    total_results
  }))

  const location = useLocation()
  const currentLocation = location.pathname.split('/').pop()

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
              <span style={{ paddingLeft: '20px' }}>{countOfMovies}</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="shows" style={{ width: '200px' }}>
            <Link to='/search/shows'>
              <span>Shows</span>
              <span style={{ paddingLeft: '20px' }}>{countOfShows}</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </SiderApp>
  )
}
