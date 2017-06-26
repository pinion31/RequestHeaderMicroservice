var http = require('http');
var url = require('url');
var fs = require('fs');
var useragent = require('useragent');
var requestIp = require('request-ip');

http.createServer(function(req,res) {

  var agent = useragent.parse(req.headers['user-agent']);
  var userLang = req.headers["accept-language"].split(',')[0];

  var userInfo = {ip: requestIp.getClientIp(req), language: userLang.slice(0, userLang.length),
  software: agent.os.toString()};

  res.end(JSON.stringify(userInfo));
}).listen(3000);