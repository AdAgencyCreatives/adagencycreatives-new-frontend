import createDataContext from "./createDataContext";

const state = { body_overflow_hidden: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "set_body_overflow_hidden":
      return { ...state, body_overflow_hidden: action.payload };
    default:
      return state;
  }
};

const showAlert = (dispatch) => {
  return async (body_overflow_hidden) => {
    dispatch({
      type: "set_body_overflow_hidden",
      payload: body_overflow_hidden,
    });
  };
};

const setBodyOverflowHidden = (dispatch) => {
  return async (value=false) => {
    dispatch({
      type: "set_body_overflow_hidden",
      payload: value,
    });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    setBodyOverflowHidden,
  },
  state
);
