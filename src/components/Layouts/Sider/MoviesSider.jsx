import { Menu, Dropdown, Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { Divider } from 'antd';
import { Select } from 'antd';
import { Slider, Switch } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMoviesPageData, setSortParamAC,
  setGenreListAC, setClearFiltersAC,
  setReleaseDateGteAC, setReleaseDateLteAC,
  setRatingGteAC, setRatingLteAC
} from '../../../store/actions/moviesPageActions';
import { useState, useEffect } from 'react';
import { GENRE_LIST, SORT_PARAMS } from '../../../constants/constants';

const { Option } = Select
const { SubMenu } = Menu

function debounce(f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  }
}

const optionsGenerator = (itemsList) => {
  return itemsList.map(item => {
    return <Option key={item.id}>{item.name}</Option>
  })
}
const genreOptions = optionsGenerator(GENRE_LIST)
const sortOptions = optionsGenerator(SORT_PARAMS)

export const MoviesSider = (props) => {
  const [ratingVal, setRatingVal] = useState([0, 0]) 
  const { filtrationOptions } = useSelector(({ moviesPage: { filtrationOptions } }) => ({
    filtrationOptions
  }))
  const { sort_by, with_genres, ['vote_average.gte']: voteGte, ['vote_average.lte']: voteLte } = filtrationOptions
  const ratingValue = [+voteGte * 10, +voteLte * 10]

  const dispatch = useDispatch()
  const onApplyFilters = () => {
    dispatch(getMoviesPageData())
  }
  const onClearFilters = () => {
    dispatch(setClearFiltersAC())
    setRatingVal([0, 0])
  }
  const onChangeSort = (value) => {
    dispatch(setSortParamAC(value))
  }
  const onChangeGenres = (selectedItems) => {
    dispatch(setGenreListAC(selectedItems.join(',')))
  }
  const onChangeFromDate = (_, dateString) => {
    dispatch(setReleaseDateGteAC(dateString))
  }
  const onChangeToDate = (_, dateString) => {
    dispatch(setReleaseDateLteAC(dateString))
  }

  const onRatingChange = (result) => {
    setRatingVal(result)
  }

  const afterChangeRating = (result) => {
    const [from, to] = result
    const voteGte = `${from / 10}`
    const voteLte = `${to / 10}`
    dispatch(setRatingGteAC(voteGte))
    dispatch(setRatingLteAC(voteLte))
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

          <Menu.Item style={{ height: '100%', padding: '0 15px' }} key="drop10">
            <Divider style={{ margin: '0' }} plain>Rating</Divider>
            <Slider range value={ratingVal} onChange={onRatingChange} onAfterChange={afterChangeRating} />
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
