import React from "react";
import { Link } from "react-router-dom";

import Page from "../components/Page";

import styles from "./Welcome.module.scss";

import kpiUri from "../media/kpi.png";
import successUri from "../media/success.svg";

const Code = ({ children, ...restProps }) => (
    <code className={styles.code} {...restProps}>
        {children}
    </code>
);

const Welcome = () => {
    return (
        <Page>
            <div className={styles.Lead}>
                <h1>
                    <img src={successUri} alt="" />
                    <br />
                    Congratulations!
                    <br />
                    Your GoodData-powered app is created.
                </h1>
            </div>

            <h2>Your new GoodData-powered app is ready!</h2>
            <p>
                Now, let's take one more step and set up your home dashboard with a test headline report
                widget. This will help verify that everything is set up correctly.
            </p>

            <ol>
                <li>
                    <p>
                        In <Code>/src/constants.js</Code>, check that <Code>backend</Code> is set to your
                        GoodData Cloud or GoodData.CN endpoint. For example,{" "}
                        <Code>https://analytics.anywhere.gooddata.com</Code>.
                    </p>
                </li>
                <li>
                    <p>
                        In the root of the boilerplate, run <Code>yarn refresh-md</Code>, the terminal then
                        will guide you through how to obtain an API token if you have not set it already.
                        <br />
                        After that, the script will create a file <Code>/src/md/full.js</Code> which will
                        contain all <Code>MD</Code> objects, metrics and insights.
                        <br />
                        You will be able to utilize those generated objects. To read more about generating MD
                        objects, refer to <Code>npm run refresh-md</Code> section in <Code>README.md</Code>
                        file.
                        <br />
                        The script will also print out a workspace ID for the project used for the generating.
                        You can use this value in <Code>/src/constants.js</Code> to set the{" "}
                        <Code>workspace</Code> property.
                    </p>
                </li>
                <li>
                    In <Code>Home.js</Code>, replace <Code>Place your content here</Code> with actual code.
                    <p>
                        For example,{" "}
                        <Code>
                            {`<div style={{ height: 400, width: 600 }}>
    <InsightView insight={Md.Insights.Headline}/>
</div>`}
                        </Code>
                        . We access the <Code>Headline</Code> identifier through the generated <Code>MD</Code>
                        objects.
                        <br />
                        The main benefit of utilizing the generated MD objects is that you have the access to
                        all MD objects, metrics and insights.
                    </p>
                </li>
                <li>
                    <p>
                        In <Code>/src/routes/AppRouter.js</Code>, find the line that says{" "}
                        <Code>DELETE THIS LINE</Code>, and delete it.
                        <br />
                        This removes the redirect to this help page and sets up the default landing page
                        dashboard for your app.
                    </p>
                </li>
                <li>
                    <p>
                        Check the headline report on the <Link to="/">Home route</Link>.
                    </p>
                    <p className={styles.imageFrame}>
                        <img src={kpiUri} alt="KPI example" />
                    </p>
                    <p>
                        Most likely, the value of your headline report would be different. As long as you do
                        not see an error, you are good to go.
                    </p>
                </li>
            </ol>
            <p>Now, you are ready to play around with your app.</p>

            <h2>Things to try next</h2>

            <h3>Add a page (route)</h3>
            <ol>
                <li>
                    Duplicate a route in <Code>/src/routes</Code>.
                </li>
                <li>
                    Add the new route to <Code>/src/routes/AppRouter.js</Code>.
                </li>
            </ol>

            <h3>Add a link to the navigation / menu</h3>
            <p>
                Add a new <Code>{`<NavLink>`}</Code> component to{" "}
                <Code>/src/components/Header/Links.js</Code>.
            </p>

            <h3>Add an example from the Examples Gallery</h3>
            <p>
                Explore the <a href="https://gdui-examples.herokuapp.com/">Examples Gallery</a> and try out
                some code snippets.
            </p>

            <h3>Check out the GoodData Cloud and GoodData.CN documentation</h3>
            <p>
                Read the{" "}
                <a href="https://gooddata.com/developers/cloud-native/doc/1.7/">
                    GoodData Cloud and GoodData.CN documentation
                </a>{" "}
                to find out more about its features.
            </p>
        </Page>
    );
};

export default Welcome;
