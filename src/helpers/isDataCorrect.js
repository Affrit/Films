export const isDataCorrect = (user) => {
  const allUsers = JSON.parse(localStorage.getItem('filmsUsers'))
  const res = allUsers.some(ArrUser => {
    return ArrUser.name === user.name && ArrUser.password === user.password
  })
  return res
}
