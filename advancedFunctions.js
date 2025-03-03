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


const arr = [1, 2, 3]
arr.push(4)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(5)
console.log(arr)

