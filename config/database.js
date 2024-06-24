const mongoose = require ('mongoose');

const db = async () =>{
    await mongoose.connect ('mongodb+srv://precticehtml:go53LCaw2eSVig12@cluster0.sczgxex.mongodb.net/');
    console.log('dataBase Connected!');
}
module.exports = db;