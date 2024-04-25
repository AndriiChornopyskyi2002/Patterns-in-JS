// Прототип
class EmployeePrototype {
    clone() {}
}

// Конкретний прототип
class ConcreteEmployee extends EmployeePrototype {
    constructor(name, position) {
        super();
        this.name = name;
        this.position = position;
    }

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Position: " + this.position);
    }
}

// Клієнтський код
let originalEmployee = new ConcreteEmployee("John Doe", "Manager");
let newEmployee = originalEmployee.clone();
newEmployee.displayInfo();
