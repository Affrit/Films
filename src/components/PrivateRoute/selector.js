export const authSelector = ({
  login: { isAuth, errors, userData: { username } }
}) => ({
  isAuth, errors, username
})
