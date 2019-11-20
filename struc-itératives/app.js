/**
 * Exercice 1 :
 * En utilisant une boucle for, affichez une suite de nombre allant de 0 à 30 avec l’information pair ou impaire.
 */
    for (let i=0; i<= 30;i++){
        console.log(i); // Il manque l'information pair ou impaire
        if (i%2) {
            console.log('Inpaire');
        } else {
            console.log('pair');
        }
    }
/**
 * Exercice 2 :
 * Tant que la variable i égale à 0 est inférieur à 30 affichez Premier mois,
 * ou alors si i est supérieur à 30 et inférieur à 60 affichez Deuxième mois, sinon affichez Reste de l’année 
 */
let j= 0;
while( j<=60){
    if(j>= 0 && j<= 30){
        console.log("premiers mois");
    }
    else if(j>30 && j<= 60){
        console.log("deuxième mois");
    }
    else{  // puisque le while ne va pas au dessus de 60 on ne rentrera jamais dans cette condition
        console.log("reste de l'année");
    }
    j++;
}

/**
 * Exercice 3 :
 * Même que exercice 1, mais utiliser le modulo pour savoir si le nombre est pair ou impaire, ainsi que du ternaire.
 */
for (let i=0; i<= 30;i++){
    modulo= i%2
    modulo == 1 ? console.log("impaire") : console.log("paire");
}
