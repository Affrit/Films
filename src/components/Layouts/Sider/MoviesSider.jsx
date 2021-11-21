import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesPageData, setSortParamAC, setGenreListAC } from '../../../store/actions/moviesPageActions';
import { Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;
const { SubMenu } = Menu

const genreList = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
]

const children = [];
for (const genre of genreList) {
  children.push(<Option key={genre.id}>{genre.name}</Option>);
}

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
              <Option value="popularity.desc">Popularity(descending)</Option>
              <Option value="popularity.asc">Popularity(ascending)</Option>
              <Option value="vote_average.desc">Rating(descending)</Option>
              <Option value="vote_average.asc">Rating(ascending)</Option>
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
                  {children}
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
