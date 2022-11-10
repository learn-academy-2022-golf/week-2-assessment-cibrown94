
// // // Use test driven development to complete the following questions
// // // Add appropriate dependencies: $ yarn add jest


// // // --------------------1) 

// // // const object1 = { number: 15 }
// // // // // // // // Expected output: "15 is divisible by three"
// // // const object2 = { number: 0 }
// // // // // // // // Expected output: "0 is divisible by three"
// // // const object3 = { number: -7 }
// // // // // // // // Expected output: "-7 is not divisible by three"

// // // Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// // // a) Create a test with expect statements for each of the variables provided.

// // describe("object", () => {
// //     it("is divisible by three", () => {
// //         const object1 = { number: 15 }
// //         const object2 = { number: 0 }
// //         const object3 = { number: -7 }
// //       expect(object(object1)).toEqual("15 is divisible by three") 
// //       expect(object(object2)).toEqual("0 is divisible by three")
// //       expect(object(object3)).toEqual("-7 is not divisible by three")
// //     })
// //   })

// //   //// b) Create the function that makes the test pass.

// //   const object = (objectParam) => {
// //     if(objectParam.number % 3 === 0) {
// //         return `${objectParam.number} is divisible by three`
// //      } else {
// //         return `${objectParam.number} is not divisible by three`
// //      }
// //   }

// // //   Output: Test Suites: 1 passed, 1 total


// // // A method function belongs to to an object and requires the right kind of data type and behavior. 
// // // When running Jest, these problems do not require a console log. 

// // // Create a function called objectParam that takes an object as an arguement.
// // // One parameter: object
// // // Write a conditional statement to evaluate if objectParam.number is strictly divisible by 3. 
// // // Returns "is divisible by three"
// // // Otherwise it will return "is not divisible by three"



// // _________________________THIS WAS WORK PRIOR TO WORKING WITH INSTRUCTOR____________________________________________________
// // //     if(object % 3 === 0 ){
// // //         return `${object} is divisible by three`
// // //     } else if (object % 3 != 0){
// // //         return `${object} is not divisible by three`
// // //     }
  


// //   const object = [15, 0, -7] => {
// //     if (object % 3 === 0){
// //         return `${object}` is divisible by three`
// //     } else if(object )
// //         return `${object}` is not divisible by three`
// //     return `${object}` is divisible by three`



// // describe("object", () => {
// //     it("is divisible by three", () => {
// //       let num = [15 , 0, -7]
// //       let expectedOutput = ["15 is divisible by three", "0 is divisible by three", "-7 is not divisible by three"]
// //       expect(object(num, expectedOutput)).toEqual(expectedOutput)
// //     })
// //   })


// // //     // function isDivisibleBy3(num){ if ((num % 3) == 0){ return true; } else { return false; } };

// // // // When working on this all my work came back undefined, which is typically what we want but when doing my function is not working and that object wasnt defined . I have to remember to read the question for Context. I went through the syllabus not thinking when you meant object you meant object. 
// // // I find myself thinking really hard, into the jest doing its own math, when we give it what to say and think. My mind is overflowing with console.log. 

// // _________________________________________________________________________________________________________________________________________________________


// // // --------------------2) 

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // // // // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // // // // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]


// // Create a function that takes in an array of words and returns an array with all the words capitalized.


// // // a) Create a test with expect statements for each of the variables provided.

describe("randomNouns", () => {
    it("an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
      expect(randomNouns(randomNouns1)).toUpperCase("STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW")
      expect(randomNouns(randomNouns2)).toUpperCase("TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO")
    })
  })

//   const randomNouns = array.map ((array) => {
//     return array(array.toUpperCase())
// })

const randomNouns = (array) => { 
  array.map((array) => {
        return array(array())
   })
  }

  

//   //  output: 
// //   ReferenceError: randomNouns is not defined

// // Pseudo Code:
// // create a function that takes in an array of words and returns array with all the words capitalized
// // // declare a function that takes in an array
// // const randomNouns = (array) => {
// //   // return the array output from the map action
// //   return array.map((array) => {
// //     // with each value access the first index and capitalize the letter then  the remainder of the word
// //     return array.toUpperCase()
// //   })
// // }
// // // logging the function and pass in the array
//


// I am getting lost in the function itself.


// const randomNouns = randomNouns1.map => {
//     return randomNouns1.toUpperCase()
// }

// //   output: Test Suites: 1 failed, 1 total


// const randomNouns = array.map(array); {
//     return array(array.toUpperCase())
// }

// Whatever we are mapping over needs to be the arguement we are mapping through
// randomNouns1.((string)) => {

    // return randomNouns1(randomNouns1.toUpperCase) }
   
    //    return (randomNouns.toUpperCase())




// //   ReferenceError: randomNouns is not defined

// //       105 |         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// //       106 |         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// //     > 107 |       expect(randomNouns(randomNouns1)).toUpperCase("STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW")
//           |       ^
//       108 |       expect(randomNouns(randomNouns2)).toUpperCase("TEMPERATURE", "DATABASE", "CHOPSTICKS", "MAMGO")
//       109 |     })
//       110 |   })




// // --------------------3) 

// Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // // Expected output: 1
// const vowelTester2 = "academy"
// // // Expected output: 0
// const vowelTester3 = "challenges"
// // // Expected output: 2

// // // b) Create the function that makes the test pass.


// describe("vowel", () => {
//     it("logs the index of the first vowel", () => {
//         const vowelTester1 = "learn"
//         const vowelTester2 = "academy"
//         const vowelTester3 = "challenges"
//       expect(vowel(vowelTester1)).indexOf("1") 
//       expect(vowel(vowelTester2)).indexOf("0")
//       expect(vowel(vowelTester3)).indexOf("2")
//     })
//   })

// //   ReferenceError: vowel is not defined

// const vowel =(string) =>{
//     // return string.indexOf("learn"[1])
//     let count = 0
// for(let i = 0; i < string.length; i++) {
//   if(string[i] === "a","e","i","o","u") {
//     count++
//   } return {[i]string

//   }
// }
// }



//   const string = (vowel) => {
//     if(string[value] === "a","e","i","o","u") {count++

// Right here I started off by creating a new variable with a string
// I used indexeOf beause it will take a value as an arguement and return the first index that it finds that has that data

// TypeError: expect(...).indexOf is not a function
// TypeError: expect(...).length is not a function
