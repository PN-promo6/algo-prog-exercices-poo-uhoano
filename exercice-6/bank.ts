// class User {
//   firstName : string;
//   lastName : string;
//   birthDay : string;
//   constructor(firstName : string , lastName : string , birthDay?: string){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.birthDay = birthDay;
//   }
//
//   displayInfo(){
//     console.log(this.firstName + ' ' +  this.lastName + ' ' + this.birthDay )
//   }
// }
//
// let frank :User = new User("Frank" , "Dupont" , "23")
// frank.displayInfo()
// let vincent :User = new User("Vincent" , "Dupont")
// vincent.displayInfo()

class Client {
  private name: string;
  private accountNumber: number;
  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getAccountNumber() {
    return this.accountNumber;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}

class ClientProfessionnel extends Client {
  siretNumber: number;

  constructor(name: string, accountNumber: number, siretNumber: number) {
    super(name, accountNumber);
    this.siretNumber = siretNumber;
  }
  getSiretNumber() {
    return this.siretNumber;
  }
}

let frank: Client = new Client("Frank", 333333333);
console.log(frank.getAccountNumber());
frank.setName("Francis");
console.log(frank.getName());
let paul: ClientProfessionnel = new ClientProfessionnel(
  "Paul",
  1234567,
  987456321
);
console.log(paul.getName());
console.log(paul.getAccountNumber());
console.log(paul.getSiretNumber());
