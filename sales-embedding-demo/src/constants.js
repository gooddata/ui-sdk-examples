// The name of the application. It is rendered in a header of the web application.

// EXAMPLE: "ShopBoard App"
export const appName = "sales-embedding-demo";

// The URL of analytical GoodData backend with workspaces, insights, metrics, attributes, datasets, and users
// that will be available to the application.

// EXAMPLE: "https://leilani.internal.gooddata.com/"
export const backend = "https://e2e-demo28.na.gooddata.com";

// The ID of workspace that is selected by default in the optional workspace picker component (located in the web
// application header). It is also a default setting for script that refreshes LDM data used by the application.
// LDM script shows list of available workspaces on backend in the case when the value is not set to any ID.

// EXAMPLE: Workspace ID for the customer you are doing the workshop with
// https://leilani.internal.gooddata.com/dashboards/#/project/no6focgukfj3ohfds9dexvkqazugwo
// --> "no6focgukfj3ohfds9dexvkqazugwo"
export const workspace = "gf5ar7e02sth33atdbzpabhvbddaqva3";

// RegExp used by optional workspace picker component (located in the web application header) to filter out
// workspaces that should not be rendered to the application user. Only the workspaces with title that match
// the regular expression will be rendered. Set to 'undefined' to show all the available workspaces.
// Example: /test/ or /^GoodData/
export const workspaceFilter = undefined;
