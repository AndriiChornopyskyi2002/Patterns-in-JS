// Клас, що представляє систему обліку кадрів на підприємстві
let EmployeeManagementSystem = (function () {
    let instance;

    // Приватний конструктор для запобігання створенню екземплярів ззовні
    function EmployeeManagementSystem() {
        console.log("Employee management system instance created.");
    }

    // Статичний метод для отримання єдиного екземпляру класу
    function getInstance() {
        if (!instance) {
            instance = new EmployeeManagementSystem();
        }
        return instance;
    }

    // Метод для додавання нового працівника
    EmployeeManagementSystem.prototype.addEmployee = function (name) {
        console.log("New employee added: " + name);
    };

    // Метод для видалення працівника
    EmployeeManagementSystem.prototype.removeEmployee = function (name) {
        console.log("Employee removed: " + name);
    };

    return {
        getInstance: getInstance
    };
})();

// Демонстрація роботи системи обліку кадрів на підприємстві
let system1 = EmployeeManagementSystem.getInstance();
let system2 = EmployeeManagementSystem.getInstance();

// Перевірка, чи є обидва екземпляри однаковими
console.log("system1 equals system2: " + (system1 === system2));

// Додавання та видалення працівника через систему обліку кадрів
system1.addEmployee("John Doe");
system2.removeEmployee("Jane Smith");
