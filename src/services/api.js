const baseUrl = "https://api.coingecko.com/api/v3/coins";

export const coinList = () => {
  return `${baseUrl}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
};

export const singleCoin = (id) => {
  return `${baseUrl}/${id}`;
};

export const historicalChart = (id, days = 365) => {
  return `${baseUrl}/${id}/market_chart?vs_currency=usd&days=${days}`;
};

export const trendingCoins = () => {
  return `${baseUrl}/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
};
