import React from 'react';
import ReactDOM from 'react-dom';
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "@gooddata/sdk-ui-charts/styles/css/main.css";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

ReactDOM.render(
    <BackendProvider backend={backend}>
        <WorkspaceProvider workspace="xms7ga4tf3g3nzucd8380o2bev8oeknp">
            <App />
        </WorkspaceProvider>
    </BackendProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
