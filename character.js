class Character {
  constructor(name, hitPoints, strength) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.strength = strength;
  }
  printStats() {
    console.log('Name:', this.name);
    console.log('Hit points:', this.hitPoints);
    console.log('Strength:', this.strength);
  }
}

var vik = new Character('Vik', 50, 10);
var carter = new Character('Carter', 40, 15);
vik.printStats();
carter.printStats();

// var vik = {
//   name: 'Vik',
//   strength: 10,
//   hitPoints: 50,
//   printStats: function() {


//   },
//   attack: function(opponent) {

//   }
// }