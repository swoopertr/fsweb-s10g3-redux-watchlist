import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { reducerFn } from './Reducers';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

const myMiddleware = store => next => action =>{
  console.log('middleware was here');
  let result = next(action);
  console.log('middleware was here, after next');
  return result;
}

const myMiddleware2 = store => next => action =>{
  console.log('middleware2 was here');
  let result = next(action);
  console.log('middleware2 was here, after next');
  return result;
}

// const logInUserActionCreator = creds => (dispatch, getState) => 
//   axios.post('/login', creds).then(res => {
//     const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user }
//     dispatch(loggedInAction);
//   });


const store = createStore(reducerFn,applyMiddleware(thunk, myMiddleware, logger, myMiddleware2));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
