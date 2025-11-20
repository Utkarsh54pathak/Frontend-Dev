class BankAccount{
    #balance
    constructor(owner,startingAmount){
        this.owner = owner;
        this.#balance = startingAmount;
    }
    deposit(amount){
        this.#balance += amount;
    }
    withdrawal(amount){
        if(amount>this.#balance){
            console.log("Insuf balance gareeb");
        }
        else {
            this.#balance -= amount;
        }
    }

    getBalance(){
        return this.#balance;
    }
}

