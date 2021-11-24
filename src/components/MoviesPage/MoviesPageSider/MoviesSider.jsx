import React, { useState, useEffect } from 'react';
import './style.scss'
import { Menu, DatePicker, Button, Divider, Select, Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SiderApp } from '../../Layouts/Sider/SiderApp';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMoviesPageData, setSortParamAC,
  setSelectedGenres, setClearFiltersAC,
  setReleaseDateGteAC, setReleaseDateLteAC,
  setRatingGteAC, setRatingLteAC
} from '../../../store/actions/moviesPageActions';
import { SORT_PARAMS } from '../../../constants/constants';
import { optionsSelector } from './selector';
import { optionsGenerator } from '../../../helpers/optionsGenerator'

const { SubMenu } = Menu

export const MoviesSider = ({ contentType }) => {
  const [ratingVal, setRatingVal] = useState([0, 100])
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const { isGenreFetching, genreList, sort_by, with_genres } = useSelector(optionsSelector)
  const dispatch = useDispatch()
  const genreOptions = optionsGenerator(genreList)
  const sortOptions = optionsGenerator(SORT_PARAMS)

  useEffect(() => {
    onClearFilters()
  }, [contentType])

  const onApplyFilters = () => {
    dispatch(getMoviesPageData(1, contentType))
  }
  const onClearFilters = () => {
    dispatch(setClearFiltersAC())
    setRatingVal([0, 100])
    setDateTo('')
    setDateFrom('')
  }
  const onChangeSort = (value) => {
    dispatch(setSortParamAC(value))
  }
  const onChangeGenres = (selectedItems) => {
    dispatch(setSelectedGenres(selectedItems.join(',')))
  }
  const onChangeFromDate = (date, dateString) => {
    setDateFrom(date)
    dispatch(setReleaseDateGteAC(dateString))
  }
  const onChangeToDate = (date, dateString) => {
    setDateTo(date)
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
    <SiderApp >
      <Menu
        theme="lite"
        mode="inline"
        defaultSelectedKeys={['sort']}
        className='sider-menu'
      >

        <SubMenu
          key="sort"
          icon={<SearchOutlined />}
          title="Sort by"
        >
          <Menu.Item key="sort-select" style={{ width: '100%', padding: '8px' }}>
            <Select value={sort_by} onChange={onChangeSort}>
              {sortOptions}
            </Select>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="filters"
          icon={<SearchOutlined />}
          title="Filters by" style={{ width: '200px' }}
        >
          <Menu.Item style={{ height: '100%', padding: '0 10px' }} key="drop5">
            <Divider style={{ margin: '0' }} plain>genres</Divider>
            <Select
              loading={isGenreFetching}
              mode="tags" style={{ width: '100%' }}
              placeholder="choose genres"
              value={with_genres ? with_genres.split(',') : []}
              onChange={onChangeGenres}
            >
              {genreOptions}
            </Select>
          </Menu.Item>

          <Menu.Item style={{ height: '100%', padding: '0 10px' }} key="drop9">
            <Divider style={{ margin: '0' }} plain>Release dates</Divider>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>From</div>
              <DatePicker
                style={{ padding: '5px' }}
                onChange={onChangeFromDate}
                value={dateFrom}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>To</div>
              <DatePicker
                style={{ padding: '5px' }}
                onChange={onChangeToDate}
                value={dateTo}
              />
            </div>
          </Menu.Item>

          <Menu.Item style={{ height: '100%', padding: '0 15px' }} key="drop10">
            <Divider style={{ margin: '0' }} plain>Rating</Divider>
            <Slider
              range value={ratingVal}
              onChange={onRatingChange}
              onAfterChange={afterChangeRating}
            />
          </Menu.Item>

        </SubMenu>

        <Menu.Item key="btn1" >
          <Button
            onClick={onApplyFilters}
            style={{ width: '100%', margin: '10px 0' }}
            size='small' type="primary"
          >
            Apply
          </Button>
        </Menu.Item>

        <Menu.Item key="btn2" >
          <Button
            onClick={onClearFilters}
            style={{ width: '100%', margin: '10px 0' }}
            size='small' type="primary"
          >
            Clear
          </Button>
        </Menu.Item>

      </Menu>
    </SiderApp>
  )
}
