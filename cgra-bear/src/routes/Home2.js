import React from "react";
import { ColumnChart, Headline } from "@gooddata/sdk-ui-charts";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Execute } from "@gooddata/sdk-ui";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";

import Page from "../components/Page";
import * as Md from "../md/full";
import CustomBarChart from "../components/CustomBarChart";

const Home = () => {
    return (
        <Page>
            <iframe
                title="dashboard"
                width="100%"
                height="600"
                src="https://jirizajic.internal.gooddata.com/dashboards/embedded/#/workspace/tr6skk5lty9d9qcbyg7imneoyew4rwbr/dashboard/afmNlKnLc52i?showNavigation=false"
            />
            <Dashboard dashboard={"afmNlKnLc52i"} />
            <Headline primaryMeasure={Md.Revenue} />
            <div style={{ height: 400 }}>
                <InsightView insight={Md.Insights.RevenueByProducts} />
            </div>
            <div style={{ height: 400 }}>
                <ColumnChart measures={[Md.Revenue]} viewBy={Md.ProductCategory} stackBy={Md.ProductName} />
            </div>
            <Execute seriesBy={[Md.Revenue]} slicesBy={[Md.ProductCategory]}>
                {CustomBarChart}
            </Execute>
        </Page>
    );
};

export default Home;
