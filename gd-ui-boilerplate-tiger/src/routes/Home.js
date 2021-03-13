import React, { useState } from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Headline, ColumnChart } from "@gooddata/sdk-ui-charts";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import { Execute } from "@gooddata/sdk-ui";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model";

import Page from "../components/Page";
import CustomBarChart from "../components/CustomBarChart";
import * as Ldm from "../ldm/full.js";
import styles from "./Home.module.scss";

const Home = () => {
    const [filters, setFilters] = useState([]);

    return (
        <Page className={styles.Home}>
            <div className={styles.AttributeFilter}>
                <AttributeFilter
                    title="Category"
                    filter={newPositiveAttributeFilter(
                        Ldm.Category_1,
                        []
                    )}
                    onApply={filter => setFilters([filter])}
                />
            </div>
            <div>
                Total Price:{" "}
                <Headline primaryMeasure={Ldm.Price.Sum}filters={filters} />
                <br />
                <br />
            </div>
            <div style={{ height: 400 }}>
                <InsightView
                    insight={Ldm.Insights.PriceViewedByCategoryStackedByProduct}
                    filters={filters}
                    config={{ legend: { position: "top" } }}
                />
            </div>
            <div style={{ height: 400 }}>
                <ColumnChart
                    measures={[Ldm.Price.Sum]}
                    viewBy={Ldm.Category_1}
                    stackBy={Ldm.ProductName}
                    filters={filters}
                />
            </div>
            <div style={{ height: 400 }}>
                <Execute
                    seriesBy={[Ldm.Price.Sum]}
                    slicesBy={[Ldm.Category_1]}
                    filters={filters}
                    children={CustomBarChart}
                />
            </div>
        </Page>
    );
};

export default Home;
