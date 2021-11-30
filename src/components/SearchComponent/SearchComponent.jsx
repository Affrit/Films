import React from "react";
import { Input } from 'antd';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchWordAC, setSearchPageAC } from "../../store/actions/searchPageActions";
import { useSelector } from "react-redux";
import { searchDataSelector } from "../SearchPage/selector";
import { useNavigate } from "react-router";

const { Search } = Input;

export const SearchComponent = ({ onSearched }) => {
  const [inputValue, setInputValue] = useState('')
  const { isFetching } = useSelector(searchDataSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }
  const onSearch = () => {
    if (inputValue.length < 1) return;
    onSearched()
    dispatch(setSearchWordAC(inputValue))
    dispatch(setSearchPageAC(1))
    navigate("/search/movie")
  }

  return (
    <Search
      onChange={onInputChange}
      value={inputValue}
      onSearch={onSearch}
      onPressEnter={onSearch}
      placeholder="input search text"
      enterButton="Search" size="large"
      loading={isFetching}
    />
  )
}