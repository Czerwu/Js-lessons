//Zamiast tworzyc osobne klasy mozna  stowrzyc jedna bazowoa klase, ktora bedzie miala wspolne wlasciwosci takie jak np. hp, nazwa oraz atak. 
//Bohater i potor bede otrzymywac te funckje i nie bedizemy duplikowac kodu.



class Hero {
    constructor(nazwa, hp, skills) {
        this.nazwa = nazwa;
        this.hp = hp;
        this.skills = skills;
    }

    atak(monster) {
        monster.hp -= 10; 
        console.log(`${this.nazwa} atakuje ${monster.nazwa} i zadaje 10 obrazen!`);
    }
}

class Monster {
    constructor(nazwa, hp) {
        this.nazwa = nazwa;
        this.hp = hp;
    }

    atak(hero) {
        hero.hp -= 5;
        console.log(`${this.nazwa} atakuje ${hero.nazwa} i zadaje 5 obrazen!`);
    }
}

class Skill {
    constructor(nazwa, efekt) {
        this.nazwa = nazwa;
        this.efekt = efekt;
    }

    uzyj(cel) {
        this.efekt(cel);
        console.log(`${cel.nazwa} uzywa ${this.nazwa}!`);
    }
}

const hero = new Hero("Wojownik", 100, ["Miecz", "Magia"]);
const monster = new Monster("Smok", 80);

const leczenie = new Skill("Leczenie", (cel) => {
    cel.hp += 70;
    console.log(`${cel.nazwa} zostal uleczony o 70 punktow HP!`);
});

const kulaOgnia = new Skill("Kula Ognia", (cel) => {
    cel.hp -= 70;
    cel.hp = Math.max(0, cel.hp);
    console.log(`${cel.nazwa} otrzymal 70 obrazen od Kuli Ognia!`);
});

hero.atak(monster);
monster.atak(hero);
leczenie.uzyj(hero);
kulaOgnia.uzyj(monster);
