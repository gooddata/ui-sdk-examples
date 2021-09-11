import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import CustomLoading from "../CustomLoading";

const AUTH_DOMAIN = "https://zajic.us.auth0.com";
const CLIENT_ID = "wJtJSAm3wBsxSG0nQopkjkQnuQmxdFyS";
const RETURN_URL = "https://gooddata-demo.s3.amazonaws.com/cgra-sso/index.html";

const LogoutForm = ({ history, logout }) => {
    useEffect(
        () => {
            if (process.env.REACT_APP_SET_HOSTNAME) {
                logout().then(() =>
                    window.location.assign(
                        `${AUTH_DOMAIN}/v2/logout?client_id=${CLIENT_ID}&returnTo=${encodeURIComponent(
                            RETURN_URL,
                        )}`,
                    ),
                );
            } else {
                logout().then(() => history.push("/login"));
            }
        },
        // only call the logout on initial mount -> the empty array is correct here
        [], // eslint-disable-line react-hooks/exhaustive-deps
    );

    return <CustomLoading label="Logging you out..." />;
};

export default withRouter(LogoutForm);
