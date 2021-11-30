import { LOGIN_TYPES } from "./types"
import { isDataCorrect } from "../../helpers/isDataCorrect"

export const authToggle = (newData) => {
  return {
    type: LOGIN_TYPES.SET_AUTH,
    payload: newData
  }
}

export const setAuthError = (newData) => {
  return {
    type: LOGIN_TYPES.SET_AUTH_ERROR,
    payload: newData
  }
}

export const setClearError = () => {
  return {
    type: LOGIN_TYPES.SET_CLEAR_ERRORS
  }
}

export const setLogOut = () => {
  return {
    type: LOGIN_TYPES.SET_LOGOUT
  }
}

export const setUserData = (newData) => {
  return {
    type: LOGIN_TYPES.SET_USER_DATA,
    payload: newData
  }
}

export const loginUser = (userData) => async (dispatch, getState) => {
  const { login: { errors } } = getState()
  try {
    if (isDataCorrect(userData)) {
      dispatch(setUserData(userData))
      dispatch(authToggle(true))
      dispatch(setClearError())
    } else {
      throw new Error('Incorrect username or password')
    }
  } catch (error) {
    console.warn(error)
    if ( !errors.some(item => item === error.message) ) {
      dispatch(setAuthError(error.message))
    }
  }
}
