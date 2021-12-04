export const getUrlAll = (params) => {
  const { 
    endpoint, contentType, page, searchWord, filtrationOptions 
  } = params
  let url = `/${endpoint}/${contentType}`

  switch (endpoint) {
    case 'genre':
      return url.concat('/list')

    case 'search':
      return url.concat(`?query=${searchWord}&page=${page}`)

    case 'discover':
      url = url.concat(`?page=${page}`)
      for (const key in filtrationOptions) {
        if (filtrationOptions[key] && filtrationOptions.hasOwnProperty(key)) {
          const qwery = `&${key}=${filtrationOptions[key]}`
          url = url.concat(qwery)
        }
      }
      return url

    default:
      break;
  }
}


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
