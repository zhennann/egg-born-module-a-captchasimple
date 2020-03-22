const version = require('./controller/version.js');
const captcha = require('./controller/captcha.js');

module.exports = app => {
  const routes = [
    // version
    { method: 'post', path: 'version/update', controller: version, middlewares: 'inner' },
    { method: 'post', path: 'version/init', controller: version, middlewares: 'inner' },
    { method: 'post', path: 'version/test', controller: version, middlewares: 'test' },
    // captcha
    { method: 'get', path: 'captcha/image', controller: captcha, middlewares: 'captcha' },
    { method: 'post', path: 'captcha/verify', controller: captcha, middlewares: 'inner' },
  ];
  return routes;
};
