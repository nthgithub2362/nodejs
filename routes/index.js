const productRouter = require("./product");
const homeRouter = require("./home");

const routes = (app) => {
  app.use(homeRouter);
  app.use(productRouter);
};

module.exports = routes;
