const username: string = 'uriel.arana';
const sum = (a:number, b:number) => {
  return a + b;
}
sum(1,2);

// class Person {
//   age: number;
//   lastName: string;

//   constructor(age: number, lastName: string){
//     this.age = age;
//     this.lastName = lastName;
//   }
// }

class Person {
  constructor(public age: number, public lastName: string){}
}



const uriel = new Person(15, 'Arana');
uriel.age;
