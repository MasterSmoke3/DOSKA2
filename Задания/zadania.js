//1 Напишите программу на JavaScript, чтобы создать класс под названием «Прямоугольник» со свойствами ширины и высоты. 
//Добавьте ему два метода расчета площади и периметра прямоугольника. Создайте экземпляр класса «Прямоугольник» и вычислите его площадь и периметр.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const myRectangle = new Rectangle(5, 10);

console.log("Площадь прямоугольника:", myRectangle.area()); 
console.log("Периметр прямоугольника:", myRectangle.perimeter()); 


//2 
// Напишите программу на JavaScript, которая создает класс Животное (Animal) со свойствами вида и звука (kind, sound).
// Напишите метод воспроизведения звука животного. Создайте подкласс под названием «Собака» (Dog), который наследуется от класса «Животное» и добавляет дополнительное свойство цвета (color). Переопределите метод воспроизведения звука животного, чтобы он включал в себя цвет собаки. Создайте экземпляр класса Dog и заставьте его воспроизвести звук.
class Animal {
    constructor(kind, sound) {
        this.kind = kind;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.kind} скажет: ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(kind, sound, color) {
        super(kind, sound);
        this.color = color;
    }

    makeSound() {
        console.log(`Собака ${this.color} цвета скажет: ${this.sound}`);
    }
}

const myDog = new Dog("Собака", "Гав", "черный");

myDog.makeSound();


//3  Напишите программу на JavaScript, которая создает класс BankAccount со свойствами номера счета, имени владельца счета и баланса.
// Включите методы внесения, снятия и перевода денег между счетами. Создайте несколько экземпляров класса BankAccount и выполняйте такие операции, как внесение, снятие и перевод денег.
class BankAccount {
    constructor(accountNumber, owner, balance = 0) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${this.owner} внес ${amount}. Текущий баланс: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостаточно средств для снятия.");
        } else {
            this.balance -= amount;
            console.log(`${this.owner} снял ${amount}. Текущий баланс: ${this.balance}`);
        }
    }

    transfer(amount, toAccount) {
        if (amount > this.balance) {
            console.log("Недостаточно средств для перевода.");
        } else {
            this.balance -= amount;
            toAccount.balance += amount;
            console.log(`${this.owner} перевел ${amount} на счет ${toAccount.owner}.`);
        }
    }
}


//4
class Calculator {
    constructor() {
        this.firstValue = 0;
        this.secondValue = 0;
    }

    read() {
        this.firstValue = parseFloat(prompt("Введите первое число:"));
        this.secondValue = parseFloat(prompt("Введите второе число:"));
    }

    sum() {
        return this.firstValue + this.secondValue;
    }

    mul() {
        return this.firstValue * this.secondValue;
    }
}

// Пример использования
const calculator = new Calculator();
calculator.read();
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.mul());


//5
class Calculator {
    constructor() {
        this.firstValue = 0;
        this.secondValue = 0;
    }

    read() {
        this.firstValue = parseFloat(prompt("Введите первое число:"));
        this.secondValue = parseFloat(prompt("Введите второе число:"));
    }

    sum() {
        return this.firstValue + this.secondValue;
    }

    mul() {
        return this.firstValue * this.secondValue;
    }
}

// Пример использования
const calculator = new Calculator();
calculator.read();
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.mul());


//6
let calculator = {
    a: 0,
    b: 0,

    read: function() {
        this.a = parseFloat(prompt("Введите первое число:"));
        this.b = parseFloat(prompt("Введите второе число:"));
    },

    sum: function() {
        return this.a + this.b;
    },

    mul: function() {
        return this.a * this.b;
    }
};

calculator.read(); 
console.log("Сумма:", calculator.sum()); 
console.log("Произведение:", calculator.mul()); 


//7 Создайте объект ladder который позволяет "подниматься", "спускаться" и выводить на какой мы ступеньке:
let ladder = {
    step: 0,

    up: function() {
        this.step++; 
        return this;  
    },

    down: function() {
        this.step--; 
        return this; 
    },

    showStep: function() {
        console.log(this.step); 
        return this; 
    }
};

ladder.showStep(); 
ladder.up().up().down().showStep(); 
ladder.down().showStep(); 
ladder.down().showStep(); 
ladder.up().showStep(); 


//8 Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2 и возвращает его 
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    return obj; 
}

let myObj = {
    a: 1,
    b: 2,
    c: "Hello"
};

multiplyNumeric(myObj);
console.log(myObj); 


//9 Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false
function isEmpty(obj) {
    for (let key in obj) {
        return false; 
    }
    return true; 
}
let emptyObj = {};
let nonEmptyObj = { a: 1 };

console.log(isEmpty(emptyObj)); 
console.log(isEmpty(nonEmptyObj)); 


//10 Написать функции суммы sum и разности sub двух чисел
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function chooseFunction(a, b, func1, func2) {
    if (a > b) {
        return func1(a, b);
    } else {
        return func2(a, b); 
    }
}

// Пример использования
console.log(chooseFunction(5, 3, sum, sub)); 
console.log(chooseFunction(2, 4, sum, sub)); 