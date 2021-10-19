// Copyright (C) 2007-2021, GoodData(R) Corporation. All rights reserved.
import bearFactory, { AnonymousAuthProvider } from "@gooddata/sdk-backend-bear";

const backend = bearFactory({
  hostname: "https://live-examples-proxy.herokuapp.com/"
}).withAuthentication(new AnonymousAuthProvider());

window.gooddata = backend;

export default backend;
