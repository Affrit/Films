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
  