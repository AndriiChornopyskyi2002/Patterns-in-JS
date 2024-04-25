// Система обліку кадрів
class HRSystem {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(`${employee.name} - ${employee.position}`);
        });
    }
}

// Інтерфейс для даних з файлу
class FileDataAdapter {
    constructor(data) {
        this.data = data;
    }

    fetchEmployeesFromFile() {
        // Логіка завантаження даних з файлу
        return this.data.map(item => ({
            name: item.fullName,
            position: item.jobTitle
        }));
    }
}

// Адаптер, який перетворює формат даних з файлу у формат системи обліку кадрів
class FileAdapter extends HRSystem {
    constructor(fileDataAdapter) {
        super();
        this.fileDataAdapter = fileDataAdapter;
    }

    loadEmployees() {
        const employeesData = this.fileDataAdapter.fetchEmployeesFromFile();
        employeesData.forEach(employee => {
            this.addEmployee(employee);
        });
    }
}

// Приклад використання
const fileData = [
    { fullName: 'John Doe', jobTitle: 'Software Engineer' },
    { fullName: 'Jane Smith', jobTitle: 'HR Manager' }
];

const fileDataAdapter = new FileDataAdapter(fileData);
const hrSystem = new FileAdapter(fileDataAdapter);

hrSystem.loadEmployees();
hrSystem.listEmployees();
