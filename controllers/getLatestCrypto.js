const cryptoCurrency=require('../models/cryptoCurrency');

const getLatestCrypto=async(req,res)=>{
try {
    const {coin}=req.query;
    if(!['bitcoin','ethereum','matic-network'].includes(coin))return res.status(400).json({message:'Invalid coin provided'});

    const requestedCoin=await cryptoCurrency.findOne({coinId:coin}).sort({_id:-1});
    if(requestedCoin===null)return res.status(404).json({ message: 'No data found for the requested cryptocurrency' });

    return res.status(200).json({
        price:requestedCoin.price,
        marketCap:requestedCoin.marketCap,
        "24hChange":requestedCoin.change24h
    })
} catch (e) {
    console.error('Error', e);
    return res.status(500).json({message:'Server Error for getting latest Crypto !'})
}

}
module.exports={getLatestCrypto};