import React from "react";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { ColumnChart, Headline } from "@gooddata/sdk-ui-charts";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Execute } from "@gooddata/sdk-ui";

import Page from "../components/Page";
import * as Md from "../md/full";
import CustomBarChart from "../components/CustomBarChart";

const Home = () => {
    return (
        <Page>
            <iframe src="https://jirizajic.demo.cloud.gooddata.com/dashboards/embedded/#/workspace/ecommerce-parent/dashboard/092929af-375a-4e9c-964f-2add8cdbd259?showNavigation=true&setHeight=700" height="700px" width="100%" frameborder="0"></iframe>
            <Dashboard dashboard="092929af-375a-4e9c-964f-2add8cdbd259" />
            <Headline primaryMeasure={Md.AveragePriceOfProducts} />
            <div style={{ height: 400 }}>
                <InsightView insight={Md.Insights.AvgPriceOfProductsByBrandByCategory} />
            </div>
            <div style={{ height: 400 }}>
                <ColumnChart
                    measures={[Md.AveragePriceOfProducts]}
                    viewBy={Md.ProductBrand}
                    stackBy={Md.ProductCategory}
                />
            </div>
            <Execute seriesBy={[Md.AveragePriceOfProducts]} slicesBy={[Md.ProductBrand]}>
                {CustomBarChart}
            </Execute>
        </Page>
    );
};

export default Home;
