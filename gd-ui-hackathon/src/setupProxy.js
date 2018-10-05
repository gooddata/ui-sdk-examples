const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy("/gdc", {
            "changeOrigin": true,
            "cookieDomainRewrite": "localhost",
            "secure": false,
            "target": "https://developer.na.gooddata.com",
            "headers": {
                "host": "developer.na.gooddata.com",
                "origin": null
            }
        }
        )
    )
    app.use(proxy("/*.html", {
        "changeOrigin": true,
        "secure": false,
        "cookieDomainRewrite": "localhost",
        "target": "https://developer.na.gooddata.com"
    }))

}