import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SiderApp } from './SiderApp';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setSortParamAC } from '../../../store/actions/moviesPageActions';
import { getMoviesPageData } from '../../../store/actions/moviesPageActions';
import { Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;
const { SubMenu } = Menu
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters']

const genreList = [
{id: 28, name: 'Action'},
{id: 12, name: 'Adventure'},
{id: 16, name: 'Animation'},
{id: 35, name: 'Comedy'},
{id: 80, name: 'Crime'},
{id: 99, name: 'Documentary'},
{id: 18, name: 'Drama'},
{id: 10751, name: 'Family'},
{id: 14, name: 'Fantasy'},
{id: 36, name: 'History'},
{id: 27, name: 'Horror'},
{id: 10402, name: 'Music'},
{id: 9648, name: 'Mystery'},
{id: 10749, name: 'Romance'},
{id: 878, name: 'Science Fiction'},
{id: 10770, name: 'TV Movie'},
{id: 53, name: 'Thriller'},
{id: 10752, name: 'War'},
{id: 37, name: 'Western'},
]

export const MoviesSider = (props) => {
  const dispatch = useDispatch()

  const onApply = () => {
    dispatch(getMoviesPageData())
    console.log(selectedItems)
  }

  const onChangeSort = (value) => {
    dispatch(setSortParamAC(value))
  }

  const [selectedItems, setSelectedItems] = useState([])
  const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o))

  const onChangeGenres = (selectedItems) => {
    console.log(selectedItems)
    setSelectedItems(selectedItems)
  }

  return (
    <SiderApp {...props} >
      <Menu
        theme="lite"
        mode="inline"
        defaultSelectedKeys={['sort']}
        style={{ height: '100%' }}
      >

        <SubMenu key="sort" icon={<SearchOutlined />} title="Sort by" style={{

        }}>
          <Menu.Item key="sort-select" style={{ width: '100%', padding: '10px' }}>
            <Select defaultValue="vote_average.desc" onChange={onChangeSort}>
              <Option value="vote_average.desc">Popularity(descending)</Option>
              <Option value="vote_average.asc">Popularity(ascending)</Option>
              <Option value="popularity.desc">Rating(descending)</Option>
              <Option value="popularity.asc">Rating(ascending)</Option>
            </Select>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="filters" icon={<SearchOutlined />} title="Filters by" style={{
          //height: '100vh',
          //position: 'fixed',
          width: '200px'
        }}>
          <Menu.Item style={{ height: '100%', padding: '0'}} key="drop5">
            <div>
              <div style={{ textAlign: 'center'}}>genre</div>
              <div>
                <Select
                  mode="multiple"
                  placeholder="Inserted are removed"
                  value={selectedItems}
                  onChange={onChangeGenres}
                  style={{ width: '100%' }}
                >
                  {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
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
