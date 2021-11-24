export const moviesDataSelector = ({
  moviesPage: {
    isMoviesFetching,
    moviesPageData: { page, total_results, results }
  } }) => ({
    isMoviesFetching, 
    page, total_results, results
  })
  