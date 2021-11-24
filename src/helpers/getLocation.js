export const getCurrentLocation = (pathName) => {
  const arr = pathName.split('/')
  const currentLocation = arr[arr.length - 1]

  return currentLocation
}
