import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

import config from "../../config";

import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                style={{ color: config.linkColor }}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink>
            <NavLink to={"/"} className={styles.Link} style={{ color: config.linkColor }}>
                Home
            </NavLink>
            <NavLink to={"/"} className={styles.Link} style={{ color: config.linkColor }}>
                My Work
            </NavLink>
            <NavLink
                to={"/"}
                className={styles.Link}
                style={{ color: config.linkColor }}
                activeClassName={styles.LinkActive}
                exact
            >
                Reports
            </NavLink>
            <NavLink to={"/"} className={styles.Link} style={{ color: config.linkColor }}>
                Settings
            </NavLink>
        </>
    );
};

export default Links;
