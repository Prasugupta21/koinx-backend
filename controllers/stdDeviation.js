
const cryptoCurrency=require('../models/cryptoCurrency');


const calculateDeviation=(prices)=>{
    var n=prices.length;
    var mean=prices.reduce((acc,price)=>acc+price,0)/n;
    var variance=prices.reduce((acc,price)=>acc+(Math.pow((price-mean),2)),0);

    return Math.sqrt(variance);
}
const getStdDeviation=async(req,res)=>{
    try {
        const {coin}=req.query;
        if(!['bitcoin','ethereum','matic-network'].includes(coin))return res.status(400).json({message:'Invalid coin provided'});

        const requestedCoin=await cryptoCurrency.find({coinId:coin}).sort({_id:-1}).limit(100);
        if(requestedCoin===null)return res.status(404).json({ message: 'No data found for the requested cryptocurrency' });

        const prices=requestedCoin.map(e=>e.price);
        const deviation=calculateDeviation(prices);
        
        return res.status(200).json({deviation});
        
    
    } catch (e) {
        console.error('Error', e);
        return res.status(500).json({message:'Server Error in finding  deviation of requested Crypto !'})
    }
    
}
module.exports={getStdDeviation};