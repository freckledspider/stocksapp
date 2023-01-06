export const stocksLoader = async ({ params }) => {
    const symbol = params.symbol;
    const apiKey = "bdc1262f2604a895a02b36b38922e106";
    return (await fetch(
        `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
    )).json();
};