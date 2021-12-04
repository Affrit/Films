import axios from "axios";

export const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

//client.get("/1")
/*
export async const getSerched = (params) => {
  return await API.get(`/search/${params}`)
}
*/