{
  //

  // type assertion

  let alu: any;

  alu = "hello bro";

  alu as string;

  const add = (a: number): number => a + 5;

  const bb = add(5) as number;

  // interface

  type User1 = {
    name: string;
    phone: number;
  };

  type User3 = User1 & { gender?: string };
  interface User2 {
    name: string;
    phone: number;
  }

  interface User4 extends User2 {
    gender: string;
  }

  const user1: User1 = {
    name: "Safin",
    phone: 3343434,
  };

  const user2: User2 = {
    name: "Safin",
    phone: 3343434,
  };
  const user3: User3 = {
    name: "Safin",
    phone: 3343434,
  };
  const user4: User4 = {
    name: "Safin",
    phone: 3343434,
    gender: "male",
  };

  // generic type

  type GenericArray<T> = Array<T>;


  const array : GenericArray<number> = [34, 4, 4, 4]

  const student: GenericArray<{
    name:string;
    roll:number;
  }> =[
    {
        name:"alu",
        roll: 4
    },
    {
        name: 'jaja',
        roll: 343
    },
  ]













  //
}
