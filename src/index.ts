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
     constructor (
        public first: string, 
        public last: string,
        protected _score: number
        ) {}

     secretMethod(): void {
 console.log("secret method");
     }
get fullName(): string {
    return `${this.first} ${this.last}`
}
get score(): number {
    return this._score;
}
set score(newScore: number) {
    if(newScore < 0) {
        throw new Error("score cannot be negative number")
    }
    this._score = newScore;
  }
}

class SuprPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore(){
    this._score = 99999;      //Protected is only accessable in child classes
  }
}
 
 const elton = new Player("elton", "jam", 100 );
 elton.secretMethod();
 elton.fullName;
 elton.score = 1;


 interface Colorful {
    color: string;
 }

 interface Printable {
    print(): void;
 }

 class Bike implements Colorful {
constructor (public color: string){}
 
 }

 class Jacket implements Colorful {
    constructor(public brand: string, public color: string ) {}
 
print() {
    console.log(`${this.color} ${this.brand} jacket`);
   }
 }
const bike1 = new Bike("red");
const jacket1 = new Jacket("alpine", "red");

 abstract class Employee {
  constructor(public first: string, public last: string) {}
   abstract getPay(): number;
   greeta(){
    console.log("HELLO!!!");
   }
  }

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number){
        super(first, last);
    }

getPay() {
    return this.salary;
}
}
class PartTimeEmployee extends Employee {
    constructor(
        first:string, last: string, 
        private hourlyRate : number, 
        private hoursWorked: number)
        {
            super(first, last);
        }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 99999);

console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "perth", 24,  1100);
console.log(bill.getPay());