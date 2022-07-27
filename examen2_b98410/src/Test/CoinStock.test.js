import { getTotalCoins } from "../Utils/CoinsStockOperations";

test("Case where the array received have the correct information so the method can calculate the total of coins.", () => {
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
  expect(getTotalCoins(changeInfo)).toStrictEqual(125);
});

test("Case where the array received have different key names so the method cant calculate the total of coins.", () => {
  const changeInfo = [
    {
      coin: 500,
      amount: 20,
    },
    {
      coin: 100,
      amount: 30,
    },
    {
      coin: 50,
      amount: 50,
    },
    {
      coin: 25,
      amount: 25,
    },
  ];
  expect(getTotalCoins(changeInfo)).toStrictEqual(NaN);
});

test("Case where the array received is empty so the method cant calculate the total of coins.", () => {
  expect(getTotalCoins([])).toStrictEqual(0);
});
