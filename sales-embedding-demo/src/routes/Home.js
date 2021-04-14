import React from "react";

import Page from "../components/Page";
import config from "../config";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <Page contentClassName={styles.Home}>
            <iframe src={config.dashboardUrl} title="Embedded Dashboard"></iframe>
        </Page>
    );
};

export default Home;
