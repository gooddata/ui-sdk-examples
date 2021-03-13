// module.exports is important for setupProxy.js
module.exports = {
    appName: "anywhere-demo",
    backend: "http://localhost:3000",
    workspace: "demo",
    workspaceFilter: null, // regexp to filter workspaces in WorkspacePicker. Example: /test/ or /^GoodData/,
};
