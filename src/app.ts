class Department {
  protected employees: string[] = []

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log('Department: ' + this.name + ' ID: ' + this.id)
  }

  addEmployee(employee: string) {
    //this.id = 'd2' // this is not possible if id is readonly
    console.log('Department')
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

class ITDepartment extends Department {
  private main: string

  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
    this.admins = admins
    this.main = admins[0]
  }

  addEmployee(name: string) {
    console.log('IT Department')
    if (name === 'Max') {
      return
    }
    this.employees.push(name) // this is possible if employees is protected
  }
}

const it = new ITDepartment('id2', ['Max'])
it.addEmployee('Max')
it.addEmployee('Manu')

it.describe()
it.printEmployeeInformation()

console.log(it)


const it2: Department = new ITDepartment('id3', ['Max'])

it2.addEmployee('Max_Min')

