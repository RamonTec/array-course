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