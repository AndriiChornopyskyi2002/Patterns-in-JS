// Абстракція системи обліку кадрів
class EmployeeManagementSystem {
    constructor(storage) {
        this.storage = storage;
    }

    addEmployee(employee) {
        this.storage.saveEmployee(employee);
    }

    listEmployees() {
        return this.storage.getAllEmployees();
    }
}

// Реалізація сховища даних для зберігання працівників в пам'яті
class InMemoryStorage {
    constructor() {
        this.employees = [];
    }

    saveEmployee(employee) {
        this.employees.push(employee);
    }

    getAllEmployees() {
        return this.employees;
    }
}

// Реалізація сховища даних для зберігання працівників в базі даних
class DatabaseStorage {
    constructor() {
        // Імітуймо базу даних зі списком працівників
        this.employees = [];
    }

    saveEmployee(employee) {
        // Логіка збереження в базі даних
        console.log(`Профіль працівника ${employee.name} збережено в базі даних`);
        this.employees.push(employee); // Додати працівника до списку
    }

    getAllEmployees() {
        // Логіка отримання з бази даних
        console.log("Отримано всіх працівників з бази даних");
        return this.employees; // Повертаємо список працівників
    }
}


// Приклад використання
const inMemoryStorage = new InMemoryStorage();
const employeeManagementSystem1 = new EmployeeManagementSystem(inMemoryStorage);

employeeManagementSystem1.addEmployee({ name: "John Doe", position: "Developer" });
console.log(employeeManagementSystem1.listEmployees());

const databaseStorage = new DatabaseStorage();
const employeeManagementSystem2 = new EmployeeManagementSystem(databaseStorage);

employeeManagementSystem2.addEmployee({ name: "Jane Smith", position: "HR Manager" });
console.log(employeeManagementSystem2.listEmployees());
