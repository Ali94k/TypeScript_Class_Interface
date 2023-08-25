// interface Person {
//   name: string
//   age: number

//   greet(phrase: string): void
// }

// type Person = {
//   name: string
//   age: number

//   greet(phrase: string): void
// }

interface Named {
  readonly name?: string
  outputName?: string
}

interface Greetable extends Named {
  greet(phrase: string): void
}

interface Greetable {
  greet(phrase: string): void
}

class Person implements Greetable {
  location = 'Passau'
  name: string
  age: number = 30

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name)
  }
}

// let user1: Person

// user1 = {
//   name: 'Max',
//   //   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name)
//   },
// }

let user2: Greetable
user2 = new Person('Max')
// user2.location = 'Munich' // this is not possible if location is readonly

user2.greet('Hi there - I am')
