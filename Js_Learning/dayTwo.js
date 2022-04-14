"use strict";
//Objects

//Data types
//Number
//BigInt
//String
//Object
//Boolean
//Null
//Array
//NaN
//undefined

//JSON -- JAVASCRIPT OBJECT NOTATION
//Link frontend to the backend -- API - Application Programming Interface

//Object is essentially in this JSON form

let toyotaCar = new Object();

let hyundaiCar = {};

//Key:Value

let chrisCar = {
  //car: {
  name: "Chris's Super TurboCar",
  make: "Alfa Romreo",
  model: "e1234",
  year: 1999,
  colour: "Obnoxious Green",

  // }
};

let daveCar = {
  name: "Dave's rubbish Three Wheeler",
  make: "Peaguot",
  model: "12243",
  year: 2017,
  colour: "Vibrant Red",
};

//Dot notation object.variable/function()
//Bracket notation

chrisCar.colour;
chrisCar["engine"] =
  "A Big beautiful engine that WILL append to end of my list";

//Make an array to store cars

let garage = [chrisCar, daveCar, { make: "Mercedes", model: "A5" }];

console.log(garage);

console.log("\n");

//Enhanced For Loop
//Intialisation, condition, after effect
//for (objects in array )

//for (let i = 0; i < garage.length; i++)

for (let car in garage) {
  console.log(garage[car].make);
}

let massiveJSON = {
  smallerJSON: {
    students: [
      {
        name: "Dan",
        dob: "128412",
        location: "Barcelona",
      },
      {
        name: "Cansu",
        dob: "1839128",
        location: "Peru",
      },
    ],
  },
};

// console.log(massiveJSON)

//JSON.stringify {Object object}

// let getDan = JSON.stringify(massiveJSON.smallerJSON.students[0])
// console.log(getDan)
// let getCansu = JSON.stringify(massiveJSON["smallerJSON"].students[1]);
// console.log(getCansu)
// console.log(typeof getDan)

// //JSON.parse

// let cookey = `{"name":"Chris"}`

// //We've got ya - but this is in String form
// //localStorage -- Store of Strings  --- Limited
// //sessionStorage -- Worth looking into

// //Relation/NonRelation -- mySql - Relational, MongoDB Non-relation

// let convertData = JSON.parse(cookey)

// console.log(convertData);
// console.log(typeof convertData)

//Functions

console.log("\n");

multiply(18, 3);

function multiply(a, b) {
  console.log(a * b);
}

multiply(2, 6);

//Hoisting -- Is good but not ideal in every circumstance

//Annnoymous Functions
//Declared like const

const divide = function (a, b) {
  console.log(a / b);
};

divide(10, 2);

// Arrow Functions

const simonAndGar = () => console.log("Hello darkness");
simonAndGar();

const addition = (a, b) => console.log(a + b);
const sub = (a, b) => console.log(a - b);
