// Базовий клас працівника
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    // Метод для отримання інформації про працівника
    getInfo() {
        return `${this.name} - ${this.position}`;
    }
}

// Декоратор для обчислення заробітної плати
class SalaryCalculatorDecorator {
    constructor(employee) {
        this.employee = employee;
    }

    // Метод для обчислення заробітної плати
    calculateSalary() {
        // Логіка обчислення заробітної плати
        // У цьому прикладі просто повертаємо розмір мінімальної заробітної плати
        return 1000;
    }
}

// Приклад використання
const john = new Employee("John Doe", "Developer");
const johnWithSalary = new SalaryCalculatorDecorator(john);
console.log(`${john.getInfo()} - Salary: ${johnWithSalary.calculateSalary()}`);