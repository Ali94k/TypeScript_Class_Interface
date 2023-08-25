class Department {
  name: string

  constructor(name: string) {
    this.name = name
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
  }
}

const acc = new Department('Accounting')

const accCopy = {describe: acc.describe, name: 'DUMMY' }

accCopy.describe() // Department: undefined if "this: Department" is not used and name is not defined in accCopy

console.log(acc)
