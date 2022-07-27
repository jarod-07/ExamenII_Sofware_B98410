import {
  changeSummaryCalculation,
  calculateCoinAmount,
} from "../Utils/CalculateChange";

// Method that calculate the summary of the change to give to the user.
const changeInfo = [
  {
    coin: 500,
    count: 20,
  },
  {
    coin: 100,
    count: 30,
  },
  {
    coin: 50,
    count: 50,
  },
  {
    coin: 25,
    count: 25,
  },
];
//PASS
test("Case where the amount of coins needed to give change is correctly calculated.", () => {
  expect(changeSummaryCalculation(1000, changeInfo)).toStrictEqual([
    { coin: 500, count: 2 },
  ]);
});

//PASS
test("Case where there are not enough coins to give the change.", () => {
  expect(changeSummaryCalculation(30000, changeInfo)).toStrictEqual([
    { coin: 222, count: 0 },
  ]);
});

//PASS
test("Case where there is no need to give change back.", () => {
  expect(changeSummaryCalculation(0, changeInfo)).toStrictEqual([
    { coin: 111, count: 0 },
  ]);
});

//FAIL
test("Case where a negative number is entered in the method.", () => {
  expect(changeSummaryCalculation(-1, changeInfo)).toStrictEqual([]);
});

// Method that calculate the amount of an specific coin.

// PASS
test("Case where the amount of a specific coin is calculated to give the change and there are enoguh coins.", () => {
  const changeInfo = [{ coin: 100, count: 30}];
  const coins = [500, 100, 50, 25];
  expect(calculateCoinAmount(500, coins[1], changeInfo[0])).toStrictEqual([ 5, 0 ]);
});

// PASS
test("Case where the amount of a specific coin is calculated to give the change but there arent enough coins.", () => {
  const changeInfo = [{ coin: 25, count: 25}];
  const coins = [500, 100, 50, 25];
  expect(calculateCoinAmount(1000, coins[3], changeInfo[0])).toStrictEqual([ 375, 25]);
});

// FAIL
test("Case where the change is 0 so the amount of coins dont need to be calculated.", () => {
  const changeInfo = [{ coin: 100, count: 30}];
  const coins = [500, 100, 50, 25];
  expect(calculateCoinAmount(0, coins[3], changeInfo[0])).toStrictEqual([0, 0]);
});

// FAIL
test("Case where the change is a negative number so the method cant calculte the amount of a coin.", () => {
  const changeInfo = [{ coin: 50, count: 20}];
  const coins = [500, 100, 50, 25];
  expect(calculateCoinAmount(-1, coins[2], changeInfo[0])).toStrictEqual([ 0, -1 ]);
});
