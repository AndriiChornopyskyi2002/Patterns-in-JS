// Батьківський клас для створення продуктів
class Creator {
    // Фабричний метод для створення продуктів
    factoryMethod() {
        throw new Error("Factory method must be implemented");
    }

    // Операція, яка використовує створений продукт
    operation() {
        const product = this.factoryMethod(); // Створення продукту через фабричний метод
        console.log(product.operation());
    }
}

// Інтерфейс продукту
class Product {
    operation() {
        throw new Error("Operation must be implemented");
    }
}

// Конкретний клас продукту 1
class ConcreteProduct1 extends Product {
    operation() {
        return "ConcreteProduct1 operation";
    }
}

// Конкретний клас продукту 2
class ConcreteProduct2 extends Product {
    operation() {
        return "ConcreteProduct2 operation";
    }
}

// Конкретний клас Creator для створення ConcreteProduct1
class ConcreteCreator1 extends Creator {
    factoryMethod() {
        return new ConcreteProduct1();
    }
}

// Конкретний клас Creator для створення ConcreteProduct2
class ConcreteCreator2 extends Creator {
    factoryMethod() {
        return new ConcreteProduct2();
    }
}

// Використання патерну Фабричний метод
const creator1 = new ConcreteCreator1();
creator1.operation(); // Виклик фабричного методу для створення ConcreteProduct1

const creator2 = new ConcreteCreator2();
creator2.operation(); // Виклик фабричного методу для створення ConcreteProduct2
