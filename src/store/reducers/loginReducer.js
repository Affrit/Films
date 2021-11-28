import { LOGIN_TYPES } from "../actions/types";

const users = JSON.stringify([
  {
    username: 'Bobby',
    password: 'bbbbb'
  },
  {
    username: 'Lolly',
    password: 'lllll'
  },
  {
    username: 'Vally',
    password: 'vvvvv'
  }
])

localStorage.setItem('filmsUsers', users)

const initialState = {
  userData: {},
  isAuth: false,
  errors: []
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_TYPES.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }

    case LOGIN_TYPES.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      }

    case LOGIN_TYPES.SET_AUTH_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload]
      }

    case LOGIN_TYPES.SET_CLEAR_ERRORS:
      return {
        ...state,
        errors: []
      }

    default:
      return state
  }
}
