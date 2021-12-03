export const convertRuntime = (runtime) => {
  if (!runtime) return;
  const minutes = runtime % 60
  const hours = Math.floor(runtime / 60)
  return `${hours}h ${minutes < 10 ? `0${minutes}` : minutes}min`
}