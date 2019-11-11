const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const carSchema = new Schema({
    any : Schema.Types.Mixed
})

carSchema.set('collection','CarInfo');


module.exports = Car = mongoose.model('CarInfo',carSchema);