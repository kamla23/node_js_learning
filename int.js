//========Higher - Order function //
// "A higher-order function is a function that takes another function as an argument or returns a function.
//  Examples include map(), filter(), and forEach() in JavaScript."

const num = [1, 2, 3, 4, 5];
const  d = (n) => n*2;
const dn = num.map(d);
console.log(num);
console.log(dn);

//without map method
// const num = [1, 2, 3, 4, 5];
// const d = (n) => n * 2;

// function higherOrder(arr, callback) {
//   let array = [];

//   for (let i = 0; i < arr.length; i++) {
//     const result = callback(arr[i]);
//     array.push(result);
//   }
//   return array;
// }
// const dn = higherOrder(num, d);
// console.log(dn);

//  even numbers print  with filter
// let num = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = (n) => n % 2 === 0;

// function higherOrderFilter(arr, callback) {
//   let array = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       array.push(arr[i]);
//     }
//   }
//   return array;
// }
// const fn = higherOrderFilter(num, even);
// console.log(fn);

// add array element with  filter
// let num = [1, 2, 3, 4, 5, 6, 7, 8];

// let total = 0;
// const addtotal = (n) => {
//   total = total + n;
// };
// function higherOrderForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }
// higherOrderForEach(num, addtotal);
// console.log(total); 



