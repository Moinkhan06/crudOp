
const product = require ('../models/product.schema')

const productPage = ((req,res)=> {
    return res.render ('product');
})

module.exports = {productPage}