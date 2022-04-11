import { useReducer } from "react";
import Context from "./Context";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const loginStart = (userCredentials) => {
    dispatch({ type: "LOGIN_START" });
  };

  const loginSuccess = (user) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
  };

  const loginFailure = () => {
    dispatch({ type: "LOGIN_FAILURE" });
  };

  const contextValue = {
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    loginStart,
    loginSuccess,
    loginFailure,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
