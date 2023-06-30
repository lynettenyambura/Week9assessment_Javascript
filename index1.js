class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      // Adding a 10% bonus for managers
      return super.calculateAnnualSalary() + (super.calculateAnnualSalary() * 0.1);
    }
  }
  
  // Creating two instances of the Manager class
  const manager1 = new Manager("Angie", 10000, "Engineering");
  const manager2 = new Manager("Lynette", 60000, "software development");
  
  // Calculating the annual salary for the managers
  console.log(manager1.calculateAnnualSalary()); 
  console.log(manager2.calculateAnnualSalary()); 
  