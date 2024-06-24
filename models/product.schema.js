const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    decs: String,
    image: String,
});

const productDb = mongoose.model('productTbl',productSchema);
module.exports = productDb;