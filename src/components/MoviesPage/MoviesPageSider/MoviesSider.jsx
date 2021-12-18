// libs
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
// components
import { Menu, DatePicker, Button, Divider, Select, Slider } from 'antd';
import { FilterOutlined, SortAscendingOutlined } from '@ant-design/icons';
import { SiderApp } from '../../Layouts/Sider/SiderApp';
// other
import {
  getMoviesPageData, setSortParam,
  setSelectedGenres, setClearFilters,
  setReleaseDateGte, setReleaseDateLte,
  setRatingGte, setRatingLte
} from '../../../store/actions/moviesPageActions';
import { SORT_PARAMS, IS_MOBILE } from '../../../constants/constants';
import { optionsSelector } from './selector';
import { ratingValTransform } from '../../../helpers/ratingValTransform';
import './style.scss';

const { SubMenu } = Menu
const { Option } = Select

export const MoviesSider = ({ contentType }) => {
  const {
    isGenreFetching, genreList, sort_by, with_genres,
    voteGte, voteLte, releaseGte, releaseLte
  } = useSelector(optionsSelector)
  const [ratingVal, setRatingVal] = useState(ratingValTransform(voteGte, voteLte))
  const dispatch = useDispatch()

  useEffect(() => {
    setRatingVal(ratingValTransform(voteGte, voteLte))
  }, [voteGte, voteLte])

  const onApplyFilters = () => {
    dispatch(getMoviesPageData(1, contentType))
  }

  const onClearFilters = () => {
    dispatch(setClearFilters())
    setRatingVal([0, 100])
  }

  const onChangeSort = (value) => {
    dispatch(setSortParam(value))
  }

  const onChangeGenres = (selectedItems) => {
    dispatch(setSelectedGenres(selectedItems.join(',')))
  }

  const onChangeFromDate = (_, dateString) => {
    dispatch(setReleaseDateGte(dateString))
  }

  const onChangeToDate = (_, dateString) => {
    dispatch(setReleaseDateLte(dateString))
  }

  const onRatingChange = (result) => {
    setRatingVal(result)
  }

  const afterChangeRating = (result) => {
    const [from, to] = result
    const voteGte = `${from / 10}`
    const voteLte = `${to / 10}`
    dispatch(setRatingGte(voteGte))
    dispatch(setRatingLte(voteLte))
  }

  const optionsGenerator = (itemsList) => {
    return itemsList.map(item => {
      return <Option key={item.id}>{item.name}</Option>
    })
  }

  const genreOptions = optionsGenerator(genreList)
  const sortOptions = optionsGenerator(SORT_PARAMS)

  return (
    <SiderApp >
      <Menu
        theme="dark"
        mode="inline"
        className='sider-menu'
      >

        <SubMenu
          key="sort"
          icon={<SortAscendingOutlined />}
          title="Sort by"
          className='sub-menu'
        >
          <Menu.Item className='sub-menu__item' key="sort-select">
            <div className='select-wrap'>
              <Select
                className='sub-menu__select'
                value={sort_by}
                onChange={onChangeSort}
              >
                {sortOptions}
              </Select>
            </div>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="filters"
          icon={<FilterOutlined />}
          title="Filters by"
          className='sub-menu'
        >

          <Menu.Item className='sub-menu__item' key="genre-filter">
            <Divider className='filters-divider' plain>
              genres
            </Divider>
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
            <Divider className='filters-divider' plain>
              Release dates
            </Divider>
            <div className='select-wrap'>

              <div className='date-wrap'>
                <span>From</span>
                <DatePicker
                  className='date-picker'
                  inputReadOnly={IS_MOBILE}
                  onChange={onChangeFromDate}
                  value={releaseGte && moment(releaseGte)}
                />
              </div>

              <div className='date-wrap'>
                <span>To</span>
                <DatePicker
                  className='date-picker'
                  inputReadOnly={IS_MOBILE}
                  onChange={onChangeToDate}
                  value={releaseLte && moment(releaseLte)}
                />
              </div>

            </div>
          </Menu.Item>

          <Menu.Item className='sub-menu__item' key="rating-filter">
            <Divider className='filters-divider' plain>
              Rating
            </Divider>
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
          <Divider className='filters-divider' plain>
            controls
          </Divider>
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
        </Menu.Item>

      </Menu>
    </SiderApp>
  )
}
