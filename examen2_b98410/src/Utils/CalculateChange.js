import { changeErrorAlert } from "./ErrorAlert";
import { revertChangeCoinStock } from "./CoinsStockOperations";

export const calculateCoinAmount = (changeLeft, coin, changeInfo) => {
  let coinCount = 0;
  while (changeLeft >= coin) {
    if(changeInfo.count > 0){
      coinCount += 1;
      changeLeft = changeLeft - coin;
    }else{
      return [changeLeft, coinCount];
    }
    changeInfo.count = changeInfo.count - 1;
  }
  return [coinCount, changeLeft];
};

export const changeSummaryCalculation = (change, changeInfo) => {
  if(change === 0){
    // 111 stands for no need no give back change.
    return [{ coin: 111, count: 0 }];
  }else{
    let changeSummary = [];
    const coins = [500, 100, 50, 25];
    let pivot = 0;
    while (pivot < 4 && change > 0) {
      const summary = calculateCoinAmount(change, coins[pivot], changeInfo[pivot]);
      if (summary[0] !== 0) {
        changeSummary.push({ coin: coins[pivot], count: summary[0] });
      }
      change = summary[1];
      if(pivot === 3 && change !== 0){
        revertChangeCoinStock(changeSummary,changeInfo);
        changeErrorAlert();
        // 222 stands for not enough coins to give the change.
        return [{ coin: 222, count: 0 }];
      }
      pivot++;
    }
    return changeSummary;
  }
};
