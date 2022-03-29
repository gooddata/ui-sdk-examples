import React, { useState } from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import {
    newPositiveAttributeFilter,
    newNegativeAttributeFilter,
    filterIsEmpty,
    isPositiveAttributeFilter,
    filterAttributeElements
} from "@gooddata/sdk-model";

import Page from "../components/Page";

const WORKSPACE_A = 'ar1ge3rv4o7szbo9gly0us1q00yq0eh1';
const INSIGHT_A = 'aajAr1MUW8rf';
const ATTRIBUTE_A = 'label.origins.origincity'

const WORKSPACE_B = 'srk96wm3l4y48nie5ghp81tdnsubbai1';
const INSIGHT_B = 'aasAevQZrrVg';
const ATTRIBUTE_B = 'label.caller.callercompanycity';

const Home = () => {
    const [filtersA, setFiltersA] = useState([]);
    const [filtersB, setFiltersB] = useState([]);

    return (
        <Page>
            <div style={{ float: 'right' }}>
                <AttributeFilter
                    workspace={WORKSPACE_A}
                    filter={newPositiveAttributeFilter(ATTRIBUTE_A, [])}
                    onApply={filter => {
                        if (filterIsEmpty(filter)) {
                            setFiltersA([]);
                            setFiltersB([]);
                        } else {
                            const selectedValues = filterAttributeElements(filter);
                            const newAttributeFilter = isPositiveAttributeFilter(filter) ?
                                newPositiveAttributeFilter : newNegativeAttributeFilter;

                            const filterA = newAttributeFilter(ATTRIBUTE_A, selectedValues);
                            const filterB = newAttributeFilter(ATTRIBUTE_B, selectedValues);

                            setFiltersA([filterA]);
                            setFiltersB([filterB]);
                        }
                    }}
                />
            </div>
            <h3>Workspace: <code>{WORKSPACE_A}</code>, insight: <code>{INSIGHT_A}</code></h3>
            <div style={{ height: 300 }}>
                <InsightView
                    workspace={WORKSPACE_A}
                    insight={INSIGHT_A}
                    filters={filtersA}
                />
            </div>
            <h3>Workspace: <code>{WORKSPACE_B}</code>, insight: <code>{INSIGHT_B}</code></h3>
            <div style={{ height: 300 }}>
                <InsightView
                    workspace={WORKSPACE_B}
                    insight={INSIGHT_B}
                    filters={filtersB}
                />
            </div>
        </Page>
    );
};

export default Home;
