"use strict";
// basic data types
// string
let fastName = "Safin";
// number
let roll = 15;
// boolean
let dumb = true;
// undefined
let x = undefined;
// null
let y = null;
let tk;
tk = 400;
// array
let friends = ["Sagar", "nabil", "roton"];
let friendSAge = [44, 33, 31];
// tuple
let bajar = ["alu", 500];
// object
let user = {
    name: "Safin khan",
    age: 22,
    roll: "programer",
    programmingLanguage: "Typescript",
    gf: "nai",
};
// function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 2));
const addArrow = (num1, num2) => num1 + num2;
// method
const poorUser = {
    name: "Safin",
    age: 22,
    addAge(age) {
        return `Safins age ${age}`;
    },
};
const num = [1, 2, 3, 4, 5];
const newNum = num.map((element) => element * element);
const student = {
    name: 'mim',
    age: 10,
    class: 'faltu class',
    gender: 'female'
};
console.log(student);
