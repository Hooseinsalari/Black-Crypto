export const coinList = () => {
    return 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
}

export const singleCoin = (id) => {
    return `https://api.coingecko.com/api/v3/coins/${id}`
}

export const historicalChart = (id, days = 365) => {
    return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
}

export const trendingCoins = () => {
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
}