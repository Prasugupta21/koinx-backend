const cryptoCurrency = require("../models/cryptoCurrency");
const axios = require("axios");
const fetchAndStoreCryptoJob = async (req,res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: "bitcoin,ethereum,matic-network",
          vs_currencies: "usd",

          include_market_cap: true,
          include_24hr_change: true,
          x_cg_api_key: process.env.COINGECKO_API,
        },
      }
    );
   
    
    const data=response.data;
  
    const cryptos=[
      {
        coinId:'bitcoin',
        price:data.bitcoin.usd,
        marketCap:data.bitcoin.usd_market_cap,
        change24h:data.bitcoin.usd_24h_change
      },
      {
        coinId: 'ethereum',
        price: data.ethereum.usd,
        marketCap: data.ethereum.usd_market_cap,
        change24h: data.ethereum.usd_24h_change
    },
    {
      coinId: 'matic-network',
      price: data['matic-network'].usd,
      marketCap: data['matic-network'].usd_market_cap,
      change24h: data['matic-network'].usd_24h_change
  }
]
  await cryptoCurrency.insertMany(cryptos); 
    return res.json(data);
  } catch (e) {
    console.error("Error", e);
    return res.status(500).json({message:'Server Error for storing Crypto !'})

  }
};
module.exports = fetchAndStoreCryptoJob;
