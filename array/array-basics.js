/**
 * Exercice 1 :
 * Créez un tableau
 */
let array = [];
/**
 * Exercice 2
 * Créez un tableau avec des valeurs initiales : "orange", "red", "pink", "blue"
 */
let array1 = new Array('orange', "red", "pink", "blue");
//let array1 = ['orange', "red", "pink", "blue"];
/**
 * Exercice 3
 * Créez un tableau ramplie de false et un maximum de 10 entrées
 */
let array2 = new Array(10).fill(false);
/**
 * Exercice 4
 * Créez un tableau et ajoutez-y plusieurs valeurs
 */
let array=[];
array.push(1);
/**
 * Exercice 5
 * Créez un tableau et affichez la valeur deuxième valeur
 */
let array=[1, 2];
array2[1];
array2[array2.length-1];
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
 * Créez une matrice (un tableau à deux dimension x et y) et initialisez les valeurs de x et y à 0
 */
let array9 = [[0, 0],[0, 0],[0, 0]];
/**
 * Exercice 10 :
 * Créez une matrice (un tableau à deux dimension x et y) et affichez toutes les valeurs
 */
let array10 = [[0, 0],[0, 0],[0, 0]];
for(let i = 0; i<= arr.length -1; i++){
    console.log('ma position :', arr[i]);
}

arr.forEach(function (o){
    console.log('ma position 2 :, o');
});