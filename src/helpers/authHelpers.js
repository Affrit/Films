/*
    params: [user: Object],
    description: this func checks if the user's credentials match 
      the existing user in order to authorize it,
    returnType: Boolean
*/
export const isDataCorrect = (user) => {
  const { username, password } = user
  const allUsers = JSON.parse(localStorage.getItem('MC-users'))
  const res = allUsers.some(user => {
    return user.username === username && user.password === password
  })
  return res
}

/*
    params: [user: Object],
    description: this func checks if this user has been already Exists,
    returnType: Boolean
*/
export const isUserExists = (user) => {
  const allUsers = JSON.parse(localStorage.getItem('MC-users'))
  return allUsers.some(ArrUser => ArrUser.username === user.username)
}

/*
    params: [user: Object],
    description: this func creates a new user based on object from param 
      and set it to list of users in localStorage,
    returnType: Void
*/
export const createNewUser = ({ username, password }) => {
  const newUser = { username, password }
  const allUsers = JSON.parse(localStorage.getItem('MC-users'))
  const newUsers = JSON.stringify([...allUsers, newUser])
  localStorage.setItem('MC-users', newUsers)
}

/*
    params: [user: Object],
    description: this func sets user in localStorage which will be automatically logged in
     after page refresh,
    returnType: Void
*/
export const rememberUser = ({ username, password }) => {
  const remeberedUser = JSON.stringify({ username, password })
  localStorage.setItem('MC-remebered', remeberedUser)
}

export const getRemeberedUser = () => {
  const rememberedUser = JSON.parse(localStorage.getItem('MC-remebered'))
  return rememberedUser
}
