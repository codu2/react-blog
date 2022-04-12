import { useReducer, useEffect } from "react";
import Context from "./Context";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
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
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "UPDATE_START":
      return {
        user: state.user,
        isFetching: true,
        error: false,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
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

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const updateStart = (userCredentials) => {
    dispatch({ type: "UPDATE_START" });
  };

  const updateSuccess = (user) => {
    dispatch({ type: "UPDATE_SUCCESS", payload: user });
  };

  const updateFailure = () => {
    dispatch({ type: "UPDATE_FAILURE" });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const contextValue = {
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    updateStart,
    updateSuccess,
    updateFailure,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
