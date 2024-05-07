{
  // OOP OR Object Oriented Programming

//   class Animal {
//     sound: string;

//     // Parameter properties == set public before parameter

//     constructor(public name: string, public gender: string, sound: string) {
//       this.sound = sound;
//     }

//     makeSound(time: number) {
//       console.log(`${this.name} makes sound ${time} times`);
//     }
//   }

//   const dog = new Animal("pochi", "male", "vaw vaw");
//   dog.makeSound(5);


 class Animal {

   constructor(public name: string, public gender: string, public sound: string) {
   }

   makeSound(time: number) {
     console.log(`${this.name} makes sound ${time} times`);
   }
 }

 const dog = new Animal("pochi", "male", "vaw vaw");


 class Beast extends Animal {
   constructor(name: string, gender: string, sound: string, color: string) {
     super(name, gender, sound);
   }

   newBeast(time: number) {
     console.log(`${this.name} makes sound ${time} times`);
   }
 }

 const darkDog = new Beast("Dark pochi", "male", "vaw vaw", "black");
 const darkCat = new Beast("Dark Cat", "male", "Maw Maw", "black");

 darkDog.makeSound(100)
 darkCat.makeSound(100)


 















  // //////
}
