const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://ec2-13-125-163-76.ap-northeast-2.compute.amazonaws.com:8080/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // URL ^/api -> 공백 변경
      },
    })
  );
};
