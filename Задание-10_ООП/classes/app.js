class Person {
    constructor(fristName, lastName,) {
        this.fristName = fristName;
        this.lastName = lastName;
    }

    greet() {
        return `Hello, ${this.fristName} ${this.lastName}`;
    }
}

const john = new Person('John', 'Doe');
const marri = new Person('Merri', 'Doe');
console.log(john.greet === marri.greet)
