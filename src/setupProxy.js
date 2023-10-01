const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // target: "http://ec2-13-124-124-221.ap-northeast-2.compute.amazonaws.com:8080/",
      target: "http://zanit.eastus.cloudapp.azure.com:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // URL ^/api -> 공백 변경
      },
    })
  );
};
