const letters = ['a', 'b', 'c'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element.toUpperCase());
  console.log('for', element);
}

const newArray2 = letters.map((item) => item + '!');
console.log(letters)
console.log(newArray2)