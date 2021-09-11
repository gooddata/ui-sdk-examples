import bearFactory, {
    FixedLoginAndPasswordAuthProvider,
    ContextDeferredAuthProvider,
} from "@gooddata/sdk-backend-bear";

import { backend as hostname } from "../../constants";

const backendConfig = process.env.REACT_APP_SET_HOSTNAME ? { hostname } : {};

export const createBackend = () => {
    return bearFactory(backendConfig).withAuthentication(new ContextDeferredAuthProvider());
};

export const backendWithCredentials = (backend, username, password) => {
    return backend.withAuthentication(new FixedLoginAndPasswordAuthProvider(username, password));
};
