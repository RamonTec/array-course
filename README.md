
# How to manipulated arrays in javascript

A practical course that explain how to work with arrays using javascript.




## Mutable and inmutable

We have to know something important, there are methods that modify the original data and other that not modify the original data. 
Why? there are a concept called: Memory reference in javascript.
that means, each structure is save into a reference in memory. 

So... if we created a clone form the original this created a new structure but with the same reference in memory. If we modify the original the clone value will change too.

Mutable is an action that modify the memory refence of an array.
Inmutable is an action that modify a value but from a difference memory reference, no change the original reference in memory.
## For-each and for
Both work for performing interactions on array elements, but what are the differences between them?

An example using the FOR control structure:
```javascript
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('for', element);
}
```
An example with for each:
```javascript
letters.forEach((item) => console.log('for each', item));

```
The main difference is that we do the same thing, but with fewer lines of code. It's cleaner, more efficient, and easier to maintain.

Remenber mutable and inmutable concept, for this case, the  method for each just interated over the original data.
## Map
The method map consist in creating a new array from the elements of the original array by a callback function.

Transformation implits change any element into other, no matter if a number, string, object or other array.

This method wait two arguments:

* The function that iterate and become element of the array.
* An object who one to make a context reference.

Now, let's created an example with map, because there are few examples that i wanto to show you.

An example with for:
```javascript
const letters = ['a', 'b', 'c'];

const newArray = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element.toUpperCase());
  console.log('for', element);
}
```
An example with map:
```javascript
const newArray2 = letters.map((item) => item + '!');
```

What happened here? Well map function return a new array from the original array, we can say is an inmutable method that not modify the original array. Let's see another example:

```javascript
export const multiplyValues = (array) {
    return array.map((item) => item * 2)
}

const array = [1,2,3,5,-10];
const responseMultiply = multiplyValues();
console.log('multiply result:', responseMultiply);
// expected response: [2,4,6,10,-20]
```

Now, let's see an curious case with objects and arrays.

```javascript
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

console.log('original array:', orders);
const totals = orders.map((order) => order.total);
console.log('new array:', totals);
```
For example, here, we created a new array from the original array, maybe we need to save an array with the totals to make calculates, maybe count the total, maybe make some grafics, there are many options depending of the context and the business logic.

```javascript
const ordersWithTax1 = orders.map((order) => {
  return {
    ...order,
    tax: 0.19,
  }; 
});

console.log('new array:', ordersWithTax1);
console.log('original array after tax:', orders);
```

But, what happens if we want to create a new array but without modifying the original array? we just need to write a return inside of the map function with a spread operator and the new property that we want to add into de objects.

```javascript
const ordersWithTax2 = orders.map((order) => {
  order.tax = 0.19;
  return order;
});

console.log('orders with tax 2:', ordersWithTax2);
console.log('original array after tax 2:', orders);
```

Now, it's as if we had the same code with minor differences and the same result.

The differences radicated between the objects and arrays. For each object inside an array, each element has it's own memory reference... so if we modify the elements of an array like this:
order.tax = 0.19 we will modoify the original data and not create a new array. Well, that depends, no? If we need to modifty the original data or not.

Example with map and spread operators:
```javascript
export function addNewAttr(array) {
  return array.map((item) => {
    return {
      ...item,
      tax: Math.trunc( item.price * .19 )
    }
  })
}

const orders = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

const ordersWithTax = addNewAttr(orders);
console.log('-- orders with tax:', ordersWithTax);
```
## Filter
This functions is inmutable, not modify the original array.
The function filter iterate over an array and return a new array with elements that match with the condition maybe even return and empty array because no element match with the condition, maybe return some elements and even return all elements into an new array.

```javascript
const words = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',]

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length > 6) {
    newArray.push(element);
  }
}

console.log('new array:', newArray);

const newArray2 = words.filter((word) => word.length > 6);
console.log('new array 2:', newArray2);
```
As we can see into the example, we have an array of strings and we are filtering the array looking for words where their lenght are over 6 if the condition completed we pushed the element into a new array.
Now we have an other example, with the same condition but with fewer lines of code.
