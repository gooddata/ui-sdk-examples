// 1. get and build gooddata-react-components
// 2. copy me to gooddata-react-components/dist
// 3. copy gooddata_react_components_webpack.conf.js to gooddata-react-components
// 4. cd gooddata-react-components
// 5. run webpack.js --config gooddata_react_components_webpack
// 6. copy gooddata_react_components_bundle.js to your non-React project

"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
exports.gooddata = require("gooddata");

var GDRC  = require("./index.js"); // GoodData React Components

// buffer of DOM elements rendering React components
var nodes = [];

// utility to mount React nodes to target DOM elements
exports.ReactContentRenderer = {
  unmountAll: function() {
    if (nodes.length === 0) {
      return;
    }
    nodes.forEach(node => React.unmountComponentAtNode(node));
    nodes = [];
  },
  /**
   * Creates, renders and returns a React element created
   * from component class using given props and rendered 
   * into the targetNode.
   */
  render: function(component, props, targetNode, callback) {
    var reactElement = React.createElement(component, props, null);
    ReactDOM.render(reactElement, targetNode, callback);
    nodes.push(targetNode);
    return reactElement;
  }
};

// re-export GoodData React components
for (var prop in GDRC) {
  if (GDRC.hasOwnProperty(prop)) {
    exports[prop] = GDRC[prop];
  }
}