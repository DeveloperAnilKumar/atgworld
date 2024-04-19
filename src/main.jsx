import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/jquery/dist/jquery.js";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./component/store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
