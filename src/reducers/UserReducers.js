
import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS
} from '../action/typesAction';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user 

export function userReducer(state = initialState, action) {

 

  switch (action.type) {
    case "GET_SUCCESS":
      return {
        getUser: true,
        user: action.user
      };
    case "LOGIN_FAILURE":
      return {};

    case CREATE_TUTORIAL:
      return {
        ...state,
        comment: [...state.comment, action.payload],
      };
  
    default:
      return state
  }
}