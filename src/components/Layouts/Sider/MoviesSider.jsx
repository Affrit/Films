import { Menu, Dropdown, Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { Divider } from 'antd';
import { Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMoviesPageData, setSortParamAC,
  setGenreListAC, setClearFiltersAC,
  setReleaseDateGteAC, setReleaseDateLteAC
} from '../../../store/actions/moviesPageActions';
import { useState } from 'react';
import { GENRE_LIST, SORT_PARAMS } from '../../../constants/constants';

const { Option } = Select;
const { SubMenu } = Menu

const optionsGenerator = (itemsList) => {
  return itemsList.map(item => {
    return <Option key={item.id}>{item.name}</Option>
  })
}

const genreOptions = optionsGenerator(GENRE_LIST)
const sortOptions = optionsGenerator(SORT_PARAMS)

export const MoviesSider = (props) => {
  const { with_genres, sort_by } = useSelector(({ moviesPage: { filtrationOptions: { with_genres, sort_by } } }) => ({
    with_genres, sort_by
  }))

  const dispatch = useDispatch()
  const onApplyFilters = () => {
    dispatch(getMoviesPageData())
  }
  const onClearFilters = () => {
    dispatch(setClearFiltersAC())
  }
  const onChangeSort = (value) => {
    dispatch(setSortParamAC(value))
  }
  const onChangeGenres = (selectedItems) => {
    dispatch(setGenreListAC(selectedItems.join(',')))
  }
  const onChangeFromDate = (_, dateString) => {
    dispatch(setReleaseDateGteAC(dateString))
    console.log(dateString)
  }
  const onChangeToDate = (_, dateString) => {
    dispatch(setReleaseDateLteAC(dateString))
    console.log(dateString)
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
          <Menu.Item style={{ height: '100%', padding: '0 10px' }} key="drop5">
            <div>
              <Divider style={{ margin: '0' }} plain>genres</Divider>
              <div>
                <Select mode="tags" style={{ width: '100%' }} placeholder="choose genres" 
                value={with_genres ? with_genres.split(',') : []} onChange={onChangeGenres}>
                  {genreOptions}
                </Select>
              </div>
            </div>
          </Menu.Item>

          <Menu.Item style={{ height: '100%', padding: '0 10px' }} key="drop9">
            <Divider style={{ margin: '0' }} plain>Release dates</Divider>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>From</div>
              <DatePicker style={{ padding: '5px' }} onChange={onChangeFromDate} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>To</div>
              <DatePicker style={{ padding: '5px' }} onChange={onChangeToDate} />
            </div>
          </Menu.Item>

        </SubMenu>

        <Menu.Item key="btn1" >
          <Button onClick={onApplyFilters} style={{ width: '100%', margin: '10px 0' }} size='small' type="primary">Apply</Button>
        </Menu.Item>
        <Menu.Item key="btn2" >
          <Button onClick={onClearFilters} style={{ width: '100%', margin: '10px 0' }} size='small' type="primary">Clear</Button>
        </Menu.Item>
      </Menu>
    </SiderApp>
  )
}
