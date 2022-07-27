import { getSodasCount, getTotalSodas } from "../Utils/SodasStockOperation";

test("Case where the array received is correct and the name of the soda received is in the array.", () => {
  const sodasInfo = 
[
  {
    soda: 'Coca Cola',
    count: 10,
    cost: 500
  },
  {
    soda: 'Pepsi',
    count: 8,
    cost: 600
  },
  {
    soda: 'Fanta',
    count: 10,
    cost: 550
  },
  {
    soda: 'Sprite',
    count: 15,
    cost: 725
  },
]
  expect(getSodasCount('Coca Cola', sodasInfo)).toStrictEqual(10);
});

test("Case where the array received is correct and the name of the soda received is in the array but one key name is different.", () => {
  const sodasInfo = 
[
  {
    soda: 'Coca Cola',
    amount: 10,
    cost: 500
  },
  {
    soda: 'Pepsi',
    count: 8,
    cost: 600
  },
  {
    soda: 'Fanta',
    count: 10,
    cost: 550
  },
  {
    soda: 'Sprite',
    count: 15,
    cost: 725
  },
]
  expect(getSodasCount('Coca Cola', sodasInfo)).toStrictEqual(undefined);
});

test("Case where the array received is correct but the name of the soda received isnt in the array.", () => {
  const sodasInfo = 
[
  {
    soda: 'Coca Cola',
    count: 10,
    cost: 500
  },
  {
    soda: 'Pepsi',
    count: 8,
    cost: 600
  },
  {
    soda: 'Fanta',
    count: 10,
    cost: 550
  },
  {
    soda: 'Sprite',
    count: 15,
    cost: 725
  },
]
  expect(getSodasCount('Te frio', sodasInfo)).toStrictEqual(0);
});

test("Case where the array received is empty so the method cant calculate the amount of sodas of an specific soda.", () => {
  expect(getSodasCount('Coca Cola',[])).toStrictEqual(0);
});

// Method that calculate the total of sodas

test("Case where the array have the coorect information so the methos can calculate the total of sodas.", () => {
  const sodasInfo = 
[
  {
    soda: 'Coca Cola',
    count: 10,
    cost: 500
  },
  {
    soda: 'Pepsi',
    count: 8,
    cost: 600
  },
  {
    soda: 'Fanta',
    count: 10,
    cost: 550
  },
  {
    soda: 'Sprite',
    count: 15,
    cost: 725
  },
]
  expect(getTotalSodas(sodasInfo)).toStrictEqual(43);
});

test("Case where the array have a distinct key name so the methos cant calculate the total of sodas.", () => {
  const sodasInfo = 
[
  {
    soda: 'Coca Cola',
    amount: 10,
    cost: 500
  },
  {
    soda: 'Pepsi',
    amount: 8,
    cost: 600
  },
  {
    soda: 'Fanta',
    amount: 10,
    cost: 550
  },
  {
    soda: 'Sprite',
    amount: 15,
    cost: 725
  },
]
  expect(getTotalSodas(sodasInfo)).toStrictEqual(NaN);
});

test("Case where the array received is empty and the method cant calculate de total of sodas.", () => {
  expect(getTotalSodas([])).toStrictEqual(0);
});