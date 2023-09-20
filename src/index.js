import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
import store from "./state/store";
import "./index.css";
import App from "./App";
// import stateReducer from "./state";

// const store = configureStore({
//   reducer: { state: stateReducer },
// });

// import rootReducer from './rootReducer';

// const store = configureStore({
//   reducer: rootReducer
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
