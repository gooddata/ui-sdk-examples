import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { newMeasure, newAttribute } from "@gooddata/sdk-model";
import { Execute } from "@gooddata/sdk-ui";

import Page from "../components/Page";
import CustomBarChart from "../components/CustomBarChart";
import config from "../config";

import styles from "./GDUIComponents.module.scss";

const GDUIComponents = () => {
    return (
        <Page contentClassName={styles.GDUIComponents}>
            <div className={styles.Insight}>
                <InsightView insight={config.insightIdentifier} config={{ legend: { position: "right" } }} />
            </div>
            <div className={styles.Insight}>
                <ColumnChart
                    measures={[newMeasure(config.insightMeasure)]}
                    viewBy={newAttribute(config.insightViewByAttribute)}
                    stackBy={newAttribute(config.insightStackByAttribute)}
                    config={{ legend: { position: "right" } }}
                />
            </div>
            <div className={styles.Insight}>
                <Execute
                    seriesBy={[newMeasure(config.insightMeasure)]}
                    slicesBy={[newAttribute(config.insightViewByAttribute)]}
                    children={CustomBarChart}
                />
            </div>
        </Page>
    );
};

export default GDUIComponents;
