const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const UploadingSchema = new Schema({
 
 username:{
    type : String,
    required : true
},
 mobile:{
     type : Number,
     required : true
 },
 city:{
     type : String,
     required : true
 },
 pin:{
     type : Number,
     required: true
 },
 car:{
     type  : String,
     required:true
 },
 modelyear:{
    type  : Number,
    required:true
 },
 kms:{
  type:Number,
  required: true
 },
 insurance:{
     type:String,
     required:true
 },
 owners:{
     type : Number,
     required: true
 },
})

module.exports = Upload = mongoose.model('UserAndCarInfos',UploadingSchema);