const totals = [1,2,3,4,5,6,1];

const result = totals.reduce((acc, item) => {
  if (!acc[item]) {
    acc[item] = 1;
  } else {
    acc[item] = acc[item] + 1;
  }
  return acc;
},{});
console.log('result:', result);
