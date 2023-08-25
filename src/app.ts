class Department {
  private employees: string[] = []

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log('Department: ' + this.name + ' ID: ' + this.id)
  }

  addEmployee(employee: string) {
    //this.id = 'd2' // this is not possible if id is readonly
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const acc = new Department('id1', 'Accounting')

acc.addEmployee('Max')
acc.addEmployee('Manu')

// acc.employees[2] = 'Anna' // this is possible if employees is public

acc.describe()
acc.printEmployeeInformation()

// const accCopy = { describe: acc.describe, name: 'DUMMY' }

// accCopy.describe() // Department: undefined if "this: Department" is not used and name is not defined in accCopy

console.log(acc)
