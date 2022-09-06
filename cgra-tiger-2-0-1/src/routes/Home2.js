import { Execute } from "@gooddata/sdk-ui";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { InsightView } from "@gooddata/sdk-ui-ext";
import React from "react";

import Page from "../components/Page";
import * as Md from "../md/full";

const Home = () => {
    return (
        <Page>
            {/* <Dashboard dashboard="8d47be45-b697-4e6e-bd62-50c93e401854" /> */}
            {/* <InsightView insight="00afbcbf-8875-48fd-8a50-d89237c9d71b" /> */}
            <ColumnChart measures={[Md.Price.Sum]} viewBy={Md.Category_1} stackBy={Md.ProductName} />
            <Execute seriesBy={[Md.Price.Sum]} slicesBy={[Md.Category_1]}>
                {(result) => {
                    console.log(result);
                    return <p>my custom chart</p>;
                }}
            </Execute>
        </Page>
    );
};

export default Home;
