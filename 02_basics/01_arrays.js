const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);


// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()//remove the last value

myArr.unshift(9)//add first
myArr.shift()//removethe unshift array

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);