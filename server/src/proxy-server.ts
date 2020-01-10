const httpProxy = require("http-proxy");

const proxyServer = httpProxy.createProxyServer();

proxyServer.on("error", function(err: any, req: any, res: any) {
  console.error({ err: err });

  res.status(500).json({
    statusCode: 500,
    message: "Internal Server Error",
    errors: [err]
  });
});

module.exports = proxyServer;
