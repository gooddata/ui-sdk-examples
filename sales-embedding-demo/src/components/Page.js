import React from "react";
import Helmet from "react-helmet";
import cx from "classnames";
import { NavLink } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer";
import config from "../config";

import styles from "./Page.module.scss";

const Page = ({
    children,
    className = null,
    mainClassName = null,
    contentClassName = null,
    title = "GoodData App",
}) => {
    return (
        <div className={cx(styles.Page, className)}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header />
            <main className={cx(styles.Main, mainClassName, "s-page")}>
                <nav className={styles.Nav} style={{ backgroundColor: config.leftPaneBackgroundColor }}>
                    <ul>
                        <li>
                            <NavLink
                                to={"/"}
                                className={styles.Link}
                                activeClassName={styles.LinkActive}
                                style={{ color: config.linkColor }}
                                exact
                            >
                                Embedded Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/gduicomponents"}
                                className={styles.Link}
                                activeClassName={styles.LinkActive}
                                style={{ color: config.linkColor }}
                            >
                                GD.UI Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/dashboardview"}
                                className={styles.Link}
                                activeClassName={styles.LinkActive}
                                style={{ color: config.linkColor }}
                            >
                                Integrated Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={cx(styles.Content, contentClassName)}>{children}</div>
            </main>
            <Footer />
        </div>
    );
};

export default Page;
