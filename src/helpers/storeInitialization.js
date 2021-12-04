export const storageInitialization = () => {
  const allUsers = JSON.parse(localStorage.getItem('MC-users'))
  if (!allUsers) {
    const defaultUser = { username: 'admin', password: 'admin' }
    const users = JSON.stringify([defaultUser])
    localStorage.setItem('MC-users', users)
  }
}
