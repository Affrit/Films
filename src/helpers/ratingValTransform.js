export const ratingValTransform = (voteGte, voteLte) => {
  const transformedVoteGte = +voteGte * 10
  const transformedVoteLte = +voteLte * 10 || 100
  return [transformedVoteGte, transformedVoteLte]
}
