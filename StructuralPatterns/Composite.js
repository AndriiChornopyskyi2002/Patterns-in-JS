// Клас, що представляє працівника
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    // Метод для виводу інформації про працівника
    getInfo() {
        return `${this.name} - ${this.position}`;
    }
}

// Клас, що представляє підрозділ або відділ
class Department {
    constructor(name) {
        this.name = name;
        this.subordinates = []; // Масив для зберігання підрозділів та працівників
    }

    // Метод для додавання підрозділу або працівника
    add(employeeOrDepartment) {
        this.subordinates.push(employeeOrDepartment);
    }

    // Метод для видалення підрозділу або працівника
    remove(employeeOrDepartment) {
        const index = this.subordinates.indexOf(employeeOrDepartment);
        if (index !== -1) {
            this.subordinates.splice(index, 1);
        }
    }

    // Метод для виведення інформації про підрозділ або відділ
    getInfo() {
        let info = `Department: ${this.name}\n`;
        this.subordinates.forEach(subordinate => {
            info += `  ${subordinate.getInfo()}\n`;
        });
        return info;
    }
}

// Приклад використання
const rootDepartment = new Department("CEO Office");

const hrDepartment = new Department("HR Department");
hrDepartment.add(new Employee("John Doe", "HR Manager"));
hrDepartment.add(new Employee("Jane Smith", "HR Specialist"));

const itDepartment = new Department("IT Department");
itDepartment.add(new Employee("Mike Johnson", "IT Manager"));
itDepartment.add(new Employee("Emily Brown", "Software Developer"));

rootDepartment.add(hrDepartment);
rootDepartment.add(itDepartment);

console.log(rootDepartment.getInfo());
