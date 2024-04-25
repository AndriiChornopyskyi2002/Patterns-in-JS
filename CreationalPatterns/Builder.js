// Клас, який представляє працівника
class Employee {
    constructor(name, position, contacts) {
        this.name = name;
        this.position = position;
        this.contacts = contacts;
    }

    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Position: " + this.position);
        console.log("Contacts: ", this.contacts);
    }
}

// Будівельник працівників
class EmployeeBuilder {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.contacts = {};
    }

    // Додати додаткові контактні дані
    addContactInfo(contacts) {
        this.contacts = contacts;
        return this;
    }

    // Побудувати працівника
    build() {
        return new Employee(this.name, this.position, this.contacts);
    }
}

// Створення працівників за допомогою будівельника
const employee1 = new EmployeeBuilder("John Doe", "Manager").addContactInfo({ email: "john.doe@example.com" }).build();
const employee2 = new EmployeeBuilder("Jane Smith", "Developer").addContactInfo({ phone: "123-456-7890" }).build();

// Відображення інформації про працівників
employee1.displayInfo();
employee2.displayInfo();