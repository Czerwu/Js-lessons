//Zamiast tworzyc osobne klasy mozna  stowrzyc jedna bazowoa klase, ktora bedzie miala wspolne wlasciwosci takie jak np. hp, nazwa oraz atak. 
//Bohater i potor bede otrzymywac te funckje i nie bedizemy duplikowac kodu.







class Hero {
    constructor(nazwa, hp, skills) {
        this.nazwa = nazwa;
        this.hp = hp;
        this.skills = skills;
    }

    atak(monster) {
        monster.hp = 10; 
        console.log(`${this.nazwa} atakuje ${monster.nazwa} i zadaje 10 obrazen!`);
    }
}

class Monster {
    constructor(nazwa, hp) {
        this.nazwa = nazwa;
        this.hp = hp;
    }

    atak(hero) {
        hero.hp = 5;
        console.log(`${this.nazwa} atakuje ${hero.nazwa} i zadaje 5 obrazen!`);
    }
}


const hero = new Hero("Wojownik", 100, ["Miecz"]);
const monster = new Monster("Smok", 80);

hero.atak(monster);
monster.atak(hero);