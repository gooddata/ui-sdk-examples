# GoodData.UI Boilerplate App for Tiger

This app extends steps from https://docs-dev.anywhere.gooddata.com/getting-started/advanced-topics/create-ui-sdk-app/:

* It initializes create-react-app
* It configures GoodData proxy
* It adds GoodData.UI dependencies

This app also shows:

* Use of `<AttributeFilter>` component
* Use of `<Kpi>` component

And finally this app demonstrates 3 approaches how to render visualizations:

* By referencing `<InsightView>` created in Analytical Designer
* By specifying buckets (measures, viewBy, stackBy) with `<ColumnChart>` component
* By creating custom column chart using `<Execute>` component and [Highcharts](https://www.highcharts.com/) library

## How to run locally

First, you need to complete the tutorial at https://docs-dev.anywhere.gooddata.com/getting-started/. Only when Tiger is up and running on your localhost, then continue with:

* `git clone --depth 1 https://github.com/gooddata/ui-sdk-examples.git`
* `cd ui-sdk-examples/gd-ui-boilerplate-tiger/`
* `yarn install`
* `yarn start`

## Screnshots

![homepage](https://raw.githubusercontent.com/gooddata/ui-sdk-examples/master/gd-ui-boilerplate-tiger/public/home.png "Homepage")

## Troubleshooting

When trying to `yarn refresh-ldm`, it is best to first run `export TIGER_API_TOKEN=<look-into-docs-how-to-find-token>`.

---

This project was bootstrapped with [GoodData.UI Accelerator Toolkit](https://sdk.gooddata.com/gooddata-ui/docs/ht_create_your_first_visualization_toolkit.html).
