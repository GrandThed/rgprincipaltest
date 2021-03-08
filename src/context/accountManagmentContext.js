import { createContext, useReducer } from "react";
import reducer, { CHANGE_FIELD_LOGIN, CHANGE_FIELD_SIGNIN } from "./accountManagmentReducer";

const initialState = {
  logInData: {
    email: "",
    password: "",
  },
  signInData: {
    username: "",
    email: "",
    password: "",
    country: "Chile",
  },
  logInToken: null,
};

export const AccountManagmentContext = createContext(initialState);

const AccountManagmentState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeFieldLogIn = ({ target }) => {
    dispatch({
      type: CHANGE_FIELD_LOGIN,
      payload: { field: target.name, value: target.value },
    });
  };

  const changeFieldSignIn = ({ target }) => {
    dispatch({
      type: CHANGE_FIELD_SIGNIN,
      payload: { field: target.name, value: target.value },
    });
  };

  return (
    <AccountManagmentContext.Provider value={{ state, changeFieldLogIn, changeFieldSignIn }}>{children}</AccountManagmentContext.Provider>
  );
};

export default AccountManagmentState;
