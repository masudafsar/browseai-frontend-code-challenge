import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./index.scss";

import {App} from "./App.tsx";

const rootElement = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
