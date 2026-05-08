// Kazde zadanie powinno miec napisane rozwiazanie oraz wyjasnienie w kilku zdaniach o tym jak to dziala.

/*
ZADANIE 1
Napisz funkcję reverseWords(str), która odwraca kolejność słów
w zdaniu.

"Ala ma kota" -> "kota ma Ala"
*/

// Rozwiazanie:
function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}
reverseWords("Ala ma kota"); 
// Wyjasnienie: Split dzieli tekst po spacjach. Reverse odwraca kolejność elementów. Join łączy tablice i tekst z powrotem.

/*
ZADANIE 2
Napisz funkcję countVowels(str), która zwróci liczbę liter w tekscie
Wielkość liter nie ma znaczenia.
*/

// Rozwiazanie:
function countLetters(str) {
    return str
        .replace(/\s/g, "")
        .split("")
        .length;
}

console.log(countLetters("Ala ma kota"));
// Wyjasnienie: Filter przechodzi po każdej literze i zostawia tylko te które są samogłoskami (nie rozumiem jak działa includes.char). Length pokazuje ile elementów zostało w tablicy.

/*
ZADANIE 3
Napisz funkcję ktora przy uzyciu pętli for zwraca tablice zawierajaca tylko liczby parzyste z tablicy arr.

[1,2,3,4,5,6,7,8,9,10] -> [2,4,6,8,10]
*/

// Rozwiazanie:
function evenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}

console.log(evenNumbers([1,2,3,4,5,6,7,8,9,10]));
// Wyjasnienie: 
//for → przechodzi po każdym elemencie tablicy
//% → sprawdza resztę z dzielenia
//=== 0 → sprawdza czy liczba jest parzysta
//push() → dodaje element do tablicy
//return → zwraca gotowy wynik


/*
ZADANIE 4
Napisz funkcję isPalindrome(str), która sprawdza czy tekst
jest palindromem (ignoruj spacje i wielkość liter).
*/

// Rozwiazanie:
function isPalindrome(str) {

    let cleaned = str
        .toLowerCase()
        .replace(/\s/g, "");

    let reversed = cleaned
        .split("")
        .reverse()
        .join("");

    return cleaned === reversed;
}

console.log(isPalindrome("Kobyla ma maly bok"));


// Wyjasnienie: 
//toLowerCase() → zamienia litery na małe
//replace() → usuwa spacje
//pętla od końca → odwraca tekst
//=== → porównuje dwa teksty
//return → zwraca true albo false

/*
ZADANIE 5
Napisz funkcję flatten(arr), która spłaszcza tablicę
zagnieżdżoną o dowolnej głębokości.

[1,[2,[3,4],5]] -> [1,2,3,4,5]
*/

// Rozwiazanie:
function flatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(flatten([1,[2,[3,4],5]]));

// Wyjasnienie:
//Array.isArray() → sprawdza czy element jest tablicą
//rekurencja → funkcja uruchamia samą siebie
//concat() → łączy tablice
//push() → dodaje pojedynczy element

/*
ZADANIE 6
Stwórz funkcję ktora przyjmuje tablice liczb i zwraca srednia arytmetyczna tych liczb.
*/

// Rozwiazanie:
function average(arr) {

    let sum = arr.reduce((acc, number) => acc + number, 0);

    return sum / arr.length;
}

console.log(average([2,4,6,8]));

// Wyjasnienie:
//zmienna sum → przechowuje sumę liczb
//+= → dodaje kolejne liczby do sumy
//arr.length → zwraca ilość elementów
// / → dzieli sumę przez ilość liczb
/*
ZADANIE 7
Napisz klasę, ktora posluzy do tworzenia obiektow osobowych.

Klasa powinna miec pola:
- imie
- nazwisko
- wiek
- plec

Klasa powinna miec metody:
- zmiana nazwiska, ktora zmieni nazwisko na nowe
- zmiana imienia, ktora zmieni imie na nowe
- stazenie się, ktora zwiekszy wiek o 1
*/

// Rozwiazanie:
class Osoba {
    constructor(imie, nazwisko, wiek, plec) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.plec = plec;
    }

    zmienNazwisko(noweNazwisko) {
        this.nazwisko = noweNazwisko;
    }

    zmienImie(noweImie) {
        this.imie = noweImie;
    }

    starzenie() {
        this.wiek += 1;
    }
}

