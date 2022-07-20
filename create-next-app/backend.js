// (C) 2022 GoodData Corporation
import bearFactory from "@gooddata/sdk-backend-bear";
import { AnonymousAuthProvider } from "@gooddata/sdk-backend-base";

const backend = bearFactory({
  hostname: "https://interactive-examples-proxy.herokuapp.com/",
}).withAuthentication(new AnonymousAuthProvider());

export default backend;
