export const filmDetalisSelector = ({
  filmDetalisPage: { isFetching, filmData: {
    backdrop_path, poster_path, title, overview,
    tagline, vote_average, genres, release_date,
    runtime, homepage, id, original_title, budget, status, name, first_air_date, 
  }
}}) => ({
  isFetching,
  backdrop_path, poster_path, title, overview,
  tagline, vote_average, genres, release_date,
  runtime, homepage, id, original_title, budget, status, name, first_air_date
})
