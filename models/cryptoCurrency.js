const mongoose=require('mongoose');

const cryptoCurrencySchema =new mongoose.Schema({
   coinId:{type:String,required:true},
   price:{type:Number,required:true},
   marketCap: { type: Number, required: true },  // Market cap in USD
    change24h: { type: Number, required: true },  // 24-hour change in percentage
    timestamp: { type: Date, default: Date.now } 
})

const cryptoCurrency=mongoose.model('cryptoData',cryptoCurrencySchema);
module.exports=cryptoCurrency;