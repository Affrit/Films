/*
    params: [page: Number, filtrationOptions: Object, contentType: String],
    description: this func creates url string for requests which include
      sort params if they are given. FiltrationOptions is object which has sort params as keys, 
      if their values are equal to an empty string then they will be ignored.
      The contentType should be 'movie' or 'tv',
    returnType: String
*/
export const getUrl = (page = 1, filtrationOptions, contentType) => {
  let url = `/discover/${contentType}?page=${page}`
  for (const key in filtrationOptions) {
    if (filtrationOptions[key] && filtrationOptions.hasOwnProperty(key)) {
      const qwery = `&${key}=${filtrationOptions[key]}`
      url = url.concat(qwery)
    }
  }

  return url
}
