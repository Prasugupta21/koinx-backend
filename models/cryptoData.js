const mongoose=require('mongoose');

const cryptoDataSchema=new mongoose.Schema({
   coinId:{type:String,required:true},
   price:{type:Number,required:true},
   marketCap: { type: Number, required: true },  // Market cap in USD
    change24h: { type: Number, required: true },  // 24-hour change in percentage
    timestamp: { type: Date, default: Date.now } 
})

const cryptoData=mongoose.model('cryptoData',cryptoDataSchema);
module.exports=cryptoData;