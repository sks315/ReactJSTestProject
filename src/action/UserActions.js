import { users, addUser } from  '../services/UserServices'
import {
    CREATE_TUTORIAL,
    RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL,
    DELETE_TUTORIAL,
    DELETE_ALL_TUTORIALS
  } from './typesAction';



function getUsers() {
    return dispatch => {
        users()
            .then(
                user => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function success(user) { return { type: 'GET_SUCCESS', user } }
    function failure(error) { return { type: 'GET_FAILURE', error } }
}

// function addUserAction(userData) {
//     return dispatch => {
//         addUser(userData)
//             .then(
//                 user => { 
//                     dispatch(success(user));
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                 }
//             );
//     };

//     function success(user) { return { type: 'GET_SUCCESS', user } }
//     function failure(error) { return { type: 'GET_FAILURE', error } }
// }

const addUserAction = (userData) => async (dispatch) => {
    try {
      const res = await addUser(userData);
  
      dispatch({
        type: CREATE_TUTORIAL,
        payload: res,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const userActions = {
    getUsers,
    addUserAction,
};