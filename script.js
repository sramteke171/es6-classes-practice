// class Player {
//     constructor(name, height) {
//         this.name = name;
//         this.height = height;
//     }
//     return() {
//         console.log("run method");
//     }
// }
// let i1 = new Player('sachin', '5/7');
// console.log(i1);



class ATM {
    constructor(type) {
        this.type = type;
        this.money = 0;
        this.tranHistory = [];
    }

    withdraw(amt) {
        console.log(`withdraw Amt is $ ${amt}`);
        this.money = this.money - amt;
        this.tranHistory.push(amt);
    }
    deposit(amt) {
        console.log(`deposited ${amt}`);
        this.money = this.money + amt;
        this.tranHistory.push(amt);
    }
    showBalance() {
        console.log(`your balance is $ ${this.money}`);
    }
    transactions() {
        console.log(this.tranHistory);
    }

}

let b = new ATM('checking');
console.log(b);

b.transactions()


//console.log(b.withdraw(5));
//console.log(b.deposit(10));
//console.log(b.showBalance());

// class Atm {
//     constructor(type) {
//       this.type = type;
//       this.money = 0;
//       this.transactionHistory = [];
//     }
//     withdraw(amount) {
//       this.money -= amount;
//       this.transactionHistory.push(-amount);
//     }
//     deposit(amount) {
//       this.money += amount;
//       this.transactionHistory.push(amount);
//     }
//     showBalance() {
//       console.log(`Your balance is: $${this.money}`);
//     }
//   }
//   const myAtm = new Atm('checking');
//   console.log(myAtm);
//   console.log(myAtm.withdraw(200));