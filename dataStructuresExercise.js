const jedi = [];

jedi[0] = "Luke";
console.log(jedi);

jedi.push("Obi-Wan Kenobi");
console.log(jedi);

jedi.unshift("Yoda");
console.log(jedi);

console.log(jedi[1]);

jedi.splice(2, 1);
console.log(jedi);

console.log(jedi.splice(1, 1));

const sithLords = [
    "Darth Vader",
    "Darth Sidious",
    "Darth Maul"
];

const imperialOfficers = [
    "Grand Moff Tarkin",
    "Orson Krennic"
];

const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

console.log(starWarsVillians.slice(0, 2));

const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};

console.log(droids["astromech"]);

console.log(droids.protocol);

droids.assassin = "IG-11";
console.log(droids.assassin);

console.log(sithLords[0][6]);

console.log(sithLords.slice(-2, -1));

const starWarsMovies = {
    Object1: {
        episodeOne: "The Phantom Menace",
        episodeTwo: "Attack of the Clones",
        episodeThree: "Revenge of the Sith"
    },
    Object2: {
        episodeFour: "A New Hope",
        episodeFive: "Empire Strikes Back",
        episodeSix: "Return of the Jedi"
    },
    Object1: {
        episodeSeven: "The Force Awakens",
        episodeEight: "The Last Jedi",
        episodeNine: "The Rise of Skywalker"
    }
};

// starWarsMovies.splice(1, 2, "Solo", "Rogue One");



