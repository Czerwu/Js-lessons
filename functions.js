// Plik: functions.js

// Funkcja dodawania dwóch liczb
function dodaj(a, b) {
    return a + b;
}

// Funkcja odejmowania dwóch liczb
function odejmij(a, b) {
    return a - b;
}

// Funkcja mnożenia dwóch liczb
function pomnoz(a, b) {
    return a * b;
}

// Funkcja dzielenia dwóch liczb (z zabezpieczeniem przed dzieleniem przez 0)
function podziel(a, b) {
    if (b === 0) {
        return "Nie można dzielić przez zero!";
    }
    return a / b;
}

// Eksportowanie funkcji (przydatne, jeśli będziesz używać Node.js)
module.exports = { dodaj, odejmij, pomnoz, podziel };
