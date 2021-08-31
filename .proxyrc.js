module.exports = function (app) {
  app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Expose-Headers',
      'Content-Security-Policy, Location'
    );
    res.setHeader(
      'Access-Control-Allow-Header',
      'x-requested-with,Content-Type,origin,authorization,accept,client-sent-security-token'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, HEAD, PUT, PATCH, POST, DELETE'
    );
    // res.setHeader(
    //   'Access-Control-Allow-Headers',
    //   'Origin, X-Requested-With, Content-Type, Accept, Content-Type'
    // );
    res.removeHeader('Cross-Origin-Resource-Policy');
    res.removeHeader('Cross-Origin-Embedder-Policy');
    // res.removeHeader('Access-Control-Allow-Origin');
    // res.removeHeader('strict-origin-when-cross-origin');
    res.removeHeader('Cross-Origin-Opener-Policy');
    next();
  });
};
