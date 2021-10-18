import bearFactory, {
    FixedLoginAndPasswordAuthProvider,
    AnonymousAuthProvider,
} from "@gooddata/sdk-backend-bear";
import { backend } from "../../constants";

export const createBackend = () =>
    bearFactory({ hostname: backend }).withAuthentication(new AnonymousAuthProvider());

export const backendWithCredentials = (backend, username, password) =>
    backend.withAuthentication(new FixedLoginAndPasswordAuthProvider(username, password));
