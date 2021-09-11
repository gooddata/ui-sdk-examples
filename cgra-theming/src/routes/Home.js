import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { ThemeProvider, useThemeIsLoading } from "@gooddata/sdk-ui-theme-provider";

import Page from "../components/Page";
import customTheme from "../customTheme";

const Home = () => {
    const themeIsLoading = useThemeIsLoading();

    if (themeIsLoading) {
        return <p>…</p>;
    }

    return (
        <ThemeProvider theme={customTheme}>
            <div style={{ backgroundColor: "var(--gd-palette-complementary-0)" }}>
                <Page>
                    <div style={{ height: 580 }}>
                        {/* line below renders a column chart create in analytical designer */}
                        <InsightView insight="aby6oS6DbpFX" />
                    </div>
                </Page>
            </div>
        </ThemeProvider>
    );
};

export default Home;
