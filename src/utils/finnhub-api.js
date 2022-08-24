const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cbtqh1qad3i651t1f21g" // add API_KEY here
const finnhubClient = new finnhub.DefaultApi()

const getPrice = async (stock) => {
        const currentTime = await Math.round(new Date().getTime() / 1000);
        finnhubClient.stockCandles(stock, "W" , currentTime - 1000000, currentTime, (error, data, response) => {
            console.log(data.c[1]) 
    });
}

const getPrices = (stocks) => {
    stocks.map( (stock, i) => {
        setTimeout( () => {
            getPrice(stock)
          }, 1000/29 * i) // limit : 30 req/sec
        }
    )
}

getPrices(["AAPL", "NFLX", "GOOGL"])