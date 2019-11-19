/**
 * Exercice 1 :
 * Écrire un code qui affiche en fonction de l’âge, majeur ou mineur.
 */
    let age = +prompt("quel est votre age?") // Converti la donnée qui est une string en une valeur de type number
    if(age >= 18){
        alert("majeur");
    } else  {
        alert('mineur');
    }

/**
 * Exercice 2 :
 * Ecrire un code qui affiche en fonction de l’heure (entre 0 et 24) : Bon réveil (entre 0 et 8), Bonjour (entre 8 et 17),
 * Bonsoir (entre 17 et 22) et Bonne nuit (entre 22 et 8) et par défaut il affichera  Heuu.
 */
    let heure = prompt("quel heure il est ?");
    if(heure >= 0 && heure <= 8){
        alert("bon réveil");
    }
    else if(heure > 8 && heure <= 17){
        alert("Bonjour");
    }
    else if(heure > 17 && heure <= 22){ // Attention : ce n'est pas >= à 17 puisqu'on test déjà l'égalité à 17 dans la condition juste au dessus
        alert("Bonsoir");
    }
    else if(heure > 22 && heure <= 8){ // Pareil ici, c'est strictement suppérieur à 22,
        alert("Bonne nuit");
    }
    else{
        alert("Heu");
    }
/**
 * Exercice 3 :
 * Même que exercice 1, mais utilisé les conditions ternaires
 */
    let age2= +prompt("quel est votre age?") >= 18 ? alert("majeur") : alert("mineur"); // Pareil convertit en number
