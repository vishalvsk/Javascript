//  javascript was created in 1996 and in 1997 Ecma script was created
//  in 2015 Decided to switch to annual releases of ecma script
/*  1. let and const
  2. template string 
  3. Default Arguments 
  4. rest operators 
  5. destructuring 
  6. object propertise
  7. arraow functions
  8. spread operators 

  First question what is let, const and var */
//   let myName = "vishal";
//   console.log(myName);

//     myName = " vishal karale ";
//   console.log(myName);





//  const myName = "vishal";
//   console.log(myName);

//  myName = " vishal karale ";
//   console.log(myName);

//   var - function scope
//   let and const -  block scope

// function bioData() {
//     const  myFirstName = "vishal";
//     console.log(myFirstName);

//     if (true) {
//         const myLastName = "karale";
//         console.log("inner " + myFirstName);
//         console.log("inner " + myLastName);

//     }

//     console.log("innerOuter " + myLastName);

// }

// bioData()



/* Template literals (Template strings)

javascript program to print table for given number (8)?
output -  8*1 = 8;
          8*2 = 16;
          8*3 = 24;
*/

// for (let num = 1; num <= 10; num++){
//     let tableOf = 12;
//   // console.log(`${tableOf} * ${num} = ${tableOf * num}`);
//    console.log(`${tableOf} * ${num} = ${6+6}`);
// }

/* Default arguments */
 
// function mul(a,b="5") {
//   return a * b;
// }
// console.log(mul(3));

//  fat Arrow function

// console.log(sum(5,6));

// function sum(a,b) {
//  let sum =  a + b;
//   return `the sum of the two numbers is ${sum}`;
// }

//  how to convert it into a fat arrow function
//  if u have a one line code so no need to write curly brackets ;




// const sum = (a,b) =>
//    `the sum of the two numbers is ${a+b}`;

// console.log(sum(5,6));

