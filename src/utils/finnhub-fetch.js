const getPrice = async (symbol) => {
    try {
        const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_KEY}`);
        const data = await response.json();
        const result = data.c;
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return 0;
    };
};

export const getPrices =  async (symbols) => {
    const result = [];
    for (let i=0; i<symbols.length; i++) {
        setTimeout( async () => {
        }, 200);
        const stock = await getPrice(symbols[i]);
        result.push(stock);
    };
    return result;
};