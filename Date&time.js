//     --   Date and Time methods   --

//  creting the date and time objects
//  javascript date objects represents a single moment in a time
//  platform-independant format. Date objects contain a number that
//  represents milliseconds since 1-january, 1970. UTC.

//  4 ways to create a new date object

// new Date()
// new Date(year, month, day, hour, minute, second, milliseconds);

// let currDate = new Date();
// console.log(currDate);
// console.log(new Date().toLocaleString());
// console.log(new Date().toISOString());
// console.log(Date.now());

//  months count in Datea and time  from 0 to 11;

// let d = new Date(2018, 11, 15);
// console.log(d.toLocaleString());


//    -- Date string - it creates objects in date string


// let d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

//  millisecond


// let d = new Date(86400000*2);
// console.log(d.toLocaleString());


//    -- Dates method

//    how to get individual dates

// const currDate = new Date();

// console.log(currDate.toLocaleString());
// console.log(currDate.getTime());
// console.log(currDate.getFullYear());
// console.log(currDate.getDate());
// console.log(currDate.getDay());



//  --- how to set date in an js


// const currDate = new Date();

// console.log(currDate.setDate(10,10));
// let setMonth = console.log(currDate.setFullYear(2022));
// console.log(setMonth);
// console.log(currDate.setTime(10));
// console.log(currDate.setMonth(5));
// console.log(currDate.setHours(10));




//   --   time methods

// let currDate = new Date();

// console.log(currDate.getTime());
// console.log(currDate.getHours());
// console.log(currDate.getMinutes());
// console.log(currDate.getSeconds());
// console.log(currDate.getMilliseconds());
// console.log(currDate.getFullYear());


//     -- challenge time --

// var t = new Date().toLocaleTimeString();
// console.log(t);

// var date1 = new Date().toLocaleDateString();
// console.log(date1);


