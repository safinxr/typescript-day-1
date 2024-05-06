{
  // OOP OR Object Oriented Programming

  class Animal {
    sound: string;

    // Parameter properties == set public before parameter

    constructor(public name: string, public gender: string, sound: string) {
      this.sound = sound;
    }

    makeSound(time: number) {
      console.log(`${this.name} makes sound ${time} times`);
    }
  }

  const dog = new Animal("pochi", "male", "vaw vaw");
//   dog.makeSound(5);


















  // //////
}
