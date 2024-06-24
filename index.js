 const express = require('express');
 const mongoose = require('mongoose');
// const productRouter = require('./routers/product.router');
const p_router = require('./routers/product.router');
const db = require('./config/Database');
 const app = express();
// app.use(router)
// // Middleware to parse JSON bodies
app.use(express.json());

// // Use the product router
 app.use('/product', p_router);

 app.listen(8081,(err)=>{
   if(!err){
    db();
    console.log('server start http://localhost:8081');
   }
 })

