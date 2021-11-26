export const currentFilmSelector = ({
  currentFilmPage: { isFetching, filmData: {
    backdrop_path, poster_path, title, overview,
    tagline, vote_average, genres, release_date,
    runtime, homepage, id, original_title, budget, status
  }
}}) => ({
  isFetching,
  backdrop_path, poster_path, title, overview,
  tagline, vote_average, genres, release_date,
  runtime, homepage, id, original_title, budget, status
})
