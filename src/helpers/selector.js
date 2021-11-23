export const optionsSelector = ({
  moviesPage: {
    filtrationOptions: { sort_by, with_genres }
  } }) => ({
    sort_by, with_genres
  })

export const moviesDataSelector = ({
  moviesPage: {
    isMoviesFetching,
    moviesPageData: { page, total_results, results }
  } }) => ({
    isMoviesFetching, 
    page, total_results, results
  })

export const searchDataSelector = ({
  searchPage: {
    isFetching,
    searchWord,
    searchData: { page, total_results, results }
  } }) => ({
    isFetching, 
    searchWord, 
    page, total_results, results
  })

export const currentFilmSelector = ({
  currentFilmPage: { filmData, isFetching }
}) => ({
  filmData, isFetching
})

export const authSelector = ({
  login: { isAuth }
}) => ({
  isAuth
})
