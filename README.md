
# How to manipulated arrays in javascript

A practical course how to work with arrays using javascript.




## Mutable and inmutable

We have to know something important, there are methods that modify the original data and other that not modify the original data. 
Why? there are a concept called: Memory reference in javascript.
that means, each structure is save into a reference in memory, so... if we created a clone form the original that created a new structure but with the same reference in memory. If we modify the original the clone value will change too.

Mutable is an action that modify the memory refence of an array.
Inmutable is an action that modify and value but from a difference memori reference, no change the original refenrence in memory.
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

This methos expeted two arguments:

* The function that iterate and become element of the array.
* An object who one to make a context reference.