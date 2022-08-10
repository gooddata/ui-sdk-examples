import React from "react";
import { BackendProvider } from "@gooddata/sdk-ui";
import { ThemeProvider } from "@gooddata/sdk-ui-theme-provider";

import AppRouter from "./routes/AppRouter";
import { useAuth } from "./contexts/Auth";
import { WorkspaceListProvider } from "./contexts/WorkspaceList";
import customTheme from "./theme";

function App() {
    const { backend } = useAuth();

    return (
        <BackendProvider backend={backend}>
            <WorkspaceListProvider>
                {/* <ThemeProvider theme={customTheme}> */}
                <AppRouter />
                {/* </ThemeProvider> */}
            </WorkspaceListProvider>
        </BackendProvider>
    );
}

export default App;
