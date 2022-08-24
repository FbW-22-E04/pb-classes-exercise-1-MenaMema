class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    // Complete the code!
    this.fullname = ` ${this.firstname} ${this.lastname};`;
  }
}

const newName = new Employee("Antonio", "Mena");
console.log(newName);

console.log("----------------------");

console.log(newName.email);

console.log("----------------------");
