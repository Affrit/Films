export const optionsSelector = ({
  moviesPage: {
    isGenreFetching,
    genreList,
    filtrationOptions: { sort_by, with_genres }
  } }) => ({
    isGenreFetching,
    genreList,
    sort_by, with_genres
  })
