// basic data types

// string
let fastName: string = "Safin";

// number
let roll: number = 15;

// boolean
let dumb: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

let tk: number;

tk = 400;

// array
let friends: string[] = ["Sagar", "nabil", "roton"];
let friendSAge: number[] = [44, 33, 31];

// tuple
let bajar: [string, number] = ["alu", 500];

// object
let user: {
  name: string;
  age: number;
  roll: string;
  programmingLanguage: "Typescript";
  game?: string;
  readonly gf: string;
} = {
  name: "Safin khan",
  age: 22,
  roll: "programer",
  programmingLanguage: "Typescript",
  gf: "nai",
};

// function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(5, 2));

const addArrow = (num1: number, num2: number): number => num1 + num2;

// method
const poorUser = {
  name: "Safin",
  age: 22,
  addAge(age: number): string {
    return `Safins age ${age}`;
  },
};

const num: number[] = [1, 2, 3, 4, 5];

const newNum = num.map((element) => element * element);

// type alias

type Student = {
  name: string;
  age: number;
  class: string;
  gender: 'male' | 'female'
};

const student: Student = {
  name:'mim',
  age:10,
  class:'faltu class',
  gender: 'female'
};

console.log(student);
