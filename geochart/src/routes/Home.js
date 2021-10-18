import React from "react";
import { Execute } from "@gooddata/sdk-ui";

import Page from "../components/Page";
import GeoChart from "../components/GeoChart";
import * as Md from "../md/full";

const Home = () => {
    return (
        <Page>
            <Execute seriesBy={[Md.Population.Sum, Md.Density.Sum]} slicesBy={[Md.StateName]}>
                {({ isLoading, error, result }) => {
                    if (isLoading) {
                        return <p>Loading…</p>;
                    }

                    if (error) {
                        return <p>Execution failed; {error.toString()}</p>;
                    }

                    if (result) {
                        const slices = result
                            .data()
                            .slices()
                            .toArray();
                        const data = slices.map(slice => ({
                            state: slice.sliceTitles()[0],
                            population: parseInt(slice.rawData()[0]),
                            density: parseInt(slice.rawData()[1]),
                        }));
                        return <GeoChart height={600} data={data} />;
                    }

                    return <p>Init…</p>;
                }}
            </Execute>
        </Page>
    );
};

export default Home;
