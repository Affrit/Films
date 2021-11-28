export const spawnErorrsText = (errors) => {
  const errorsText = errors.reduce((error, acc) => `${error}, ${acc}`)
  return errorsText
}