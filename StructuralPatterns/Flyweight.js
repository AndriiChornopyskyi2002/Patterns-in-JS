// Клас, що представляє працівника
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

// Фабрика для створення працівників з використанням пристосуванця
class EmployeeFactory {
    constructor() {
        this.employees = {};
    }

    // Метод для створення або отримання працівника
    getEmployee(name, position) {
        const key = name + position;
        if (!this.employees[key]) {
            this.employees[key] = new Employee(name, position);
        }
        return this.employees[key];
    }
}

// Приклад використання
const factory = new EmployeeFactory();

const john = factory.getEmployee("John Doe", "Developer");
const jane = factory.getEmployee("Jane Smith", "HR Manager");
const mike = factory.getEmployee("Mike Johnson", "Developer");
