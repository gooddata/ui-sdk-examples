# Configuration

The purpose of running this app on your localhost is that you can alter it to your needs any time you wish. Some places in the code have been designed to make it as easy as possible.

> Please download [Visual Studio Code](https://code.visualstudio.com/) for easy files editing.

(Jump back to [INSTRUCTIONS](INSTRUCTIONS.md) or [README](README.md).)

## List of Features

* [Change the domain and workspace](#change-the-domain-and-workspace)
* [Change the name of the application](#change-the-name-of-the-application)
* [Change the URL of the embedded dashboard](#change-the-url-of-the-embedded-dashboard)
* [Change the logo](#change-the-logo)
* [Show/hide the embedded dashboard navigation](#showhide-the-embedded-dashboard-navigation)
* [Show/hide the embedded dashboard top bar](#showhide-the-embedded-dashboard-top-bar)
* [Show/hide the embedded dashboard filter bar](#showhide-the-embedded-dashboard-filter-bar)
* [Show/hide the embedded dashboard widgets catalogue](#showhide-the-embedded-dashboard-widgets-catalogue)
* [Integrate an individual insight](#integrate-an-individual-insight)
* [Integrate a dashboard](#integrate-a-dashboard)

## Opening sales-embedding-demo in Visual Studio Code

* Open VSCode (if you don't have VSCode, get it at https://code.visualstudio.com/)
* At the top of your screen, click View --> Explorer
* Click `Open Folder` and select `sales-embedding-demo` folder to be found in `~/Documents/my-projects/ui-sdk-examples/`
* You can now open files by clicking Go --> Go to File…

<img src="public/configuration/01-vscode-01.png" width=800>
<img src="public/configuration/01-vscode-02.png" width=800>
<img src="public/configuration/01-vscode-03.png" width=800>
<img src="public/configuration/01-vscode-04.png" width=800>

---

### Change the Domain and Workspace

* Kill the app (hit `CTRL + C` in the Terminal)
* [Open sales-embedding-demo in VSCode](#opening-sales-embedding-demo-in-visual-studio-code)
* While in VSCode, click Go --> Go to File… and type in `constants` to open `src/constants.js` file
* Change the value of `backend` to your domain (e.g. https://leilani.na.gooddata.com/)
* Change the value of `workspace` to the workspace you'll be working with
* Save the changes in `src/constants.js` file
* Restart the app (run `yarn start` again in the Terminal)
* You'll now need to `Log out` from the application, and then `Log in` again

---

### Change the Name of the Application

* [Open sales-embedding-demo in VSCode](#opening-sales-embedding-demo-in-visual-studio-code)
* While in VSCode, click Go --> Go to File… and type in `constants` to open `src/constants.js` file
* Change the value of `appName` to from `sales-embedding-demo` to `ShopBoard Demo`
* Save the changes in `src/constants.js` file
* Wait till your app refreshes in your browser (or refresh manually)

---

### Change the URL of the Embedded Dashboard

* [Open sales-embedding-demo in VSCode](#opening-sales-embedding-demo-in-visual-studio-code)
* Open `src/routes/Home.js` in VSCode
* Look for the `iframe` tag
* Change the value of `src` attribute

`src` attribute of the `iframe` should contain either absolute or relative URL of the dashboard, where there is word `/embedded/` added after `/dashboards/` and before `/#/`. See the example:

Standard dashboard URL: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}`

Dashboard URL for emedding: `https://my-domain.com/dashboards/embedded/#/project/{projId}/dashboard/{dashId}`

See the [documentation](https://help.gooddata.com/doc/enterprise/en/expand-your-gooddata-platform/gooddata-integration-into-your-application/embed-gooddata-elements-into-your-applications/embed-a-kpi-dashboard#EmbedaKPIDashboard-Advancedconfigurationoptions) for more.

---

### Change the Logo

TODO

---

### Show/hide the Embedded Dashboard Navigation

* [Open sales-embedding-demo in VSCode](#opening-sales-embedding-demo-in-visual-studio-code)
* Open `src/routes/Home.js` in VSCode
* Look for the `iframe` tag
* Append `?showNavigation=true` (or `false`) to the value of `src` attribute

Standard dashboard URL: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}`

Dashboard URL with navigation: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}?showNavigation=true`

See the [documentation](https://help.gooddata.com/doc/enterprise/en/expand-your-gooddata-platform/gooddata-integration-into-your-application/embed-gooddata-elements-into-your-applications/embed-a-kpi-dashboard#EmbedaKPIDashboard-Advancedconfigurationoptions) for more.

---

### Show/hide the Embedded Dashboard Top Bar

* [Open sales-embedding-demo in VSCode](#opening-sales-embedding-demo-in-visual-studio-code)
* Open `src/routes/Home.js` in VSCode
* Look for the `iframe` tag
* Append `?hideControl=[topBar]` to the value of `src` attribute

Standard dashboard URL: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}`

Dashboard URL without top bar: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}?hideControl=[topBar]`

Dashboard URL with navigation without top bar: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}?showNavigation=true&hideControl=[topBar]`

See the [documentation](https://help.gooddata.com/doc/enterprise/en/expand-your-gooddata-platform/gooddata-integration-into-your-application/embed-gooddata-elements-into-your-applications/embed-a-kpi-dashboard#EmbedaKPIDashboard-Advancedconfigurationoptions) for more.

---

### Show/hide the Embedded Dashboard Filter Bar

* [Open sales-embedding-demo in VSCode](#opening-sales-embedding-demo-in-visual-studio-code)
* Open `src/routes/Home.js` in VSCode
* Look for the `iframe` tag
* Append `?hideControl=[filterBar]` to the value of `src` attribute

Standard dashboard URL: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}`

Dashboard URL without filter bar: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}?hideControl=[filterBar]`

Dashboard URL with navigation without filter bar: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}?showNavigation=true&hideControl=[filterBar]`

Dashboard URL with navigation without filter bar and top bar: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}?showNavigation=true&hideControl=[topBar,filterBar]`

See the [documentation](https://help.gooddata.com/doc/enterprise/en/expand-your-gooddata-platform/gooddata-integration-into-your-application/embed-gooddata-elements-into-your-applications/embed-a-kpi-dashboard#EmbedaKPIDashboard-Advancedconfigurationoptions) for more.

---

### Show/hide the Embedded Dashboard Widgets Catalogue

* [Open sales-embedding-demo in VSCode](#opening-sales-embedding-demo-in-visual-studio-code)
* Open `src/routes/Home.js` in VSCode
* Look for the `iframe` tag
* Append `?hideControl=[widgetsCatalogue]` to the value of `src` attribute

Standard dashboard URL: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}`

Dashboard URL without widgets catalogue: `https://my-domain.com/dashboards/#/project/{projId}/dashboard/{dashId}?hideControl=[widgetsCatalogue]`

See the [documentation](https://help.gooddata.com/doc/enterprise/en/expand-your-gooddata-platform/gooddata-integration-into-your-application/embed-gooddata-elements-into-your-applications/embed-a-kpi-dashboard#EmbedaKPIDashboard-Advancedconfigurationoptions) for more.

---

### Integrate an Individual Insight

TODO
