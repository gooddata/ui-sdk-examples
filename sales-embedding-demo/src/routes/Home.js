import React from "react";

import Page from "../components/Page";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <Page mainClassName={styles.Home}>
            <nav className={styles.Nav}>
                <ul>
                    <li>Analytics Dashboard</li>
                    <li>Analytics On Demand</li>
                </ul>
            </nav>
            <div className={styles.Content}>
                <iframe
                    src="https://e2e-demo28.na.gooddata.com/dashboards/embedded/#/project/gf5ar7e02sth33atdbzpabhvbddaqva3/dashboard/aadPCE04gggj?showNavigation=true"
                    title="Embedded Dashboard"
                ></iframe>
            </div>
        </Page>
    );
};

export default Home;
