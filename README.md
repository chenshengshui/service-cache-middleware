# 服务器缓存中间件

支持静态页面的服务器缓存，就是对于同一个页面请求，在一定时间内而返回（缓存的）同样的页面内容。这个过程完全独立于不同的用户。

# 使用
使用npm下载安装

> npm install service-cache-middleware --save;

## 实例
在10s内返回相同页面内容
```javascript
var express = require('express');
var cache = require('service-cache-middleware');
var app = express();

app.get('/', cache(10), (req, res) => {
    setTimeout(() => {
      res.render('index')
    }, 5000) 
  });
```

