const jedi = [];

jedi[jedi.length] = "Luke";
// console.log(jedi);

jedi.push("Obi-Wan Kenobi");
// console.log(jedi);

jedi.unshift("Yoda");
// console.log(jedi);

console.log(jedi[1]);

jedi.splice(2, 1);
// console.log(jedi);

console.log(jedi.splice(1, 1));

const sithLords = [
    "Darth Vader",
    "Darth Sidious",
    "Darth Maul"
]

const imperialOfficers = [
    "Grand Moff Tarkin",
    "Orson Krennic"
]

const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

console.log(sithLords.slice(0, 2));

const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};

console.log(droids["astromech"]);

console.log(droids.protocol);

droids.assassin = "IG-11"
console.log(droids.assassin);




