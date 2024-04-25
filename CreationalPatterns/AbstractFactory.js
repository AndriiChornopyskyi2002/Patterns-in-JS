// Абстрактна фабрика
class EmployeeFactory {
    createWorker() {}
    createManager() {}
}

// Конкретна фабрика
class HRFactory extends EmployeeFactory {
    createWorker() {
        return new HRWorker();
    }

    createManager() {
        return new HRManager();
    }
}

// Продукти
class Worker {
    doWork() {}
}

class Manager {
    manage() {}
}

// Конкретні продукти
class HRWorker extends Worker {
    doWork() {
        console.log("HR Worker is working.");
    }
}

class HRManager extends Manager {
    manage() {
        console.log("HR Manager is managing.");
    }
}

// Клієнтський код
class Client {
    constructor(factory) {
        this.factory = factory;
    }

    run() {
        const worker = this.factory.createWorker();
        const manager = this.factory.createManager();

        worker.doWork();
        manager.manage();
    }
}

// Створюємо конкретну фабрику HR
const factory = new HRFactory();

// Створюємо клієнта з вибраною фабрикою
const client = new Client(factory);

// Запускаємо програму клієнта
client.run();