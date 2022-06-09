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
                src="https://demos.na.gooddata.com/dashboards/embedded/#/workspace/gf5ar7e02sth33atdbzpabhvbddaqva3/dashboard/aadPCE04gggj?showNavigation=false"
            />
            <Dashboard dashboard={"aadPCE04gggj"} />
            <Headline primaryMeasure={Md.PageViews} />
            <div style={{ height: 400 }}>
                <InsightView insight={Md.Insights.PageViewsByCategoryByBrand} />
            </div>
            <div style={{ height: 400 }}>
                <ColumnChart
                    measures={[Md.PageViews]}
                    viewBy={Md.ProductCategory}
                    stackBy={Md.ProductBrand}
                />
            </div>
            <Execute seriesBy={[Md.PageViews]} slicesBy={[Md.ProductCategory]}>
                {CustomBarChart}
            </Execute>
        </Page>
    );
};

export default Home;
