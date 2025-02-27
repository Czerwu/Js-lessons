class Character {
    constructor(nazwa, hp) {
        this.nazwa = nazwa;
        this.hp = hp;
    }

    atak(przeciwnik, obrazenia) {
        przeciwnik.hp -= obrazenia;
        przeciwnik.hp = Math.max(0, przeciwnik.hp);
        console.log(`${this.nazwa} atakuje ${przeciwnik.nazwa} i zadaje ${obrazenia} obrazen!`);
    }
}

class Hero extends Character {
    constructor(nazwa, hp, skills) {
        super(nazwa, hp);
        this.skills = skills;
    }
}

class Monster extends Character {
    constructor(nazwa, hp) {
        super(nazwa, hp);
    }
}


const hero = new Hero("Wojownik", 100, ["Miecz", "Magia"]);
const monster = new Monster("Smok", 80);

hero.atak(monster, 10);
monster.atak(hero, 5);
