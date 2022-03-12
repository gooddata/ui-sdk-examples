import React from "react";
import cx from "classnames";

import styles from "./InsightsList.module.scss";

const InsightsList = ({ insights, selectedInsight, setSelectedInsight }) => {
    if (insights === null) {
        return (
            <ul>
                <li>&gt; Loading insights…</li>
            </ul>
        );
    }

    if (!insights.length) {
        return (
            <ul>
                <li>&gt; Empty list…</li>
            </ul>
        );
    }

    return (
        <ul className={styles.InsightsList}>
            {insights.map((insight) => {
                const { title, identifier } = insight;

                return (
                    <li
                        className={cx(styles.ListItem, { [styles.Active]: selectedInsight === identifier })}
                        key={identifier}
                        onClick={() => setSelectedInsight(identifier)}
                    >
                        {title}
                    </li>
                );
            })}
        </ul>
    );
};

export default InsightsList;
