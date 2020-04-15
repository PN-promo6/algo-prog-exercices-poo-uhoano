abstract class Item {
  name: string;
  size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
}

class Teleporter extends Item {
  energy: number;
  constructor(name: string, energy: number) {
    super(name, 3);
    this.energy = energy;
  }
}
class Arrow extends Item {
  power: number;
  constructor(name: string, power: number) {
    super(name, 1);
    this.power = power;
  }
}
class Player {
  playerName: string;
  sizeUsed: number;
  life: number;
  itemTab: Array<Item>;
  constructor(playerName: string) {
    this.playerName = playerName;
    this.sizeUsed = 0;
    this.life = 3;
    this.itemTab = new Array<Item>();
  }
  addItem(item: Item): boolean {
    if (this.sizeUsed + item.size <= 9) {
      this.itemTab.push(item);
      this.sizeUsed += item.size;
      console.log(item.name + "à été ajouté");
      return true;
    } else {
      console.log("INVENTAIRE PLEIN");
      return false;
    }
  }
}

let teleporterOne: Teleporter = new Teleporter("AZERTY", 300);
let teleporterTwo: Teleporter = new Teleporter("QWERTY", 1000);

let arrowOne: Arrow = new Arrow("Findus", 200);
let arrowTwo: Arrow = new Arrow("Goat", 3000);

let playerOne: Player = new Player("Cabrel");

playerOne.addItem(teleporterOne);
playerOne.addItem(teleporterOne);
playerOne.addItem(arrowOne);
