"use client";

import { api } from "contexts/api";
import createDataContext from "./createDataContext";

const state = {
  directory_faqs: null,
  directory_nextPage: null,
  directory_loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_directory_faqs":
      return {
        ...state,
        directory_faqs: action.payload.data,
        directory_nextPage: action.payload.links.next,
      };
    case "load_directory_faqs":
      return {
        ...state,
        directory_faqs: [...state.directory_faqs, ...action.payload.data],
        directory_nextPage: action.payload.links.next,
      };
    case "set_directory_loading":
      return { ...state, directory_loading: action.payload };
    default:
      return state;
  }
};

const getDirectoryFaqs = (dispatch) => {
  return async (per_page = false, cb = (data, error) => { }) => {
    setDirectoryLoading(dispatch, true);
    try {
      const response = await api.get(`/faqs?per_page=${per_page ? per_page : 999999}`);
      dispatch({
        type: "set_directory_faqs",
        payload: response.data,
      });
      cb(response.data, null);
    } catch (error) {
      cb(null, error);
    } finally {
      setDirectoryLoading(dispatch, false);
    }
  };
};

const loadDirectoryFaqs = (dispatch) => {
  return async (page) => {
    setDirectoryLoading(dispatch, true);
    try {
      const response = await api.get(page);
      dispatch({
        type: "load_directory_faqs",
        payload: response.data,
      });
    } catch (error) {

    } finally {
      setDirectoryLoading(dispatch, false);
    }
  };
};

const setDirectoryLoading = (dispatch, status) => {
  dispatch({
    type: "set_directory_loading",
    payload: status,
  });
};


export const { Context, Provider } = createDataContext(
  reducer,
  {
    getDirectoryFaqs,
    loadDirectoryFaqs,
  },
  state
);
