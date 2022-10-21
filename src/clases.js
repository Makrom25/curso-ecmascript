//declarando
// class User {};

//instancia de una clase
// const newUser = new User();

// class 1 {
//     // metodos
//     greeting() {
//         return 'helloo';
//     }
// }

// const gndx = new 1();
// console.log(gndx.greeting);
// const bebeloper = new 1();
// console.log(bebeloper.greeting)
// // constructor
// class 1 {
//     //constructor
//     constructor() {
//         console.log('Nuevo Usuario');
//     }
//     greeting() {
//         return 'Hello';
//     }

// }

// const david = new 1();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return 'Hello';

    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');

console.log(ana.greeting());

// setters getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);