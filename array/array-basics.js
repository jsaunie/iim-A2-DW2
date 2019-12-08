/**
 * Exercice 1 :
 * Créez un tableau
 */let arrayBis = [];

/**
 * Exercice 2
 * Créez un tableau avec des valeurs initiales : "orange", "red", "pink", "blue"
 */
let array1 = new Array("orange", "red", "pink", "blue");
/**
 * Exercice 3
 * Créez un tableau ramplie de false et un maximum de 10 entrées
 */
let array2 = new Array(10).fill(false);
/**
 * Exercice 4
 * Créez un tableau et ajoutez-y plusieurs valeurs
 */
let array324 = [];
array324.push(1);
/**
 * Exercice 5
 * Créez un ntableau et affichez la valeur deuxième valeur
 */
// let array2=[1,2];
// array2[1];
// array2[array2.length-1];

/**
 * Exercice 6
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la deuxième valeur
 */
let array6 = new Array(10).fill(1);
console.log(array6);
array6.splice(1, 1);
console.log(array6);

/**
 * Exercice 7 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la première valeur
 */
let array7 = new Array(10).fill(1);
console.log(array7);
array6.shift();
console.log(array7);
/**
 * Exercice 8 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la dernière valeur
 */
let array8 = new Array(10).fill(1);
console.log(array8);
array8.pop();
console.log(array8);

/**
 * Exercice 9 :
 * Créez une matrice (un tableau à deux dimension x et y) et initialisez les valeurs
 * de x et y à 0
 */
let array9 = [
    [0, 0],
    [1, 2],
    [3, 4],
];

const mat = [
    // [0, 0, 1, 2 ... 10],
    // [0],
];
for (let i = 0; i < 10; i++) {
    mat.push([0]);
    for (let j = 0; j < 10; j++) {
        mat[i].push(j);
    }
}
/**
 * Exercice 10 :
 * Créez une matrice (un tableau à deux dimension x et y) et
 * affichez toute les valeurs
 */

for (let i = 0; i <= arr.length - 1; i++) {
// for (let i = 0; i < arr.length; i++) {
    console.log('ma position :', arr[i]); // si i = 0 =>  arr[0]
}

arr.forEach(function (o) {
    console.log('ma position 2 :', o);
});
/**
 * Exercice 11 : Bonus
 * Immutabilité
 */
// const arr1 = ['Tab 1'];
// const arr2 = arr1;
// arr1.splice(0, 1); // arr1 = []
// console.log('arr 1 :', arr1); // []
// console.log('arr 2 :', arr2); // []
//
// const arrr1 = ['Tab 1'];
// const arrr2 = [...arrr1]; // Toujours recréer un tableau;

