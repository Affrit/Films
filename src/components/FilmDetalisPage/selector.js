export const filmDetalisSelector = ({
  filmDetalisPage: { isFetching, filmData: {
    backdrop_path, poster_path, title, overview,
    tagline, vote_average, genres, release_date,
    runtime, homepage, budget, status, name, first_air_date, revenue, vote_count
  }
}}) => ({
  isFetching,
  backdrop_path, poster_path, title, overview,
  tagline, vote_average, genres, release_date,
  runtime, homepage, budget, status, name, first_air_date, revenue, vote_count
})
