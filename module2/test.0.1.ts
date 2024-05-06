{
//   //

//   // type assertion

//   let alu: any;

//   alu = "hello bro";

//   alu as string;

//   const add = (a: number): number => a + 5;

//   const bb = add(5) as number;

//   // interface

//   type User1 = {
//     name: string;
//     phone: number;
//   };

//   type User3 = User1 & { gender?: string };
//   interface User2 {
//     name: string;
//     phone: number;
//   }

//   interface User4 extends User2 {
//     gender: string;
//   }

//   const user1: User1 = {
//     name: "Safin",
//     phone: 3343434,
//   };

//   const user2: User2 = {
//     name: "Safin",
//     phone: 3343434,
//   };
//   const user3: User3 = {
//     name: "Safin",
//     phone: 3343434,
//   };
//   const user4: User4 = {
//     name: "Safin",
//     phone: 3343434,
//     gender: "male",
//   };

//   // generic type

//   type GenericArray<T> = Array<T>;

//   const array: GenericArray<number> = [34, 4, 4, 4];

//   const student: GenericArray<{
//     name: string;
//     roll: number;
//   }> = [
//     {
//       name: "alu",
//       roll: 4,
//     },
//     {
//       name: "jaja",
//       roll: 343,
//     },
//   ];

//   // genetic type function

//   const hudai = <T>(param: T): T[] => {
//     return [param];
//   };

//   const rabbit = hudai<number>(34);

//   const lala = <T, X>(param1: T, param2: X): [T, X] => {
//     return [param1, param2];
//   };

//   // constraint extends

//   const zp = <T extends { a: number }>(param: T) => {
//     return param;
//   };

//   type Cc = {
//     a: number;
//     b: string;
//     c: boolean;
//   };
//   type Tf = {
//     a: number;
//     y: number;
//     b: string;
//     c: boolean;
//   };
//   const tt = zp<Cc>({ a: 1, b: "2", c: true });
//   const tat = zp<Tf>({ y: 1, b: "2", c: true, a: 4 });

//   // genetic constraint with keyof operator

//   const xp = {
//     name: "Safin",
//     age: 40,
//   };

//   const search = <T, x extends keyof T>(obj: T, str: x) => {
//     return obj[str];
//   };

//   // console.log(search(xp, "name"));

//   // basic promise

//   const seePromise = (a: number): Promise<string | number> => {
//     return new Promise<string | number>((resolve, reject) => {
//       const data: string | number = a;
//       if (data) {
//         resolve(data);
//       } else {
//         reject("noxxxxxxxxxxxxxx");
//       }
//     });
//   };

//   // calling the promise

//   const showData = async (a: number): Promise<string | number> => {
//     const data = await seePromise(a);
//     console.log(data);
//     return data;
//   };

//   // console.log(showData(1));






  // ?//////////////////////////////////////////

  const getTodo = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data =await response.json();
    console.log(data);
  };  

 getTodo();


// conditional type 

type sheikh = {
  car:string;
  bot:string;
  bike:string;
}




type chacker <T> = T extends keyof sheikh? true:false;

type newt = chacker<"car">;



// meped type



type Area = {
  hight:number;
  width:number;
}


type StringArea = {
  [key in  keyof Area]: string
}


const area:StringArea = {
  hight: 'aa',
  width:'ss'
}

// utility types
// Pick

type parson = {
  name: string;
  age:number;
  email?:string;
  phone:number;
}

type name = Pick<parson, "name" | "age">


const alu:name = {
  name:'alu',
  age:34
}

// Omit

type newParson = Omit<parson, "name" | "age">

// -----------

type MyObj = Record <string, number | string>


const myObj: MyObj = {
  yo:4,
  lo:"aa"
}





































































  //

}
