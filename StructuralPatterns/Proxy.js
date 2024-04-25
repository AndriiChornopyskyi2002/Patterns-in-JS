// Клас, що представляє працівника
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

// Заступник для класу Employee
class EmployeeProxy {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.employee = null; // Посилання на реальний об'єкт працівника
    }

    // Метод для отримання інформації про працівника через заступника
    getInfo() {
        if (!this.employee) {
            console.log("Завантаження інформації про працівника...");
            this.employee = new Employee(this.name, this.position);
        }
        return this.employee.getInfo();
    }
}

// Приклад використання
const johnProxy = new EmployeeProxy("John Doe", "Developer");
console.log(johnProxy.getInfo()); // Завантаження інформації про працівника...
console.log(johnProxy.getInfo()); // John Doe - Developer (вже збережена інформація, не потрібно завантажувати ще раз)