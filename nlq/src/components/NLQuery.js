import React, { useCallback } from "react";

import { useBackend } from "../contexts/Auth";
import { workspace } from "../constants";

const NLQuery = ({ query, setQuery, isBusy, setIsBusy, insights, setInsights, setSelectedInsight }) => {
    const backend = useBackend();

    // https://stackoverflow.com/questions/55647287/how-to-send-request-on-click-react-hooks-way
    // https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma
    const onSearch = useCallback(async () => {
        setIsBusy(true);
        setSelectedInsight(null);
        if (!query) {
            const result = await backend.workspace(workspace).insights().getInsights();
            const insights = result.items.map((item) => ({
                title: item.insight.title,
                identifier: item.insight.identifier,
            }));
            setInsights(insights);
        } else {
            const response = await fetch(`http://localhost:5000/search/${query.replace(/\s+/g, "+")}`);
            const data = await response.json();
            const insights = Object.keys(data.title2id).map((title) => ({
                title,
                identifier: data.title2id[title],
            }));
            setInsights(insights);
        }
        setIsBusy(false);
    }, [backend, query, setInsights, setIsBusy, setSelectedInsight]);

    const onCreate = useCallback(async () => {
        setIsBusy(true);
        setSelectedInsight(null);
        if (!query) {
            alert("Please provide query");
        } else {
            const response = await fetch(`http://localhost:5000/create/${query.replace(/\s+/g, "+")}`);
            const data = await response.json();
            const newInsight = {
                title: data.title,
                identifier: data.id,
            };
            setInsights([...insights, newInsight]);
            setSelectedInsight(newInsight.identifier);
        }
        setIsBusy(false);
    }, [query, insights, setInsights, setIsBusy, setSelectedInsight]);

    return (
        <>
            <label htmlFor="query">
                NLQuery:{" "}
                <input
                    size={54}
                    type="search"
                    id="query"
                    name="query"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </label>{" "}
            <button onClick={onSearch} disabled={isBusy}>
                Search
            </button>{" "}
            <button onClick={onCreate} disabled={isBusy || !query}>
                Create
            </button>
        </>
    );
};

export default NLQuery;
