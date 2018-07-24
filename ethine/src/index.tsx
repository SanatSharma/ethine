import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import "./index.css";

const defaultState = {
    videos: [],
};

const reducer = (state = defaultState, action: any) => state;

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById("root") as HTMLElement
);