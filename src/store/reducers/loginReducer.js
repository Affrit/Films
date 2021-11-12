import { LOGIN_TYPES } from "../actions/types";

const initialState = {
  isAuth: false,
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_TYPES.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }

    default:
      return state
  }
}
