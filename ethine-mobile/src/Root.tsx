import * as React from "react";
import { Provider } from "react-redux";

import { CounterContainer } from "./containers/CounterContainer";
import store from "./store";

export class Root extends React.Component<{}, void> {

    render(): JSX.Element | any {
        return (
            <Provider store={store}>
                <CounterContainer />
            </Provider>
        );
    }
}

export default Root;
