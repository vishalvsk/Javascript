//       --   Strings in an array   --

/*  
1. Escape Characters in a string 
2. finding a string in a string
3. searching for a string in a string
4. extracting string parts 
5. replacing a string content 
6. extracting string characters 
7. others useful methods in a string

*/

// let myName = "vishal";
// let myAge = "23";

// let ytName = new String("rupesh");
// console.log(ytName.length);

// if you want to mess , simply use the alternative quotes

// let anySentence = "I am the 'gretest' person ever born in this planet";

// console.log(anySentence);

//      Extracting string parts

//    Slice(() method
//  slice() extract a part of a string and returns the extracted part
//  in a string

// var str = "banana , Apple , kiwi";
// const newStr = str.slice(0, str.length);
// console.log(newStr);


//  diplay only 280 characters in a string

// let myTweet = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure expedita consequuntur nam veritatis illo quo itaque neque natus dolor, mollitia eveniet voluptate hic qui pariatur ipsa similique cumque quaerat odio voluptates accusantium beatae, facilis, ab fuga numquam. Itaque ratione dolore deserunt enim, quia modi aliquam magni, impedit eius, quisquam repellat alias cumque delectus inventore quibusdam voluptas omnis cupiditate vero suscipit. Delectus facere doloremque, animi modi quos sunt distinctio! Quisquam aliquam quibusdam a velit animi iste voluptates commodi, rem porro magnam ducimus consectetur at aut, cumque odio alias dolorem vero temporibus est reiciendis delectus officia! Fugiat voluptatibus vero dolorum veritatis alias nobis corrupti ea quos voluptatum doloribus optio ratione, sit ut dolores aliquid nulla repellat soluta nihil earum pariatur amet asperiores totam. Quis laudantium nobis praesentium. Molestias iste nisi eum modi quibusdam, eius autem, odio molestiae ea libero odit? Repellat beatae eaque illum ipsa quas sed tenetur voluptatum veniam officiis, fugit sapiente iste, eos placeat commodi dolorum perferendis temporibus, quod nesciunt. Voluptatibus vero molestias iure soluta aspernatur explicabo dolores autem eos. Dicta voluptate repellat dignissimos dolores tenetur quasi soluta, laudantium minima, architecto eum aliquid saepe tempora provident voluptatibus nesciunt quidem eius dolorum molestiae sunt iure optio nihil? In deleniti at fuga magni provident? Odio illo repellat similique facilis, incidunt voluptatibus excepturi quam, delectus ipsam quod dolorem sunt praesentium commodi doloremque eius. Debitis perferendis officia unde voluptatum? Qui eligendi enim magni hic fugit assumenda dignissimos, sunt obcaecati, illo, quaerat porro deserunt debitis aut doloribus sed? Deleniti quis consectetur culpa illum atque ad totam quo nisi, dolorum, delectus veritatis consequatur, soluta possimus aliquam. Id repellat unde maxime vero pariatur quam veniam, nostrum eos quis maiores ratione asperiores quasi qui doloribus dolore aut libero?";

// let myNewTweet = myTweet.slice(0, 279);
// console.log(myNewTweet);
// console.log(myTweet.length);

//  substring method - it is similar to slice() method which is not accepting negative value the characters are conted from the 0th position

// var str = "apple ,banana , kiwi";
// let res = str.substring(0, str.length - 1);
// console.log(res);

//  sunstr() method - it is similar to slice() but diff is that the second parameter specifies the length of the extracted part.

// var str = "apple, banana, kiwi";

// var res = str.substr(-4);

// console.log(res);


//  replacing string content() method

// let myBioData = `I am vishal sudesh karale vishal`;

// let replaceData = myBioData.replace('vishal', 'Vishal');

// console.log(myBioData);
// console.log(replaceData);


//      -- Extracting string characters  --

//  the charAt(0) method

// let str = "apple";
// console.log(str.charAt(0));

//      charcodeAt(0) method
//  it is unicode characters in the string from 0 to 65535;

// let str = "apple";
// console.log(str.charCodeAt(0));


//  challenge time

//
// let str = "Hello World";
// console.log(str.charAt(str.length-1));


//      --  property access ---
 

// let str = "apple";
// console.log(str[0]);


//     useful method
//  touppercase method and toLowerCase method and concat method


// let fName = "vishal";
// let lName = "karale";
// // console.log(str.toLowerCase(str));
// // console.log(str.toUpperCase(str));
// // console.log(str.concat(str));
// console.log(`first name is ${fName} and last name is ${lName}`);

//  converting string to an array

//    -- split method

// var txt = 'used for data values that |  are made up of ordered sequences of characters, such as "hello world". A string can contain any sequence of characters, visible or invisible, and characters may be repeated.';  // string
// console.log("spit on commas");
// console.log(txt.split(","));

// console.log("spit on spaces");
// console.log(txt.split(" "));

// console.log("spit on pipe"); 
// console.log(txt.split(" | "));  


