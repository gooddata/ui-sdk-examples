import { Execute } from "@gooddata/sdk-ui";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { InsightView } from "@gooddata/sdk-ui-ext";
import React from "react";

import Page from "../components/Page";
import * as Md from "../md/full";
import CustomBarChart from "../components/CustomBarChart";

const Home = () => {
    return (
        <Page>
            <iframe
                src="http://localhost:3000/dashboards/embedded/#/workspace/demo/dashboard/5de6ce07-6537-4588-8477-e1d0390ee44f?showNavigation=false&setHeight=700"
                height="700px"
                width="100%"
                frameborder="0"
            ></iframe>
            <Dashboard dashboard={Md.Dashboards.Overview} />
            <div style={{ height: 400 }}>
                <InsightView insight={Md.Insights.PercentRevenuePerProductByCustomerAndCategory} />
            </div>
            <ColumnChart measures={[Md.Price.Sum]} viewBy={Md.Category_1} stackBy={Md.ProductName} />
            <Execute seriesBy={[Md.Price.Sum]} slicesBy={[Md.Category_1]}>
                {CustomBarChart}
            </Execute>
        </Page>
    );
};

export default Home;
