import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setSortParamAC } from '../../../store/actions/moviesPageActions';
import { getMoviesPageData } from '../../../store/actions/moviesPageActions';
import { Select } from 'antd';

const { Option } = Select;
const { SubMenu } = Menu

export const MoviesSider = (props) => {
  const dispatch = useDispatch()

  const onApply = () => {
    dispatch(getMoviesPageData())
  }

  const onChangeSort = (value) => {
    dispatch(setSortParamAC(value))
  }

  return (
    <SiderApp {...props} >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['sort']}
        style={{ height: '100%' }}
      >

        <SubMenu key="sort" icon={<SearchOutlined />} title="Sort by" style={{

        }}>
          <Menu.Item key="sort-select" style={{ padding: '10px' }}>
            <Select defaultValue="vote_average.desc" onChange={onChangeSort}>
              <Option value="vote_average.desc">Popularity(descending)</Option>
              <Option value="vote_average.asc">Popularity(ascending)</Option>
              <Option value="popularity.desc">Rating(descending)</Option>
              <Option value="popularity.asc">Rating(ascending)</Option>
            </Select>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="filters" icon={<SearchOutlined />} title="Filters by" style={{
          overflow: 'auto',
          //height: '100vh',
          //position: 'fixed',
          width: '200px'
        }}>
          <Menu.Item key="drop5">
            genre
          </Menu.Item>
          <Menu.Item key="drop6">
            relise date
          </Menu.Item>
          <Menu.Item key="drop7">
            language
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="btn1" >
          <Button onClick={onApply} style={{ width: '100%', margin: '10px 0' }} size='small' type="primary">Apply</Button>
        </Menu.Item>
        <Menu.Item key="btn2" >
          <Button style={{ width: '100%', margin: '10px 0' }} size='small' type="primary">Clear</Button>
        </Menu.Item>
      </Menu>
    </SiderApp>
  )
}
