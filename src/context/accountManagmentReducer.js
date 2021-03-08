// Acciones
export const CHANGE_FIELD_LOGIN = "CHANGE_FIELD_LOGIN";
export const CHANGE_FIELD_SIGNIN = "CHANGE_FIELD_SIGNIN";

// Reducer
export 

const reducer = (state, { type, payload }) => {
  const { value, field } = payload;
  switch (type) {
    case CHANGE_FIELD_LOGIN:
      return {
        ...state,
        logInData: {
          ...state.logInData,
          [field]: value,
        },
      };
    case CHANGE_FIELD_SIGNIN:
      return {
        ...state,
        signInData: {
          ...state.signInData,
          [field]: value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
