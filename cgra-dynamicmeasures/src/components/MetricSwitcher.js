import React, { useMemo, useState } from "react";
import { DefaultDashboardInsight } from "@gooddata/sdk-ui-dashboard";
import { insightSetBuckets } from "@gooddata/sdk-model";

import styles from "./MetricSwitcher.module.scss";

const MetricSwitcher = props => {
    const widgetId = props.widget.identifier;
    const originalBuckets = props.insight.insight.buckets;
    const originalMeasures = originalBuckets[0].items;
    const [measures, setMeasures] = useState(originalMeasures);

    // memoize the altered insight properly to improve performance and prevent weird race conditions
    // this makes sure the underlying pluggable visualization is updated only when actually needed
    const newInsight = useMemo(() => {
        const newMeasuresBucket = {
            ...originalBuckets[0],
            items: measures,
        };

        return insightSetBuckets(props.insight, [
            newMeasuresBucket,
            ...originalBuckets.filter(b => b.localIdentifier !== "measures"),
        ]);
    }, [measures, props.insight, originalBuckets]);

    return (
        <div className={styles.CustomInsight}>
            <div className={styles.MetricSwitcher}>
                {originalMeasures.map(defaultMeasure => {
                    const localIdentifier = defaultMeasure.measure.localIdentifier;
                    const isChecked = !!measures.find(m => m.measure.localIdentifier === localIdentifier);

                    return (
                        <label
                            htmlFor={`${widgetId}-${localIdentifier}`}
                            // use key to prevent react warnings
                            key={`${widgetId}-${localIdentifier}`}
                            className="input-checkbox-label"
                        >
                            <input
                                id={`${widgetId}-${localIdentifier}`}
                                className="input-checkbox"
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
                            <span className="input-label-text" title={defaultMeasure.measure.title}>
                                {defaultMeasure.measure.title}
                            </span>
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

export default MetricSwitcher;
