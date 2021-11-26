export const optionsSelector = ({
  moviesPage: {
    isGenreFetching,
    genreList,
    filtrationOptions: { 
      sort_by, with_genres, 
      'vote_average.gte': voteGte, 
      'vote_average.lte': voteLte, 
      'primary_release_date.gte': releaseGte, 
      'primary_release_date.gte': releaseLte 
    }
  } }) => ({
    isGenreFetching,
    genreList,
    sort_by, 
    with_genres, 
    voteGte, 
    voteLte, 
    releaseGte, 
    releaseLte
  })
