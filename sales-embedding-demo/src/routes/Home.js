import React from "react";
import { NavLink } from "react-router-dom";

import Page from "../components/Page";
import config from "../config";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <Page mainClassName={styles.Home}>
            <nav className={styles.Nav} style={{ backgroundColor: config.leftPaneBackgroundColor }}>
                <ul>
                    <li>
                        <NavLink
                            to={"/"}
                            className={styles.Link}
                            activeClassName={styles.LinkActive}
                            style={{ color: config.linkColor }}
                        >
                            Analytics Dashboard (iframe)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"} className={styles.Link} style={{ color: config.linkColor }}>
                            DashboardView
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"} className={styles.Link} style={{ color: config.linkColor }}>
                            InsightView
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.Content}>
                <iframe src={config.dashboardUrl} title="Embedded Dashboard"></iframe>
            </div>
        </Page>
    );
};

export default Home;
