import { LOGIN_TYPES } from "../actions/types";

const initialState = {
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

    case LOGIN_TYPES.SET_AUTH_ERROR:
      return {
        ...state,
        isAuth: [...state.errors, action.payload]
      }

    default:
      return state
  }
}
