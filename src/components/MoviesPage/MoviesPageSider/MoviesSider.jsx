// libs
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import moment from 'moment'
// components
import { Menu, DatePicker, Button, Divider, Select, Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SiderApp } from '../../Layouts/Sider/SiderApp';
// other
import {
  getMoviesPageData, setSortParamAC,
  setSelectedGenres, setClearFiltersAC,
  setReleaseDateGteAC, setReleaseDateLteAC,
  setRatingGteAC, setRatingLteAC
} from '../../../store/actions/moviesPageActions';
import { SORT_PARAMS } from '../../../constants/constants';
import { optionsSelector } from './selector';
import { optionsGenerator } from '../../../helpers/optionsGenerator'
import { getCurrentLocation } from '../../../helpers/getLocation';
import './style.scss';

const { SubMenu } = Menu

export const MoviesSider = () => {
  const { 
    isGenreFetching, genreList, sort_by, 
    with_genres, voteGte, voteLte, 
    releaseGte, releaseLte 
  } = useSelector(optionsSelector)
  const dispatch = useDispatch()
  const location = useLocation()
  const contentType = getCurrentLocation(location.pathname)
  const [savedLocation, setSavedLocation] = useState(contentType)
  const [ratingVal, setRatingVal] = useState([voteGte * 10, voteLte * 10 || 100])
  const genreOptions = optionsGenerator(genreList)
  const sortOptions = optionsGenerator(SORT_PARAMS)

  useEffect(() => {
    if (contentType !== savedLocation) {
      dispatch(setClearFiltersAC())
      setRatingVal([0, 100])
      setSavedLocation(contentType)
    }
  }, [contentType, savedLocation, dispatch])

  const onApplyFilters = () => {
    dispatch(getMoviesPageData(1, contentType))
  }

  const onClearFilters = () => {
    dispatch(setClearFiltersAC())
    setRatingVal([0, 100])
  }

  const onChangeSort = (value) => {
    dispatch(setSortParamAC(value))
  }

  const onChangeGenres = (selectedItems) => {
    dispatch(setSelectedGenres(selectedItems.join(',')))
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
          className='sub-menu'
        >
          <Menu.Item className='sub-menu__item' key="sort-select">
            <div className='select-wrap'>
              <Select className='sub-menu__select' value={sort_by} onChange={onChangeSort}>
                {sortOptions}
              </Select>
            </div>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="filters"
          icon={<SearchOutlined />}
          title="Filters by"
          className='sub-menu'
        >
          <Menu.Item className='sub-menu__item' key="genre-filter">
            <Divider className='filters-divider' plain>genres</Divider>
            <div className='select-wrap'>
              <Select
                loading={isGenreFetching}
                mode="tags"
                className='sub-menu__select'
                placeholder="choose genres"
                value={with_genres ? with_genres.split(',') : []}
                onChange={onChangeGenres}
              >
                {genreOptions}
              </Select>
            </div>
          </Menu.Item>

          <Menu.Item className='sub-menu__item' key="date-filter">
            <Divider className='filters-divider' plain>Release dates</Divider>
            <div className='select-wrap'>
              <div className='date-wrap'>
                <span>From</span>
                <DatePicker
                  className='date-picker'
                  onChange={onChangeFromDate}
                  value={releaseGte && moment(releaseGte)}
                />
              </div>
              <div className='date-wrap'>
                <span>To</span>
                <DatePicker
                  className='date-picker'
                  onChange={onChangeToDate}
                  value={releaseLte && moment(releaseLte)}
                />
              </div>
            </div>
          </Menu.Item>

          <Menu.Item className='sub-menu__item' key="rating-filter">
            <Divider className='filters-divider' plain>Rating</Divider>
            <div className='slider-wrap'>
              <Slider
                range 
                value={ratingVal}
                onChange={onRatingChange}
                onAfterChange={afterChangeRating}
              />
              <div className='slider-info'>
                <span>from</span>
                <span>to</span>
              </div>
            </div>
          </Menu.Item>

        </SubMenu>

        <Menu.Item className='controls' key="controls" >
          <Divider className='filters-divider' plain>controls</Divider>
          <div className='controls__wrap'>
            <Button
              onClick={onApplyFilters}
              className='controls__btn'
              size='small'
              type="primary"
            >
              Apply
            </Button>

            <Button
              onClick={onClearFilters}
              className='controls__btn'
              size='small'
              type="primary"
            >
              Clear
            </Button>
          </div>
          <Divider className='filters-divider'></Divider>
        </Menu.Item>

      </Menu>
    </SiderApp>
  )
}
