import React from "react";
import ReactDOM from "react-dom";
import localforage from "localforage";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
import { LOCALSTORAGE_NS, UPDATE_CONTENT } from "./store/constants";

import "./index.css";
import App from "./App";

const initialState = {
  games: [
    {
      title: "TLoZ: Breath of the Wild",
      content: "I love this game :)"
    },
    { title: "Knack II", content: "Game of the year, all years!" },
    {
      title: "Donkey Kong Country",
      content: "…actual game of the year all years!"
    }
  ]
};

const games = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CONTENT:
      return [...state].map(({ title, content }) => {
        return {
          title: title,
          content: title === action.payload.title
            ? action.payload.content
            : content
        };
      });
    default:
      return state;
  }
};

const createApplicationStore = state =>
  createStore(combineReducers({ games }), state, applyMiddleware(thunk));

const renderApplication = state => {
  const store = createApplicationStore(state);

  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById("root")
  );
};

localforage
  .getItem(LOCALSTORAGE_NS)
  .then(applicationState => {
    if (!applicationState) {
      localforage.setItem(LOCALSTORAGE_NS, initialState).catch(console.warn);
    }

    renderApplication(applicationState ? applicationState : initialState);
  })
  .catch(err => {
    console.warn(err);
    renderApplication(initialState);
  });

registerServiceWorker();
