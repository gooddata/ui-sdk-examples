import React, { useState, useEffect } from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import { useHistory } from "react-router-dom";

import Page from "../components/Page";
import * as Md from "../md/full";
import { useBackend } from "../contexts/Auth";

const relayState = "https://gooddata-demo.s3.amazonaws.com/cgra-sso/index.html";

const Home = () => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { sdk: backend } = useBackend();
    window.gooddata = backend;

    /* CORS */
    // backend
    //     .xhr
    //     .put('/gdc/domains/zajic/securitySettings/allowedOrigins', {
    //         body: {
    //             "allowedOrigins": {
    //                  "items": [
    //                     "https://gooddata-demo.s3.amazonaws.com/"
    //                 ]
    //             }
    //         }
    //     })
    //     .then(data => data.getData())
    //     .then(result => console.log(result));

    /* user SSO */
    // backend
    //   .xhr
    //   .put('/gdc/account/profile/25efa5d20781e927845b3b1d1004bdc2', {
    //     body: {
    //     "accountSetting": {
    //                 "firstName": "Lubo",
    //                 "lastName": "Slivka",
    //                 "ssoProvider": "auth0-zajic.on.gooddata.com",
    //                 "authenticationModes": [
    //                     // "SSO",
    //                     // "PASSWORD"
    //                 ]
    //             }
    //         }
    //     })
    //     .then(data => data.getData())
    //     .then(result => console.log(result));

    useEffect(() => {
        backend.user.isLoggedIn().then(isLogged => {
            if (isLogged) {
                setIsLoggedIn(true);
            } else {
                if (process.env.REACT_APP_SET_HOSTNAME) {
                    backend.user.initiateSamlSso(relayState);
                } else {
                    history.push("/login");
                }
            }
        });
    }, [history, backend]);

    return (
        <Page>
            {!isLoggedIn && <span>Checking your credentials, please wait…</span>}
            {isLoggedIn && <Headline primaryMeasure={Md.NrOfActiveCustomers} />}
        </Page>
    );
};

export default Home;
