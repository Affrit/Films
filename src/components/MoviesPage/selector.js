export const moviesDataSelector = ({
  moviesPage: {
    isMoviesFetching,
    errors,
    moviesPageData: { page, total_results, results }
  } }) => ({
    isMoviesFetching,
    errors,
    page, total_results, results
  })
  