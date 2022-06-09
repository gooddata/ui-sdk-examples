import React from "react";

import { AuthProvider } from "./Auth";

export const AppProviders = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};
