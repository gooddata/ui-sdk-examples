/************************************************************************/
/**************** Sales Embedding Demo Configuration File ***************/
/************************************************************************/
/*
/* Note: Common mistake is to forget the comma at the end of each line.
/*       Except for lines that are commented out (they start with // ).
/*
/* Note: Values must be inside of quotes.
/*       It doesn't matter if single ' or double ", but they must match.
/*
/************************************************************************/

export default {
    // EXAMPLE: 'ShopBoard App'
    appName: "sales-embedding-demo",

    // EXAMPLE: 'https://leilani.internal.gooddata.com'
    domain: "https://e2e-demo28.na.gooddata.com",

    // Workspace ID for the customer you are doing the workshop with
    // EXAMPLE: If your URL says https://leilani.internal.gooddata.com/dashboards/#/project/no6focgukfj3ohfds9dexvkqazugwo
    //   then you should change this to 'no6focgukfj3ohfds9dexvkqazugwo'
    workspace: "gf5ar7e02sth33atdbzpabhvbddaqva3",

    // URL of the embedded Dashboard
    dashboardUrl:
        "https://e2e-demo28.na.gooddata.com/dashboards/embedded/#/project/gf5ar7e02sth33atdbzpabhvbddaqva3/dashboard/aadPCE04gggj?showNavigation=false",

    // Identifier of the insight
    insightIdentifier: "abg8hF92fKWg",

    // TODO
    insightMeasure: "aaWP28vUgl64",

    // TODO
    insightViewByAttribute: "label.product.productbrand",

    // TODO
    insightStackByAttribute: "label.product.productcategory",

    // Uncomment line below to change the header background color
    // headerBackgroundColor: "#303442",

    // Uncomment line below to change the color of the header bottom border
    // headerBorderBottomColor: "#FFFFFF",

    // Uncomment line below to change the navigation background color
    // leftPaneBackgroundColor: "#303442",

    // uncomment line below to change the navigation text color
    // linkColor: "#ffffff",
};
