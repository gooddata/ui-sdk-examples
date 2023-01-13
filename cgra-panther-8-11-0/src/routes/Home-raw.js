import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { useExecutionDataView } from "@gooddata/sdk-ui";
import { MeasureGroupIdentifier, newTwoDimensional } from "@gooddata/sdk-model";

import Page from "../components/Page";
import { useBackend } from "../contexts/Auth";
import { workspace } from "../constants";
import * as Md from "../md/full";

const Home = () => {
    const backend = useBackend();

    console.log(backend);
    console.log(workspace);

    const metric = Md.AveragePriceOfProducts;
    const viewBy = Md.ProductBrand;
    const stackBy = Md.ProductCategory;
    const filters = [];

    // useExecutionDataView is not enough to change the resulSpec/dimensions
    const { result, error, status } = useExecutionDataView({
        execution: {
            seriesBy: [metric],
            slicesBy: [viewBy, stackBy],
            filters
        }
    });
    console.log(result);

    // const execution = backend
    //     .workspace(workspace)
    //     .execution()
    //     .forItems(
    //         [metric, viewBy, stackBy],
    //         filters // could be [] for no filters
    //     )
    //     .withDimensions(
    //         ...newTwoDimensional(
    //             [stackBy],
    //             [MeasureGroupIdentifier, viewBy]
    //         )
    //     );

    // const { result, error, status } = useExecutionDataView({ execution });

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
