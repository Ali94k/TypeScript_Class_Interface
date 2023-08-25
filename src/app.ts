class Department {
  name: string
  private employees: string[] = []

  constructor(name: string) {
    this.name = name
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const acc = new Department('Accounting')

acc.addEmployee('Max')
acc.addEmployee('Manu')

// acc.employees[2] = 'Anna' // this is possible if employees is public

acc.describe()
acc.printEmployeeInformation()

// const accCopy = { describe: acc.describe, name: 'DUMMY' }

// accCopy.describe() // Department: undefined if "this: Department" is not used and name is not defined in accCopy

console.log(acc)
