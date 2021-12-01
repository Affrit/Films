export const searchDataSelector = ({
  searchPage: {
    isFetching,
    searchWord,
    errors,
    searchData: { page, total_results, results }
  } }) => ({
    isFetching, 
    searchWord,
    errors,
    page, total_results, results
  })
  