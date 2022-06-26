
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// //import { createLogger } from 'redux-logger';
// import {userReducer} from "../reducers/UserReducers";

// //const loggerMiddleware = createLogger();

//  const store = createStore(
//     userReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         //loggerMiddleware
//     )
// );

// export default store

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {userReducer} from "../reducers/UserReducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  userReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;




