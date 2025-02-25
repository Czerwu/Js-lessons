// const arr = [1, "jablko", true]

//for(let i = 0; i < arr.length; i++) {
//  console.log(arr[i])
//}

// krok 1 -> i = 0 ; 0 < 3 ; console.log(1) -> i++
// krok 2 -> i = 1 ; 1 < 3 ; console.log("jablko") -> i++
// krok 3 -> i = 2 ; 2 < 3 ; console.log(true) -> i++
// krok 2 -> i = 3 ; 3 < 3 ; 

// let i = 0

//while(i < arr.length) {
//  console.log(arr[i])
//  i++
//}

// krok 1 -> 0 < 3 ; console.log(1) i++
// krok 2 -> 1 < 3 ; console.log("jablko") i++
// krok 3 -> 2 < 3 ; console.log(true) i++



const tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const osoba = {
    wiek: 17,
    imie: "Michał",
    przywitajSie: function() {
        console.log("Dzień dobry");
    }
};


osoba.przywitajSie();


function wiekszeNiz5(tablica) {
    return tablica.filter(num => num > 5);
}


function pomnozPrzezDwa(tablica) {
    return tablica.map(num => num * 2);
}


function sortujMalejaco(tablica) {
    return [...tablica].sort((a, b) => b - a);
}


console.log(wiekszeNiz5(tablica)); 
console.log(pomnozPrzezDwa(tablica)); 
console.log(sortujMalejaco(tablica)); 
