import React from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import { newMeasure, idRef } from "@gooddata/sdk-model";
import tigerFactory, { TigerTokenAuthProvider } from "@gooddata/sdk-backend-tiger";

import Page from "../components/Page";

const Home = () => {
    const backend = tigerFactory({
        hostname: "https://jirizajic.demo.cloud.gooddata.com/"
    }).withAuthentication(
        new TigerTokenAuthProvider(process.env.REACT_APP_DEV_TIGER_API_TOKEN),
    );
    const measure = newMeasure(idRef("of_orders", "measure"));

    return (
        <Page>
            <Headline
                backend={backend}
                workspace="ecommerce-parent"
                primaryMeasure={measure}
            />
        </Page>
    );
};

export default Home;
