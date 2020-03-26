/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e7b0e7f06e8563f32298de1
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import * as types from "../actionTypes";
import SecurityService from "../../security/SecurityService";

// Init
const initialState = {
  user: SecurityService.getUser()
};

// Reducer
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_USER_SUCCESS:
      if (state.user._id === action.payload._id)
        return {
          ...state,
          user: {
            ...state.user,
            name: action.payload.name,
            surname: action.payload.surname,
            mail: action.payload.mail
          }
        };
      else return state;
    case types.LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case types.LOGOUT_SUCCESS:
      return { ...state, user: null };
    default:
      return state;
  }
}
