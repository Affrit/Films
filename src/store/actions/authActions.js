import { LOGIN_TYPES } from "./types"
import { isDataCorrect, isUserExists, createNewUser } from "../../helpers/authHelpers"

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
  try {
    if (!isDataCorrect(userData)) {
      throw new Error('Incorrect username or password')
    }
    dispatch(setUserData(userData))
    dispatch(authToggle(true))
    dispatch(setClearError())
    /*
    if (userData.remember) {
      rememberUser(userData)
    }
    */
  } catch (error) {
    console.warn(error)
    const { login: { errors } } = getState()
    if (!errors.some(item => item === error.message)) {
      dispatch(setAuthError(error.message))
    }
  }
}

export const setNewUser = (userData) => async (dispatch, getState) => {
  try {
    if (isUserExists(userData)) {
      throw new Error('Such user has been alredy exists!')
    } else {
      createNewUser(userData)
      dispatch(setClearError())
    }
  } catch (error) {
    console.warn(error)
    const { login: { errors } } = getState()
    if (!errors.some(item => item === error.message)) {
      dispatch(setAuthError(error.message))
    }
  }
}
