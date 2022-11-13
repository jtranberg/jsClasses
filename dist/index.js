"use strict";
// class Player {
//    public  first: string;
//    public readonly last: string;
//    private score: number= 0;                   //anotation ..number ..not needed.. private is cleaner
//   //#score: number= 0;          true javascript private..#
//     constructor (first: string, last: string) {
//        this.first = first;
//        this.last = last;
//     }
//     secretMethod(): void {
// console.log("secret method");
//     }
// }
// const elton = new Player("elton", "jam");
// elton.secretMethod();
// pblic private
// class Player {
// public  first: string;
// public readonly last: string;
// private score: number= 0;                   //anotation ..number ..not needed.. private is cleaner
//#score: number= 0;          true javascript private..#
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("secret method");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("score cannot be negative number");
        }
        this._score = newScore;
    }
}
class SuprPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99999; //Protected is only accessable in child classes
    }
}
const elton = new Player("elton", "jam", 100);
elton.secretMethod();
elton.fullName;
elton.score = 1;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("alpine", "red");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greeta() {
        console.log("HELLO!!!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 99999);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "perth", 24, 1100);
console.log(bill.getPay());
