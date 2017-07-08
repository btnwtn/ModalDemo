import localforage from "localforage";
import { UPDATE_CONTENT } from "./constants";

export const updateContent = ({ title, content }) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_CONTENT,
    payload: {
      title,
      content
    }
  });

  localforage.setItem("applicationState", getState());
};
