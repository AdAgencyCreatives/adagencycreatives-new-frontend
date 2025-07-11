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

const showAlert = (dispatch) => {
  return async (message, cb = () => { }) => {
    const data = {
      type: "info",
      title: "Notification",
      message: message,
      autoDismiss: false,
      dismissTime: 0,
      onClose: cb,
    };
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

const hideAlert = (dispatch) => {
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
    showAlert,
    hideAlert,
    showAnimatedAlert,
    hideAnimatedAlert
  },
  state
);
