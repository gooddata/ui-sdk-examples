import React from "react";
import Snowfall from "react-snowfall";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { idRef, insightBuckets } from "@gooddata/sdk-model";

import MetricSwitcher from "../components/MetricSwitcher";

// const DASHBOARD_ID = "aaNEDetXTWPh"; // single insight
const DASHBOARD_ID = "aagCCFA94QP5"; // multiple insights for testing

const Home = () => {
    return (
        <>
            <div>
                <Dashboard
                    dashboard={idRef(DASHBOARD_ID)}
                    InsightComponentProvider={insight => {
                        const buckets = insightBuckets(insight);
                        if (buckets[0].localIdentifier !== "measures" || buckets[0].items.length <= 1) {
                            // fall back to whatever the default is
                            return undefined;
                        }
                        return MetricSwitcher;
                    }}
                />
            </div>
            <Snowfall />
        </>
    );
};

export default Home;
