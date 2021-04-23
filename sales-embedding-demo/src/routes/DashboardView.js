import React from "react";
import { DashboardView } from "@gooddata/sdk-ui-ext";

import Page from "../components/Page";
import config from "../config";

import styles from "./DashboardView.module.scss";

const DashboardViewRoute = () => {
    return (
        <Page contentClassName={styles.DashboardView}>
            <DashboardView dashboard={config.dashboardIdentifier} />
        </Page>
    );
};

export default DashboardViewRoute;
