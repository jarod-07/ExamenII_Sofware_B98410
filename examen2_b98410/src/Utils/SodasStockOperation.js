export const updateSodaStock = (sodas, sodasInfo) => {
  sodasInfo.forEach((element, index) => {
    element.count = element.count - sodas[index];
  });
};

export const getTotalSodas = (sodasInfo) => {
  let totalSodas = 0;
  sodasInfo.forEach((element) => {
    totalSodas = totalSodas + element.count;
  });
  return totalSodas;
};

export const getSodasCount = (soda, sodasInfo) => {
  let value = 0;
  sodasInfo.forEach((element) => {
    if (Object.values(element).includes(soda)) {
      value = element.count;
    }
  });
  return value;
};