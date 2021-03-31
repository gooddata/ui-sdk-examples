import React from "react";
import { NavLink } from "react-router-dom";

import Page from "../components/Page";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <Page mainClassName={styles.Home}>
            <nav className={styles.Nav}>
                <ul>
                    <li>
                        <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive}>
                            Analytics Dashboard (iframe)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"} className={styles.Link}>
                            DashboardView
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"} className={styles.Link}>
                            InsightView
                        </NavLink>
                    </li>
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
