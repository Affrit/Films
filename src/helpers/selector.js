export const optionsSelector = ({ moviesPage: { filtrationOptions: { sort_by, with_genres } } }) => ({
  sort_by, with_genres
})
