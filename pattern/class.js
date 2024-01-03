class BankAccount{
    costumerName;
    accountNumber;
    balance;

  constructor(costumerName,balance=0){
          this.accountNumber=Date.now();
          this.costumerName=costumerName;
          this.balance=balance;
  }

deposit(amount){
    this.balance+=amount;

}
  

}
const rakeshAccount =new BankAccount('Rakesh k',1000);
console.log(rakeshAccount);