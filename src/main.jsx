import React from "react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { store, persistor } from "./store/store.js";
import { Provider } from "react-redux";
import "translation/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>,
);
