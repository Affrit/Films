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
