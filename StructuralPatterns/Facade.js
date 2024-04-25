// Клас, що представляє систему обліку кадрів
class EmployeeManagementSystem {
    constructor() {
        this.employees = [];
    }

    // Метод для додавання працівника
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // Метод для видалення працівника
    removeEmployee(employee) {
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
    }

    // Метод для отримання списку всіх працівників
    getAllEmployees() {
        return this.employees;
    }
}

// Фасад для спрощення використання системи обліку кадрів
class EmployeeManagementFacade {
    constructor() {
        this.employeeManagementSystem = new EmployeeManagementSystem();
    }

    // Метод для додавання працівника через фасад
    addEmployee(name, position) {
        const employee = { name, position };
        this.employeeManagementSystem.addEmployee(employee);
    }

    // Метод для видалення працівника через фасад
    removeEmployee(employee) {
        this.employeeManagementSystem.removeEmployee(employee);
    }

    // Метод для отримання списку всіх працівників через фасад
    getAllEmployees() {
        return this.employeeManagementSystem.getAllEmployees();
    }
}

// Приклад використання фасаду
const employeeManagementFacade = new EmployeeManagementFacade();

employeeManagementFacade.addEmployee("John Doe", "Developer");
employeeManagementFacade.addEmployee("Jane Smith", "HR Manager");

const allEmployees = employeeManagementFacade.getAllEmployees();
console.log(allEmployees);