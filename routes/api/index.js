const route = require('express').Router();

route.use("/product", require('./product').route);
route.use("/users", require('./users').route);

exports = module.exports = {
    route,
}