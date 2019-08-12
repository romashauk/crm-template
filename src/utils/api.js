export const getDataForBitcoin = () => {
  return fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(res => res.json())
    .then(res => res.bpi)
    .catch(err => err);
};
