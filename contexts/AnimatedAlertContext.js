import createDataContext from "./createDataContext";

const state = { animatedAlertData: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "set_data":
      return { ...state, animatedAlertData: action.payload };
    default:
      return state;
  }
};

const showAnimatedAlert = (dispatch) => {
  return async (data) => {
    dispatch({
      type: "set_data",
      payload: data,
    });
  };
};

const hideAnimatedAlert = (dispatch) => {
  return async () => {
    dispatch({
      type: "set_data",
      payload: null,
    });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    showAnimatedAlert,
    hideAnimatedAlert
  },
  state
);
