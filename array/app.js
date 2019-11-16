// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

function getRandomArray(limit = 30) {
    let arr = [];
    for (let i = 0; i < limit; ++i) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

/**
 * Exercice 1 :
 * Créez un tableau avec la fonction getRandomArray() et multipliez par deux chaque valeur du tableau
 */
const arr = getRandomArray();
const result = arr.map(e => e *2);
console.log('result', result);

/**
 * Exercice 2 :
 * Créez un tableau avec la fonction getRandomArray() et triez par ordre croissant les valeurs
 */
const arr2 = getRandomArray();
const result2 = arr2.sort((a, b) => a - b);
console.log('result2', result2);

/**
 * Exercicec 3.1 :
 * Créez un table avec la fonction getRandomArray() et additionnez toutes les valeurs entre elles
 */
const arr3 = getRandomArray();

console.log('reduce :', arr3.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;}, 0));
/**
 * Exercice 3.2 :
 * Créez un tableau avec la fonction getRandomArray() et remplacez chaque valeur par cette phrase
 * "Pair : VALUE" si la valeur est pair
 * "Impaire : VALUE" si la valeur est impair
 */
const arr4 = getRandomArray();
for (i=0;i<arr4.length;i++){
    let a = arr4[i]%2;
    if(a==1){
        arr4.splice(i,1,"impaire");
    }
    else{
        arr4.splice(i,1,"pair");
    }
}
console.log(arr4);
/**
 * Exercice 4 :
 * Créez un tableau avec la fonction getRandomArray() et filtrez seulement les valeurs pair puis ensuite impaire
 */
const arr5 = getRandomArray();
console.log(arr5.filter(arr5 => arr5%2==0));
console.log(arr5.filter(arr5 => arr5%2==1));