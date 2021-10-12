import * as types from "./actionTypes";
import { auth } from "../../firebse";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const signupStart = () => ({
  type: types.SIGNUP_START,
});

const signupSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});

const signupFail = (error) => ({
  type: types.SIGNUP_FAIL,
  payload: error,
});

export const signupInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(signupStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(signupSuccess(user));
      })
      .catch((error) => dispatch(signupFail(error.message)));
  };
};

//login
const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

//LOGOUT

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};
