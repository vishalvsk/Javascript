//    --  DOM -  Document object model  --

//  timing based events in javascript

/* 1. setTimeOut
   2. clearTimeOut
   3. setInterval
   4. clearInterval
//    */
// //    objects in javascript

// let myData = {
//    bag : {
//       color: "white",
//       weight: 25
//    },
//    myName: "vishal",
//    myAge: 24,
//    getData: function () {
//       console.log(`my name is ${myData.myName} and my age is ${myData.myAge}`);
//    }

// }

// console.log(myData.bag.color +"🍫");




// console.log(myData.myName);
// console.log(myData.myAge);
// //  calling a method

// console.log(myData.getData());



// //     -- this object -  this object can have multiple values depending on where it is placed

// // console.log(` this is the output 🙂  ${this} `);
// console.log(this.alert("awesome"));

// // ex1
// function myName() {
//    console.log(this);
// }
// myName();

// ex2

// let myNames = "vishal";
// function myName() {
//    console.log(this.myNames);
// }
// myName();

// ex4

// we can't use fat arrow function in this object

// let obj = {
//          myAge: 24,
//          myName: () => {
//             console.log(this);
//       },
            
   
// }

// obj.myName();

// advance jaavscript
//  1. what is event capturing?
//  it is known as event is first captured outermost element and then it is propogated to the innermost elements.

//  2. event bubbling - it is known as event is first captured innermost element and then it is propogated to the outmost elements.

//  calulator function

// //  add function
// const add = (a, b) => {
//    return a + b;
// }
// const sub = (a, b) => {
//    return a - b;
// }
// const multi = (a, b) => {
//    return a*b;
// }
// const div = (a, b) => {
//    return a / b;
// }


// const calcualtor = (num1,num2,operator) => {
//    return operator(num1, num2);
// }

// var res = calcualtor(5,2,multi);
// console.log(res);
// console.log(`The calculator result is ${res}`);


//  asynchronous javascript programing
//  1. hosisting and javascript
//  2. scope chain
//  3. lexical scoping in javascript
//  4. use strict mode
//  5. this keyword
//  6. clousures in javascript
//  7. what is Asynchronous javascript
//  8. what is event loop