// Wyjasnienie:
//lass → tworzy szablon obiektu
//constructor() → ustawia początkowe dane
//this → odnosi się do konkretnego obiektu
//metody → wykonują operacje na danych obiektu

/*
ZADANIE 8
Napisz funkcje ,ktora bedzie analizowac tekst i zwracac ilosc slow, liter, cyfr, znakow specjalnych jako obiekt.

{
    slow: 10,
    litery: 100,
    cyfry: 10,
    znakiSpecjalne: 10
}

*/

// Rozwiazanie:
function analyzeText(text) {
    let result = {
        slow: 0,
        litery: 0,
        cyfry: 0,
        znakiSpecjalne: 0
    };

    let words = text.trim().split(/\s+/);
    result.slow = words.length;

    for (let char of text) {
        if (/[a-zA-Z]/.test(char)) {
            result.litery++;
        } else if (/[0-9]/.test(char)) {
            result.cyfry++;
        } else if (!char.match(/\s/)) {
            result.znakiSpecjalne++;
        }
    }

    return result;
}

console.log(analyzeText("Hej 123 !!!"));

// Wyjasnienie:
//split() → dzieli tekst na słowa
//regex /[a-zA-Z]/ → sprawdza litery
//regex /[0-9]/ → sprawdza cyfry
//for...of → przechodzi po każdym znaku tekstu
//licznik ++ → zwiększa wartość o 1
// regex to wzożec do wyszukiwania tekstu np sprawdza czy znak jest litera

/*
ZADANIE 9
Napisz klase Math, ktora bedzie rozwiazywac podstawowe operacje matematyczne:

- dodawanie
- odejmowanie
- mnozenie
- dzielenie
- potegowanie
- pierwiastkowanie
- silnia
- potega
- pierwiastek

// Rozwiazanie:
class MathOperations {

    static dodawanie(a, b) {
        return a + b;
    }

    static odejmowanie(a, b) {
        return a - b;
    }

    static mnozenie(a, b) {
        return a * b;
    }

    static dzielenie(a, b) {
        return b !== 0 ? a / b : "Błąd";
    }

    static potega(a, b) {
        return a ** b;
    }

    static pierwiastek(a) {
        return Math.sqrt(a);
    }

    static silnia(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Wyjasnienie:
//static → metoda działa bez tworzenia obiektu
//+ - * / → podstawowe działania matematyczne
//Math.sqrt() → oblicza pierwiastek
//** → potęgowanie
//pętla w silni → mnoży liczby po kolei

/*
ZADANIE 10
Stworz klase, ktora bedzie systemem bankowym, bedzie zawierala, uzytkowikow, ich stan konta, oraz metody do wplacania i wyplacania pieniedzy, oraz sprawdzania stanu konta i historii transakcji.

// Rozwiazanie:
class BankSystem {

    constructor() {

        this.owners = [];

        this.history = [];
    }

    addUser(name) {

        this.owners.push({
            name: name,
            balance: 0
        });
    }

    deposit(name, amount) {

        let user = this.owners.find(
            user => user.name === name
        );

        if (user) {

            user.balance += amount;

            this.history.push({
                user: name,
                type: "deposit",
                amount: amount
            });
        }
    }

    withdraw(name, amount) {

        let user = this.owners.find(
            user => user.name === name
        );

        if (user && user.balance >= amount) {

            user.balance -= amount;

            this.history.push({
                user: name,
                type: "withdraw",
                amount: amount
            });
        }
    }

    checkBalance(name) {

        let user = this.owners.find(
            user => user.name === name
        );

        return user ? user.balance : "Brak użytkownika";
    }

    getHistory(name) {

        return this.history.filter(
            transaction => transaction.user === name
        );
    }
}

// Wyjasnienie:
//balance → przechowuje stan konta
//deposit() → dodaje pieniądze
//withdraw() → odejmuje pieniądze
//history.push() → zapisuje operacje
//if → sprawdza czy są środki na koncie
//return → zwraca stan konta lub historię
*/
