//  Arrays in javascript

// var array = [1, 2, 3, 4, 5];
// for (var i = 0; i < array.length; i++) {
  
// }
//   console.log(array[array.length-1]);

//  for in and for of loop in es6
//  for in loop - gives index in array

// var array = [1, 2, 3, 4, 5];
// for (let elements in array) {
//     console.log(elements);
// }

// //  for of loop - gives the elements in an array

// var array = [1, 2, 3, 4, 5];
// for (let elements of array) {
//     console.log(elements);
// }

//  forEach loop

// var array = [1, 2, 3, 4, 5];
 
// array.forEach(function (element,index,array){
//     console.log(element);
// });


//  searching and filter in an array

// indexOf method
//  It returns the first (least) index of the element within the array equal to the elementor or , -1 if none is found. search the element from the 0th index number.


// var myFriends = ["vishal", "rupesh", "shriniket", "omkar", "swaraj", "rutvik"];

// console.log(myFriends.indexOf("rutvik"));
// console.log(myFriends.indexOf("rutvik",6));

// lastIndexOf() method

// var myFriends = ["vishal", "rupesh", "shriniket", "omkar", "swaraj", "rutvik"];
//  console.log(myFriends.lastIndexOf("rupesh",4));

// Includes method - it returns the boolen value true and false

// var myFriends = ["vishal", "rupesh", "shriniket", "omkar", "swaraj", "rutvik"];
//  console.log(myFriends.includes("rupesh",1));


//  filter method in an array
//  find method - it'll return only one element


// const prices =[200,300,400,500,600,700];
//  // conditon -   price > 400;

// console.log(prices.find((currVal) =>  currVal < 400));
// console.log(findEle);

//  find index

// const prices =[200,300,400,500,600,700];
//  // conditon -   price > 400;

// console.log(prices.findIndex((currVal) =>  currVal < 400));

//  filter method most important method
//  returns a new array containing all the elements of the calling array for which the provided filtering function returns true


// const prices =[200,300,400,500,600,700];
//  // conditon -   price > 400;

// const newPrice = prices.filter((element,index) => {
//     return element >= 1400;
// });

// console.log(newPrice);


//      sort and compare of an array

//        how to sort an array
//    - The sort() method sorts the elements of an array in place and returns the sorted array
//   the default sort order is ascending order, built upon converting the elements into strings,
//  then comparing their squences of UTF-16 code units values

// const months = ["jan", "feb", "dec", "sep", "oct", "april"];

// console.log(months.sort());


//     perform crud operations in an rray

//  array.prototype.push() - so push method returns the new length of an array

// const animals = ["cat", "dog", "sheep", "cow"];

// const count = animals.push("mouse");
// console.log(animals);
// console.log(count);

//  pop method -

// const animals = ["cat", "dog", "sheep", "cow"];

// animals.pop("cow");
// console.log(animals);

//      unshift method - it is adding elements in the bigging of an array and gives us the length of an array


// const animals = ["cat", "dog", "sheep", "cow"];

// const count = animals.unshift("mouse");
// console.log(animals);
// console.log(count);


//  shift method - it is removing first elements in an array and returns the length of the new array

// const animals = ["cat", "dog", "sheep", "cow"];
// console.log(animals);
// console.log(animals.shift()) ;

// console.log(animals);


//  baap of push , pop ,unshift, shift
//  splice method - it'll add and remove elements of an array
//  and it'll return how many part was deleted from an array

// const months = ["jan", "march", "april", "june", "july"];

// sol 1

// const newMonths = months.splice(months.length, 0, "dec");
// console.log(months);

// // sol3 -
// const indexOfMonth = months.indexOf("june");
// if (indexOfMonth !== -1) {
//     const newMonth = months.splice(indexOfMonth, 1, "June");
//     console.log(months);
// } else {
//      console.log("not found ");
// }

// sol4

// const months = ["jan", "march", "april", "june", "july"];

// const indexOfMonth = months.indexOf("june");
// if (indexOfMonth !== -1) {
//     const newMonth = months.splice(indexOfMonth, 1);
//     console.log(months);
// } else {
//      console.log("not found ");
// }

//  map and reduce method in an array

// syntax of map method
// let newArray = arr.map(callback(currentValue, [index[array]]){
//     thisArgs)
// });

// const array1 = [1, 4, 16, 25];
// //  number > 9

// let newArray = array1.map((currentValue,index,arr) => {
//     return currentValue >= 9;
// })

// console.log(array1);
// console.log(newArray);

// let newArr = array1.map((currElm,index,arr) => {
//     return `Index no = ${index} and the value is ${currElm}  belong to ${arr}`;
// })

// console.log(newArr);



//  it reurn new aaray without mutating the new array

//       chain method use filter and map method simulteniously

// const arr1 = [25, 36, 49, 64, 81];
// //  find the square root of the elements present in the array

// const newArr = arr1.map((currElm) => Math.sqrt(currElm));

// console.log(newArr);

//  second solution

// //  multiplaying each element by 2 and return only those elements which are greater than 10?

// let arr = [2, 3, 4, 5, 6,8];

// const newArr = arr.map((currElm) => currElm * 2).filter((currElm) => currElm > 10).reduce((accumulator, currElm) => {
//     return accumulator + currElm;
// });;

// console.log(newArr);


//  Reduce method

//  flattern an array means to convert the 3rd or 2d into a single dimentional array

//  we can use reduce method as well as concat method 

// const arr = [
//     ["zone1", "zone2"],
//     ["zone3", "zone4"],
//     ["zone5","zone6"]
// ]

// let flatArr = arr.reduce((accumulator, currElm, index, arr) => {
//     return accumulator.concat(currElm);
// });

// console.log(flatArr);









// let arr = [5, 6, 2];

// let sum = arr.reduce((accumulator, currElm) => {
//     debugger;
//     return accumulator += currElm;
// },7);

// console.log(arr);
// console.log(sum);



