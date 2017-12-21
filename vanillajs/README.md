# UI SDK with vanilla JavaScript

A minimalistic demo of using GoodData React components using plain old
vanilla JavaScript. You can use this example to integrate the UI SDK with any toolkits such as jQuery that directly manipulate the DOM tree and expect you to provide all libraries via the `<script src>` HTML tag.

## Getting Started

### Creating the bundle

Before using the demo, you have to create the `gooddata_react_components_bundle.js`bundle and copy it next to the `index.html` file. The bundle will include the UI SDK including all its dependencies and a few utility methods described below. The size of minified bundle is approximately 1.8 MB.

The bundle can be created using the files in the `create-bundle` folder, specifically:

1. `cd create-bundle`
2. `yarn && yarn bundle` or `npm install && npm bundle`
3. `cp dist/gooddata_react_components_bundle.js ..`

### Configuring your domain

This demo assumes you have a white labelled GoodData domain with CORS set up according to [this tutorial](https://help.gooddata.com/display/bHsp5IhQjuz0e6HS0s76/How+to+Access+the+GoodData+API+Directly).

### Configuring the index.html

The JavaScript code within the `index.html` file includes hardcoded references to specific GoodData white labeled domain (whitelabeling.gooddata.com), specific GoodData projectId and specific metric identifiers - you may want to replace these to be able to run the demo in your evironment.

## Using the bundle from your code

When the bundle is included using the `<script src>` tag it exposes a global variable `GDRC` (stands for GoodData React Components) that includes a few utility methods to make to use of the UI SDK easier in a non-React environment:
- `GDRC.<component-name>` - exposes GoodData React Components (e.g. `GDRC.Kpi`, `GDRC.AfmComponents.BarChart` etc.)
- `GDRC.gooddata` - the low level GoodData JS API providing a very thin wrapper on the top of GoodData REST API - the GoodData JS documentation is available from http://sdk.gooddata.com/gooddata-js/api/modules/sdk.html (example: use `GDRC.gooddata.config.setCustomDomain('https://whitelabeling.gooddata.com')` to specify a white labeling environment to be used by the following REST API calls)
- `GDRC.ReactContentRenderer` is heavily inspired by [this blogpost](http://winterbe.com/posts/2015/08/24/integrate-reactjs-into-jquery-webapps/) by Benjamin Winterberg. It provides two utility methods:
  - `GDRC.ReactContentRenderer.render(component, props, targetNode, callback)` for rendering a React component with given props into a DOM node
  - `GDRC.ReactContentRenderer.unmount(node)` and `GDRC.ReactContentRenderer.unmountAll() - before a DOM node is removed from the DOM tree, the corresponding React components must be unmounted using to prevent memory leaks. These methods will help you with that.