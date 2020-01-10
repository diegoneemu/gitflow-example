import httpProxy from "http-proxy";
import { ClientRequest, IncomingMessage, ServerResponse } from "http";

const proxyServer = httpProxy.createProxyServer();

proxyServer.on("error", function(err: Error, req: IncomingMessage, res: any) {
  console.error({ err: err });

  res.statusCode(500).json({
    statusCode: 500,
    message: "Internal Server Error",
    errors: [err]
  });
});

proxyServer.on(
  "proxyReq",
  (
    proxyReq: ClientRequest,
    req: IncomingMessage,
    res: ServerResponse,
    options: Object
  ) => {
    proxyReq.setHeader("X-Special-Proxy-Header", "myProxyServer");
  }
);

module.exports = proxyServer;
