# Crypto Price Tracker

This is a server-side application built using Node.js and MongoDB. The application periodically fetches cryptocurrency data (price, market cap, and 24-hour change) for Bitcoin, Matic, and Ethereum using the CoinGecko API. It stores the data in a MongoDB database and provides APIs to fetch stats and calculate the standard deviation of cryptocurrency prices.

## Features
- **Background Job**: Fetches the current price, market cap, and 24-hour change for Bitcoin, Matic, and Ethereum every 2 hours.
- **API Endpoints**:
  - `/stats`: Returns the latest price, market cap, and 24-hour change of a requested cryptocurrency.
  - `/deviation`: Returns the standard deviation of the price of the requested cryptocurrency for the last 100 records.

## Technologies Used
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing cryptocurrency data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Axios**: HTTP client for making API requests to CoinGecko.
- **node-cron**: For scheduling background jobs to fetch data every 2 hours.

## Installation

1. **Clone the Repository**
```bash
   git clone https://github.com/yourusername/crypto-price-tracker.git
   cd crypto-price-tracker

```

2. **Install Dependencies**
```bash
  npm install

  ```
3. **Set up Environment Variable**
Create a .env file in the root of the project and add the following:

```bash
MONGO_URI=your_mongodb_connection_string
COINGECKO_API=your_coingecko_api_key

```
4.**Run the Application**
```bash
npm start

```
5.**Start the Background Job** 
The background job to fetch cryptocurrency data will automatically run once every 2 hours.

## API Endpoints

1. **/stats**
   - **Method**: GET
   - **Query Parameters**:
     - `coin`: bitcoin, ethereum, or matic-network
   - **Response**:
     ```json
     {
       "price": 40000,
       "marketCap": 800000000,
       "24hChange": 3.4
     }
     ```

2. **/deviation**
   - **Method**: GET
   - **Query Parameters**:
     - `coin`: bitcoin, ethereum, or matic-network
   - **Response**:
     ```json
     {
       "standardDeviation": 4082.48
     }
     ```

