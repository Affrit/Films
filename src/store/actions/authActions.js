import { LOGIN_TYPES } from "./types"


export const authToggle = (newData) => {
  return {
      type: LOGIN_TYPES.SET_AUTH,
      payload: newData
  }
}
