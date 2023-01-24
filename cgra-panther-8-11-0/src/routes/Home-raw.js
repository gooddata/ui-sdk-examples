import React, { useState } from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { useExecutionDataView } from "@gooddata/sdk-ui";
import { MeasureGroupIdentifier, newTwoDimensional } from "@gooddata/sdk-model";

import Page from "../components/Page";
import { useBackend } from "../contexts/Auth";
import { workspace } from "../constants";
import * as Md from "../md/full";

const Home = () => {
    const [insightExecution, setInsightExecution] = useState(null);
    const backend = useBackend();

    const metric = Md.AveragePriceOfProducts;
    const viewBy = Md.ProductBrand;
    const stackBy = Md.ProductCategory;
    const filters = [];

    // useExecutionDataView is not enough to change the resulSpec/dimensions
    // const { result, error, status } = useExecutionDataView({
    //     execution: {
    //         seriesBy: [metric],
    //         slicesBy: [viewBy, stackBy],
    //         filters
    //     }
    // });
    // console.log(result);

    // build a custom execution payload and then useExecutionDataView
    const execution = backend
        .workspace(workspace)
        .execution()
        .forItems(
            [metric, viewBy, stackBy],
            filters // could be [] for no filters
        )
        .withDimensions(
            ...newTwoDimensional(
                [viewBy],
                [MeasureGroupIdentifier, stackBy]
            )
        );
    const { result, error, status } = useExecutionDataView({ execution });
    console.log(result);

    // forInsightByRef as an easy way to execute an insight that exists in AD
    // if (insightExecution === null) {
    //     backend
    //         .workspace(workspace)
    //         .insights()
    //         .getInsight(idRef('b0563506-6445-49bb-b45d-8c564fb08b2e'))
    //         .then(insight => {
    //             return backend
    //                 .workspace(workspace)
    //                 .execution()
    //                 .forInsightByRef(insight);
    //         }).then(exec => setInsightExecution(exec));
    // }
    // const { result, error, status } = useExecutionDataView({ execution: insightExecution });
    // console.log(result);

    return (
        <Page>
            <div style={{ height: 400 }}>
                <ColumnChart
                    measures={[metric]}
                    viewBy={viewBy}
                    stackBy={stackBy}
                    filters={filters}
                />
            </div>
        </Page>
    );
};

export default Home;
