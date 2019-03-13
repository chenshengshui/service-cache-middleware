'use strict';

var memorycache = require('memory-cache');

// 服务端缓存中间件实现
module.exports = (duration) => {
  return  (req, res, next) => {
    var key = '__express__' + req.originalUrl || req.url;
    var cachedBody = memorycache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      // 对res.send方法进行拦截
      res.sendResponse = res.send;
      res.send = function (body) {
        memorycache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};