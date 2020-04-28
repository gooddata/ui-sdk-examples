const proxy = require('http-proxy-middleware');
const url = process.env.GD_URL || 'developer.na.gooddata.com';

module.exports = function(app) {
  // when '/packages' route below is removed,
  // "Uncaught SyntaxError: Unexpected token <" error
  // prevents https://localhost:3000/account.html from loading correctly
  app.use(proxy(['/gdc', '/packages'], {
    changeOrigin: true,
    cookieDomainRewrite: "localhost",
    secure: false,
    target: `https://${url}`,
    headers: {
      host: url,
      origin: null
    }
  }));
  app.use(proxy('/*.html', {
    changeOrigin: true,
    secure: false,
    cookieDomainRewrite: 'localhost',
    target: `https://${url}`,
    headers: {
      host: url,
      origin: null
    }
  }));
};
