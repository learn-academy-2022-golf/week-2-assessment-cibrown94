// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
console.log(cohort.split(""))

// a) Your answer: "G" "o" "l" "f" "2" "0" "2" "2"
// b) Verify and explain: My answer was along the line of correct i believe. The actual answer was the string but with back ticks `. My letters are separated by "".

// Actual output: 
// 'G', 'o', 'l',
// 'f', ' ', '2',
// '0', '2', '2'

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I believe it will log Hello, Learn Student
// b) Verify and explain: It log undefined. There was no return. Every function must have a return. The variables are defined. We want when a name is inputted that is returns with "Hello" and the student's name.

// Output: undefined
// With return: Hello, LEARN Student!

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: The .map built in method with keep it an array. [8, 10, 12, 14, 16]
// b) Verify and explain: My answer was correct. The .map tells the function to stay an array while taking each number in the array and deciding the output of that number multiplied by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: I believe this will filter out the number that is odd. I believe it will only display the odd numbers. The logic says when the number is not equal to 0 when divided by 2. 
// b) Verify and explain: My answer was correct. 

// output: [ 11, 13, 15 ]

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: I believe this will Javascript. I think it will log it because under myCodingSkillins is an object called language, and the first index in that starts with 0. 
// b) Verify and explain: I am correct. This is an object, so i think of it as like a folder within a folder. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: I think that they will come back George. It is not defining if George is being added into the class just that it is there.
// b) Verify and explain: Ok I was wrong. I logged the object. So basically my way of thinking but backwards. It wasnt adding George, or calling George to do anything so why would it be in the class. The function created a new parameter called new Learn, which is fine.


output: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }
