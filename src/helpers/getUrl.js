import { API_KEY } from "../constants/constants"

/*
fetch(`${BASE_URL}/search/${contentType}?${API_KEY}&query=${searchWord}&page=${page}`)
fetch(`${BASE_URL}/genre/${contentType}/list?${API_KEY}`)
fetch(`${BASE_URL}/discover/${contentType}?${API_KEY}&page=${page}`)

export const getUrl = (contentType, page = 1, searchWord, filtrationOptions) => {
  let url = `${BASE_URL}/discover/${contentType}?${API_KEY}&page=${page}`
  for (const key in filtrationOptions) {
    if (filtrationOptions[key] && filtrationOptions.hasOwnProperty(key)) {
      const qwery = `&${key}=${filtrationOptions[key]}`
      url = url.concat(qwery)
    }
  }
  */

export const getUrl = (page = 1, filtrationOptions, contentType) => {
  let url = `/discover/${contentType}?${API_KEY}&page=${page}`
  for (const key in filtrationOptions) {
    if (filtrationOptions[key] && filtrationOptions.hasOwnProperty(key)) {
      const qwery = `&${key}=${filtrationOptions[key]}`
      url = url.concat(qwery)
    }
  }

  return url
}
