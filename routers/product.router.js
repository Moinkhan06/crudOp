const {Router} = require('express');
const {productPage} = require ('../controller/product')
const p_router = Router();

p_router.get ('/product', productPage);

module.exports = p_router;