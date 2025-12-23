// Encapsulation 

class Bankaccount{
    #balance=0;
    deposit(amount){
        this.#balance+=amount;
        return `$ ${this.#balance} deposited successfully`;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}
let myaccount=new Bankaccount();
console.log(myaccount.deposit(500));
console.log(myaccount.getBalance());
console.log(myaccount.balance);