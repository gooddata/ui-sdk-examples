import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";

import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Home from "./Home";
import GDUIComponents from "./GDUIComponents";
import DashboardView from "./DashboardView";

import styles from "./AppRouter.module.scss";

import { useAuth } from "../contexts/Auth";
import { AuthStatus } from "../contexts/Auth/state";
const RedirectIfNotLoggedIn = () => {
    const auth = useAuth();
    const shouldRedirectToLogin = auth.authStatus === AuthStatus.UNAUTHORIZED;
    return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
};

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/gduicomponents" component={GDUIComponents} />
                    <Route exact path="/dashboardview" component={DashboardView} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <RedirectIfNotLoggedIn />
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
