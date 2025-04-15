const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

// Using map to create a new array with the total of each order
// map es un método de los arrays que permite transformar cada elemento del array y devolver un nuevo array con los elementos transformados.
console.log('original array:', orders);
const totals = orders.map((order) => order.total);
console.log('new array:', totals);

const ordersWithTax1 = orders.map((order) => {
  return {
    ...order,
    tax: 0.19,
  }; 
});

console.log('new array:', ordersWithTax1);
console.log('original array after tax:', orders);

const ordersWithTax2 = orders.map((order) => {
  order.tax = 0.19;
  return order;
});

console.log('orders with tax 2:', ordersWithTax2);
console.log('original array after tax 2:', orders);


