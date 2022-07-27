export const updateCoinsStock = (coins, changeInfo) => {
  changeInfo.forEach((element, index) => {
    element.count = element.count + coins[index];
  });
};

export const revertChangeCoinStock = (changeSummary, changeInfo) => {
  changeSummary.forEach((element, index) => {
    changeInfo[index].count = element.Count;
  });
};

export const getTotalCoins = (changeInfo) => {
  let totalCoins = 0;
  changeInfo.forEach((element) => {
    totalCoins = totalCoins + element.count;
  });
  return totalCoins;
};
