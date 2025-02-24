// String -> "Imie"
// number -> 5
// boolean -> true / false
// undefined -> undefined
// null -> null

function dodaj(a, b) {
    return a + b;
}

function odejmij(a, b) {
    return a - b;
}

function pomnoz(a, b) {
    return a * b;
}

function podziel(a, b) {
    if (b === 0) {
        return "Nie można dzielić przez zero!";
    }
    return a / b;
}
