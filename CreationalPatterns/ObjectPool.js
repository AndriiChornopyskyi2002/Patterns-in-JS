// Клас, який представляє працівника
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    // Метод для відображення інформації про працівника
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Position: " + this.position);
    }
}

// Пул об'єктів
class ObjectPool {
    constructor() {
        this.availableObjects = [];
        this.inUseObjects = [];
    }

    // Додавання нового об'єкта до пулу
    addObject(obj) {
        this.availableObjects.push(obj);
    }

    // Отримання об'єкта з пулу
    getObject() {
        if (this.availableObjects.length === 0) {
            console.log("No available objects. Creating a new one.");
            return new Employee("", "");
        } else {
            const obj = this.availableObjects.pop();
            this.inUseObjects.push(obj);
            return obj;
        }
    }

    // Повернення об'єкта до пулу
    releaseObject(obj) {
        const index = this.inUseObjects.indexOf(obj);
        if (index !== -1) {
            this.inUseObjects.splice(index, 1);
            this.availableObjects.push(obj);
        }
    }
}

// Використання пулу об'єктів
const pool = new ObjectPool();

// Додаємо об'єкти до пулу
pool.addObject(new Employee("John Doe", "Manager"));
pool.addObject(new Employee("Jane Smith", "Developer"));

// Отримуємо об'єкти з пулу та відображаємо інформацію про них
const employee1 = pool.getObject();
console.log("Employee 1:");
employee1.displayInfo();

const employee2 = pool.getObject();
console.log("Employee 2:");
employee2.displayInfo();

// Повертаємо об'єкти до пулу
pool.releaseObject(employee1);
pool.releaseObject(employee2);
