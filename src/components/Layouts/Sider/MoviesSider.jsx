import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesPageData, setSortParamAC, setGenreListAC } from '../../../store/actions/moviesPageActions';
import { Select } from 'antd';
import { useState } from 'react';
import { GENRE_LIST, SORT_PARAMS } from '../../../constants/constants';

const { Option } = Select;
const { SubMenu } = Menu

const genreOptions = GENRE_LIST.map(genre => {
  return <Option key={genre.id}>{genre.name}</Option>
})

const sortOptions = SORT_PARAMS.map(sortItem => {
  return <Option key={sortItem.id}>{sortItem.name}</Option>
})

export const MoviesSider = (props) => {
  const { with_genres, sort_by } = useSelector(({ moviesPage: { filtrationOptions: { with_genres, sort_by } } }) => ({
    with_genres, sort_by
  }))

  const dispatch = useDispatch()
  const onApply = () => {
    dispatch(getMoviesPageData())
  }
  const onChangeSort = (value) => {
    dispatch(setSortParamAC(value))
  }
  const onChangeGenres = (selectedItems) => {
    console.log(selectedItems)
    dispatch(setGenreListAC(selectedItems))
  }

  return (
    <SiderApp {...props} >
      <Menu
        theme="lite"
        mode="inline"
        defaultSelectedKeys={['sort']}
        style={{ height: '100%' }}
      >

        <SubMenu key="sort" icon={<SearchOutlined />} title="Sort by" style={{}}>
          <Menu.Item key="sort-select" style={{ width: '100%', padding: '10px' }}>
            <Select defaultValue={sort_by} onChange={onChangeSort}>
              {sortOptions}
            </Select>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="filters" icon={<SearchOutlined />} title="Filters by" style={{
          //height: '100vh',
          //position: 'fixed',
          width: '200px'
        }}>
          <Menu.Item style={{ height: '100%', padding: '10px' }} key="drop5">
            <div>
              <div style={{ textAlign: 'center' }}>genre</div>
              <div>
                <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" value={with_genres} onChange={onChangeGenres}>
                  {genreOptions}
                </Select>
              </div>
            </div>
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
