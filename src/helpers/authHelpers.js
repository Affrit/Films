export const isDataCorrect = (user) => {
  const allUsers = JSON.parse(localStorage.getItem('MC-users'))
  const res = allUsers.some(ArrUser => {
    return ArrUser.username === user.username && ArrUser.password === user.password
  })
  return res
}

export const isUserExists = (user) => {
  const allUsers = JSON.parse(localStorage.getItem('MC-users'))
  return allUsers.some(ArrUser => ArrUser.username === user.username)
}

export const createNewUser = ({ username, password }) => {
  const newUser = { username, password }
  const allUsers = JSON.parse(localStorage.getItem('MC-users'))
  const newUsers = JSON.stringify([...allUsers, newUser])
  localStorage.setItem('MC-users', newUsers)
}


/*
export const rememberUser = ({ username, password }) => {
  const remeberedUser = JSON.stringify({ username, password })
  localStorage.setItem('MC-remebered', remeberedUser)
}

export const getRemeberedUser = () => {
  const rememberedUser = JSON.parse(localStorage.getItem('MC-remebered'))
  return rememberedUser
}

const rememberedUser = getRemeberedUser()
  if (rememberedUser) {
    dispatch(setUserData(rememberedUser))
    dispatch(authToggle(true))
  }
*/

const allUsers = JSON.parse(localStorage.getItem('MC-users'))
if (!allUsers) {
  const users = JSON.stringify([
    {
      username: 'admin',
      password: 'admin'
    },
  ])
  const remeberedUser = JSON.stringify('')
  localStorage.setItem('MC-users', users)
  localStorage.setItem('MC-remebered', remeberedUser)
}
