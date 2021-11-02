import React, { useState } from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { newMeasureValueFilter } from "@gooddata/sdk-model";
import RangeSlider from "rsuite/RangeSlider";

import Page from "../components/Page";
import * as Md from "../md/full";

import "rsuite/dist/rsuite.min.css";

const STEP = 100000;
const DEFAULT_MIN = 100000;
const DEFAULT_MAX = 200000;

const Home = () => {
    const [minMax, setMinMax] = useState({ min: DEFAULT_MIN, max: DEFAULT_MAX });
    const betweenFilter = newMeasureValueFilter(Md.NrChecks, "BETWEEN", minMax.min, minMax.max);

    return (
        <Page>
            <div style={{ height: 400 }}>
                <ColumnChart measures={[Md.NrChecks]} viewBy={Md.LocationCity} filters={[betweenFilter]} />
            </div>
            <div style={{ height: 50 }}>
                <RangeSlider
                    graduated
                    min={0}
                    max={1000000}
                    step={STEP}
                    defaultValue={[minMax.min, minMax.max]}
                    onChange={newMinMax => setMinMax({ min: newMinMax[0], max: newMinMax[1] })}
                    renderMark={mark => {
                        return mark;
                    }}
                />
            </div>
        </Page>
    );
};

export default Home;
