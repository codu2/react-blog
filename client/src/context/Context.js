import { createContext } from "react";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
  loginStart: (userCredentials) => {},
  loginSuccess: (user) => {},
  loginFailure: () => {},
  logout: () => {},
  updateStart: (userCredentials) => {},
  updateSuccess: (user) => {},
  updateFailure: () => {},
};

const Context = createContext(initialState);

export default Context;
