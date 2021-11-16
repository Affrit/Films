import { Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu

export const SearchSider = () => {
  const { total_results: countOfMovies } = useSelector(({ searchPage: { moviesData: { total_results } } }) => ({
    total_results
  }))
  const { total_results: countOfShows } = useSelector(({ searchPage: { showsData: { total_results } } }) => ({
    total_results
  }))

  return (
    <SiderApp>
        <SubMenu key="sub1" icon={<SearchOutlined />} title="Search results"  style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
      }}>
          <Menu.Item key="1" style={{width: '200px'}}>
            <Link to='/search/movies'>
              <span>Movies</span>
              <span style={{ paddingLeft: '20px' }}>{countOfMovies}</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" style={{width: '200px'}}>
            <Link to='/search/shows'>
              <span>Shows</span>
              <span style={{ paddingLeft: '20px' }}>{countOfShows}</span>
            </Link>
          </Menu.Item>
        </SubMenu>
    </SiderApp>
  )
}
