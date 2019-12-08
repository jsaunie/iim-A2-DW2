/**
 * Exercice 1 :
 * En utilisant une boucle for, affichez une suite de nombre allant de 0 à 30 avec l’information pair ou impaire.
 */

for (let i = 0; i <= 30; ++i) {
    console.log('i :', i, i % 2, (i % 2) ? 'impaire' : 'pair');
}

/**
 * Exercice 2 :
 * Tant que la variable i égale  ou supérieur à 0 et est inférieur à 30 affichez Premier mois,
 * ou alors si i est supérieur à 30 et inférieur à 60 affichez Deuxième mois, sinon affichez Reste de l’année 
 */
let i = 0;
for (i ; i <= 30; ++i) {

    if(i >= 0 && i <= 30) {
        console.log('Premier mois');
    } else if (i > 30 && i <= 60) {
        console.log('Deuxième mois');
    } else {
        console.log("Reste de l'année")
    }

}

let j = 0;
while (j <= 60) {
    if(j >= 0 && j <= 30) {
        console.log('Premier mois');
    } else if (j > 30 && j <= 60) {
        console.log('Deuxième mois');
    } else {
        console.log("Reste de l'année")
    }
    ++j;
}

/**
 * Exercice 3 :
 * Même que exercice 1, mais utiliser le modulo pour savoir si le nombre est pair ou impaire, ainsi que du ternaire.
 */
