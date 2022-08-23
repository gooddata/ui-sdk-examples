import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { idRef } from "@gooddata/sdk-model";
import { SpreadSheets, Worksheet, Column } from "@grapecity/spread-sheets-react";
import { useInsightDataView } from "@gooddata/sdk-ui";

import Page from "../components/Page";
import * as Md from "../md/full";

const INSIGHT = Md.Insights.BrandsByGrossProfitAndAvgPriceOfProduct;
// const INSIGHT = Md.Insights.ActivityByHour;
// const INSIGHT = Md.Insights.CustomersByCountryAndState;

const Home = () => {
    let headers = [];
    let data = [];
    const { result, status } = useInsightDataView({ insight: idRef(INSIGHT) });

    if (result) {
        const series = result.data().series().toArray();
        const slices = result.data().slices().toArray();

        const attrHeaders = slices[0].descriptor.descriptors.map((d) => d.attributeHeader.name);
        const metricHeaders = series.map((s) => s.measureTitle());
        headers = [...attrHeaders, ...metricHeaders];

        const values = slices.map((slice) => {
            const sliceTitles = slice.sliceTitles();
            const dataPoints = slice.dataPoints().map((dp) => dp.rawValue);

            return [...sliceTitles, ...dataPoints];
        });

        data = values.map((row) => {
            return headers.reduce(
                (acc, val, i) => ({
                    ...acc,
                    [val]: row[i],
                }),
                {},
            );
        });
    }

    return (
        <Page>
            <div style={{ height: 400 }}>
                <InsightView insight={INSIGHT} />
            </div>
            {status === "success" && headers && result && (
                <div style={{ height: 600 }}>
                    <SpreadSheets>
                        <Worksheet dataSource={data}>
                            {headers.map((header) => (
                                <Column key={header} width={200} dataField={header} />
                            ))}
                        </Worksheet>
                    </SpreadSheets>
                </div>
            )}
        </Page>
    );
};

export default Home;
