// libs
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// components
import { Input } from 'antd';
// other
import { setSearchWord, setSearchPage } from "../../store/actions/searchPageActions";
import { searchDataSelector } from "../SearchPage/selector";

const { Search } = Input;

export const SearchComponent = () => {
  const [inputValue, setInputValue] = useState('')
  const { isFetching } = useSelector(searchDataSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }
  
  const onSearch = () => {
    if (inputValue.length < 1) return;
    dispatch(setSearchWord(inputValue))
    dispatch(setSearchPage(1))
    navigate("/search/movie")
  }

  return (
    <Search
      onChange={onInputChange}
      value={inputValue}
      onSearch={onSearch}
      onPressEnter={onSearch}
      placeholder="input search text"
      enterButton="Search" 
      size="large"
      loading={isFetching}
    />
  )
}
