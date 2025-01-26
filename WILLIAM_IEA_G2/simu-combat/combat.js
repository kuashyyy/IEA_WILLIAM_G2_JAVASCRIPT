class Combattant {

    constructor(name, hp, attack, precision) {
        this.name = name;
        this.hp = hp;
        this.attack =  attack;
        this.precision =  precision;
    }

    getAttack(adversaire) {
        if (this.attackPrecision()) {
            console.log(this.name + " inflige " + this.attack + " de dégâts !");
            adversaire.hp -= this.attack;
            if (adversaire.hp < 0) adversaire.hp = 0;
            console.log(adversaire.name + " perd " + this.attack + " de points de vie !")
        } else {
            console.log(this.name + " rate son attaque !");
        }
    }

    attackPrecision() {
        const chance = Math.random();
        return chance < this.precision
    }
}

const Atticus = new Combattant("Atticus", 200, 120, 0.72);
console.log("Nom : Atticus");
console.log("PV d'Atticus : " + Atticus.hp);
console.log("PA d'Atticus : " + Atticus.attack);
console.log("PP d'Atticus : " + Atticus.precision);

const lion = new Combattant("Le lion", 140, 140, 0.46);
console.log("\nAnimal : Un lion");
console.log("PV du lion : " + lion.hp);
console.log("PA du lion : " + lion.attack);
console.log("PP du lion : " + lion.precision);


console.log("\nDébut du combat :");

while (Atticus.hp > 0 && lion.hp > 0) {
    console.log("\nTour d'Atticus :");
    Atticus.getAttack(lion);
    if (lion.hp <= 0) {
      console.log("\nLe lion est mort !");
      console.log("Atticus a gagné le combat !");
      break;
    }
 
    console.log("\nTour du lion :");
    lion.getAttack(Atticus);
    if (Atticus.hp <= 0) {
      console.log("\nAtticus est mort !");
      console.log("Le Lion a gagné le combat !");
      break;
    }

    console.log("\nStatut actuel :");
    console.log("PV d'Atticus : " + Atticus.hp);
    console.log("PV du Lion : " + lion.hp);
}

console.log("\nFin du combat");