import localforage from "localforage";
import { UPDATE_CONTENT, LOCALSTORAGE_NS } from "./constants";

const updateApplicationCache = () => (dispatch, getState) => {
  localforage.setItem(LOCALSTORAGE_NS, getState())
}

export const updateContent = ({ title, content }) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_CONTENT,
    payload: {
      title,
      content
    }
  });

  dispatch(updateApplicationCache())
};
