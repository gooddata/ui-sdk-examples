import React, { useState, useEffect } from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
// import { Headline } from "@gooddata/sdk-ui-charts";

// import * as Md from "../md/full";
import Page from "../components/Page";
import { useBackend } from "../contexts/Auth";
import { workspace } from "../constants";
import NLQuery from "../components/NLQuery";
import InsightsList from "../components/InsightsList";

const Home = () => {
    const [query, setQuery] = useState("");
    const [isBusy, setIsBusy] = useState(false);
    const [insights, setInsights] = useState(null);
    const [selectedInsight, setSelectedInsight] = useState(null);
    const backend = useBackend();

    useEffect(() => {
        backend
            .workspace(workspace)
            .insights()
            .getInsights()
            .then((result) => {
                const insights = result.items.map((item) => ({
                    title: item.insight.title,
                    identifier: item.insight.identifier,
                }));
                setInsights(insights);
            });
    }, [backend]);

    return (
        <Page>
            <NLQuery
                query={query}
                setQuery={setQuery}
                isBusy={isBusy}
                setIsBusy={setIsBusy}
                insights={insights}
                setInsights={setInsights}
                setSelectedInsight={setSelectedInsight}
            />
            <InsightsList
                insights={insights}
                selectedInsight={selectedInsight}
                setSelectedInsight={setSelectedInsight}
            />
            <div style={{ height: 300 }}>{selectedInsight && <InsightView insight={selectedInsight} />}</div>
        </Page>
    );
};

export default Home;
