class Personnage {
constructor(nom) {
this.nom = nom;
this.pointsDeVie = Math.floor(Math.random() * 101) + 50; 
this.attaque = Math.floor(Math.random() * 11) + 10; 
this.precision = Math.random() * 0.5 + 0.5; 
}

attaquer(adversaire) {
if (this.testerPrecision()) {
const degats = Math.floor(Math.random() * this.attaque) + 1; 
adversaire.pointsDeVie -= degats;
console.log(
this.nom + " attaque " + adversaire.nom + " et inflige " + degats + " dégâts !"
);
} else {
console.log(this.nom + " attaque " + adversaire.nom + " qui esquive sans effort !");
}
}

testerPrecision() {
return Math.random() < this.precision;
}
}


const Cesar = new Personnage("Cesar");
const Lion = new Personnage("Lion");


console.log("Statistiques des combattants :");
console.log(
Cesar.nom +
" - Points de vie : " +
Cesar.pointsDeVie +
", Attaque : " +
Cesar.attaque +
", Précision : " +
Cesar.precision.toFixed(2)
);
console.log(
Lion.nom +
" - Points de vie : " +
Lion.pointsDeVie +
", Rage : " +
Lion.attaque +
", Précision : " +
Lion.precision.toFixed(2)
);


console.log("\nDébut du combat !");
while (Cesar.pointsDeVie > 0 && Lion.pointsDeVie > 0) {
   
Cesar.attaquer(Lion);

   
if (Lion.pointsDeVie <= 0) {
console.log(Lion.nom + " À succombé ! " + Cesar.nom + " À Vaincu !");
break;
}
Lion.attaquer(Cesar);


if (Cesar.pointsDeVie <= 0) {
console.log(Cesar.nom + " À succombé ! " + Lion.nom + " À Vaincu ! !");
break;
}

console.log(
"Points de vie restants : " +
Cesar.nom +
" (" +
Cesar.pointsDeVie +
") - " +
Lion.nom +
" (" +
Lion.pointsDeVie +
")"
);
}

console.log("Fin du combat !");
