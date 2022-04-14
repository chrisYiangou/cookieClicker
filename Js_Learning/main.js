// JavaScript != Java
// JavaScripts syntaz at first may resemble but they are different

//Broswer, innline, externally 

// console.log("Does this work")

// //How do we connect this page

// //Declaring Variables 

// //The scope of var isnt ideal 

// let fName = "Chris"
// const VALUE = "NEVER CHANGING"

// fName = "Christopher"

// //String 
// let surname = "Smith"

// //Java = byte, short, int, long, float, double
// //JS - Number

// const age = 10
// const salary = 150.40

// //Arrays 
// let myArray = [10,12,13,"Hello"] //indexing starts at 0

// //Java the basic array could only take in one data type
// //ArrayList Could only take in 1 Object type 
// //JS burns the book - They are mutable 

// console.log(typeof age)
// console.log(typeof salary)


// console.log(myArray)
// console.log(myArray[0])
// console.log(myArray[50])

// //Boolean - They are switches 

// const trueOrFalse = false 

// //JS DATA TYPEs
// //NUMBER
// //STRING
// //OBJECT
// //ARRAY
// //undefined
// //null

// //String Concat

// let str = "10 + 10" + 10 + "" + 10 + surname;
// //NUM + STRING == CONCAT
// str += "Text"

// console.log(str)

// //Litral

// // `` $ - Used to exit the literal and enter JS to calculate or do things

// const literalStuff = `My surname is ${surname} ${10 * 10}`

// console.log(literalStuff)


// //CAMEL CASE - 

// let camelCaseLooksLikeThis;

// //modifyMe - An Array to show off four methods
// //Push and pop - Stack - Adding/removing a varibale from the end of array
// //Shift and unshift - From the start of a list add/remove

// let modifyMe = [1,2,3,4,5,6,7,8,9]

// console.log(modifyMe)

// const removedLastNum = modifyMe.pop()

// console.log(modifyMe)

// modifyMe.push("A number")

// console.log(modifyMe)

// const removedFirstItem = modifyMe.shift()

// console.log(modifyMe)

// modifyMe.unshift("Another One")

// console.log(modifyMe)

//Checking for equality 

// = - Assignment , == Equality 
// A boolean checker -- true and false 

//Flow of Control

let variable = "Something"

let booHoo = true
let booHooMan = true
let asosFanBoy = "Samuel"
let one = 1
let theNumberThree = 3
let theWordThree = "3"

// == Loose Equality
// === Strict Equality 

console.log(booHoo === booHooMan)
console.log(booHoo === 1)
console.log(theNumberThree === theWordThree)

//If Statements

// (boolean) - JS will assume that the statement is read like
//(boolean === true)

//(!boolean) = (boolean === false)
// Or and And decalrations 

if (booHoo && booHooMan) {
    console.log("BooHoo is for you")
} else if (asosFanBoy === "Samuel") {
    console.log("I like both")
} else {
    console.log("I like Asos anyway")
}

//elif -- else if 

let golfScore = ["hole in one", "Eagle","Birdie", "Par", "Boogey", "Retire"]



//If the par for a course is five and the person has had 6 strokes thats a bogey


//Function 
//def 
//public void 

//What is this golfGame expecting to recieve before it gives its results

//We order you to learn this 

//A function is a script telling java to do an order of operations

function golfGame(strokes,par) {

    if (strokes === 1) {
        console.log(golfScore[0])
    } else if (strokes <= par - 2) {
        console.log(golfScore[1])
    } else if (strokes === par - 1) {
        console.log(golfScore[2])
    } else if (strokes === par) {
        console.log(golfScore[3])
    } else if (strokes === par + 1) {
        console.log(golfScore[4])
    } else {
        console.log(golfScore[5])
    }

}

//Do it

golfGame(3,2)

//while
//for

//while loops are most useful when searhing inside arrays arrays/String etc.

//We dont know how long the recurrsion may last for

//for loop is essentially a iterative type that will run for x amount of time

let anotherOne = ["Dj Khalid", "His wife", "His son"]

for (let i = 0; i < anotherOne.length; i++ ) {
    console.log(anotherOne[i])
}

//

let num = 2

switch (num) {
    case 1:
    case 2:
        console.log("One and Two")
        break
    case 3:
        console.log("Three")
        break
    default:
        console.log("Nothing was triggered")

}

/* Given 2 integer values greater than 0,
 return whichever is closest to 21 without
 going over 21. If they both go over 21 then return 0. */

 // a b && and  || or

 function blackJack(cardOne, cardTwo) {
     if (cardOne > 0 && cardTwo > 0) {
         //Function written here
         //If card is 21 hard blackjack - More money
         // if card is less than 21 but higher than other - Soft Blackjack
        

         //BlackJack
        if (cardOne === 21 && cardTwo === 21) {
            console.log("Hard Draw")
        } else if (cardOne === 21  ) {
            console.log("CardOne Hard win ")
        } else if(cardTwo === 21  ) {
            console.log("CardTwo Hard Win")
        } else if (cardOne > cardTwo && cardOne < 21) {
             console.log("Card 1 wins - Soft win, Card Value: " + cardOne)
         } 
         else if (cardTwo > cardOne && cardTwo < 21) {
            console.log(`Card 2 wins - Soft win, Card Value: ${cardTwo} `)
        } else {
            console.log("Lose")
        }

     } else {
         console.log("One or both cards were less than zero")
     }
 }

//Ternary 

// ? :

(1 + 1 === 2) ? console.log("Truth") : console.log("False")
//Condition is declared 
//? if true 
//: if false

//FizzBuzz - Classic tale 

/* 
    Create a function which returns 'Fizz' for multiples of three 
    and 'Buzz' for the multiples of five.
    Return 'FizzBuzz' for numbers which are multiples of both three and five.
    Return the input number for numbers that are neither.
*/

// % -- Modulus -- Finds the remainder 

// + - * / %,

// We no longer want to take a parameter -- Print first 100 numbers 

//While or For
// While - Unkwown
// For - Kwown 


function fizzBuzz() {

for (let i = 0; i <= 100; i++) {

    if (i === 0) {
        console.log(0)
    } else if (i % 15 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}
}

fizzBuzz()





