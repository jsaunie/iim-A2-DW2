/**
 * Exercice 1 :
 * Écrire un code qui affiche en fonction de l’âge, majeur ou mineur.
 * prompt
 */
const age = +prompt('ton age ?'); // Converti la donnée qui est une string en une valeur de type number

if (age >= 18) {
    alert('majeur');
} else  {
    alert('mineur');
}

/**
 * Exercice 2 :
 * Ecrire un code qui affiche en fonction de l’heure (entre 0 et 24) : Bon réveil (entre 0 et 8), Bonjour (entre 8 et 17),
 * Bonsoir (entre 17 et 22) et Bonne nuit (entre 22 et 0) et par défaut il affichera  Heuu.
 */

const hour = +prompt('ton heure');

/*if (hour >= 0 && hour <= 8) {
    alert('Bon réveil');
} else if (hour > 8 && hour <= 17 && hour >= 13 ) { // Attention : ce n'est pas >= à 17 puisqu'on test déjà l'égalité à 17 dans la condition juste au dessus
    alert('Bonjour')
} else if (hour > 8 && hour <= 17) {
    alert('Bonjour')
} else if (hour > 8 && hour <= 17) {
    alert('Bonjour')
}*/

switch (true) {
    case (hour >= 0 && hour <= 8):
        alert('Bon réveil');
    break;
    case (hour > 8 && hour <= 17):
        alert('Bon réveil');
    break;
    default:
        alert('Bonne nuit ');
        break;

}

/**
 * Exercice 3 :
 * Même que exercice 1, mais utilisé les conditions ternaires
 */


+prompt('ton age ?')  >= 18  ? alert('majeur') : alert('mineur');
alert(+prompt('ton age ?')  >= 18  ? 'majeur' : 'mineur');
