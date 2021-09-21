import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { ThemeProvider, useTheme, useThemeIsLoading } from "@gooddata/sdk-ui-theme-provider";

import Page from "../components/Page";
import customTheme from "../customTheme";

const ThemedHome = () => (
    <ThemeProvider theme={customTheme}>
        <Home />
    </ThemeProvider>
);

const Home = () => {
    const themeIsLoading = useThemeIsLoading();
    const theme = useTheme();

    if (themeIsLoading) {
        return <p>Loading theme resources…</p>;
    }

    return (
        <div style={{ backgroundColor: theme.palette.complementary.c0 }}>
            <Page>
                <div style={{ height: 580 }}>
                    {/* line below renders a column chart create in analytical designer */}
                    <InsightView insight="aby6oS6DbpFX" />
                </div>
            </Page>
        </div>
    );
};

export default ThemedHome;
