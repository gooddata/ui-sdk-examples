import React, { useState } from "react";
import Snowfall from "react-snowfall";
import { Dashboard, DefaultDashboardInsight } from "@gooddata/sdk-ui-dashboard";
import { idRef, insightBuckets, insightSetBuckets } from "@gooddata/sdk-model";

import styles from "./Home.module.scss";

const DASHBOARD_ID = "aaNEDetXTWPh"; // single insight
// const DASHBOARD_ID = "aagCCFA94QP5"; // multiple insights for testing

const CustomInsight = props => {
    const widgetId = props.widget.identifier;
    const originalBuckets = props.insight.insight.buckets;
    const originalMeasures = originalBuckets[0].items;
    const [measures, setMeasures] = useState(originalMeasures);

    const newMeasuresBucket = {
        ...originalBuckets[0],
        items: measures,
    };

    const newInsight = insightSetBuckets(props.insight, [
        newMeasuresBucket,
        ...originalBuckets.filter(b => b.localIdentifier !== "measures"),
    ]);

    return (
        <div className={styles.CustomInsight}>
            <div className={styles.MetricSwitcher}>
                {originalMeasures.map(defaultMeasure => {
                    const localIdentifier = defaultMeasure.measure.localIdentifier;
                    const isChecked = !!measures.find(m => m.measure.localIdentifier === localIdentifier);

                    return (
                        <label
                            htmlFor={`${widgetId}-${localIdentifier}`}
                            key={`${widgetId}-${localIdentifier}`}
                        >
                            <input
                                id={`${widgetId}-${localIdentifier}`}
                                value={localIdentifier}
                                type="checkbox"
                                defaultChecked={isChecked}
                                disabled={measures.length === 1 && isChecked}
                                onChange={e => {
                                    if (!e.currentTarget.checked) {
                                        setMeasures(
                                            measures.filter(
                                                m => m.measure.localIdentifier !== localIdentifier,
                                            ),
                                        );
                                    } else {
                                        setMeasures([...measures, defaultMeasure]);
                                    }
                                }}
                            />
                            {defaultMeasure.measure.title}
                        </label>
                    );
                })}
            </div>
            <div className={styles.Insight}>
                <DefaultDashboardInsight {...props} insight={newInsight} />
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            <div className={styles.Dashboard}>
                <Dashboard
                    dashboard={idRef(DASHBOARD_ID)}
                    InsightComponentProvider={insight => {
                        const buckets = insightBuckets(insight);
                        if (buckets[0].localIdentifier !== "measures" || buckets[0].items.length <= 1) {
                            // fall back to whatever the default is
                            return undefined;
                        }
                        return CustomInsight;
                    }}
                />
            </div>
            <Snowfall />
        </>
    );
};

export default Home;
