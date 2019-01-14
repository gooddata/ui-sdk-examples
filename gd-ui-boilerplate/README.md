# GoodData.UI Boilerplate App

This app follows steps from https://sdk.gooddata.com/gooddata-ui/docs/ht_create_your_first_visualization.html:

* It initializes create-react-app
* It configures GoodData proxy
* It adds [@gooddata/react-components](https://www.npmjs.com/package/@gooddata/react-components) package

This app also shows:

* Use of `<AttributeFilter>` component
* Use of `<Kpi>` component

And finally this app demonstrates 3 approaches how to render visualizations:

* By referencing `<Visualization>` created in Analytical Designer
* By specifying buckets (measures, viewBy, stackBy) with `<ColumnChart>` component
* By creating custom column chart using `<Execute>` component and [Highcharts](https://www.highcharts.com/) library

## Backend/proxy info

This app is configured to run against https://developer.na.gooddata.com/. For access, you can register at https://gooddata-examples.herokuapp.com/.

## Compatibility

An ES6 [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) was added to support Internet Explorer.

## Screnshot

![homepage](https://raw.githubusercontent.com/gooddata/ui-sdk-examples/master/gd-ui-boilerplate/public/screen.png "Homepage")

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
