const getPrice = async (symbol) => {
    try {
        // await setTimeout(() => {     
        // }, 100);
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_KEY}`)
        const data = await response.json()
        console.log(data);
        console.log(data["Time Series (5min)"][Object.keys(data["Time Series (5min)"])[0]]["1. open"]);
        return data["Time Series (5min)"][Object.keys(data["Time Series (5min)"])[0]]["1. open"]
    } catch (error) {
        console.log(error);
        return 0
    }
}

export const getPrices =  async (symbols) => {
    const result = []
    for (let i=0; i<symbols.length; i++) {
        setTimeout( async () => {
        }, 400);
        const stock = await getPrice(symbols[i])
        result.push(stock)
    } 
    return result
}