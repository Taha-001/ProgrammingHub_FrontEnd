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
    dispatch(signupStart);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(signupSuccess(user));
      })
      .catch((error) => dispatch(signupFail(error.message)));
  };
};
