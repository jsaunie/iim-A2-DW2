/**
 * Exercice 1 :
 * créer une fonction avec un argument, qui affiche l’argument
 */
function cons(arg){
    console.log(arg);
}
cons("hello");

/**
 * Exercice 2 :
 * créer une fonction qui prend un nombre en argument et qui le multiplie par deux et retourne le résultat.
 */
function mutiple(Nb) {
    let a=+Nb*2;
    console.log(a);
}
mutiple(5);

/**
 * Exercice 3 :
 * créer une fonction qui détermine si le nombre passé en argument est pair ou impaire.
 */
 function checkd(Nb) {
     let b = Nb%2;
    if(b==0){
        console.log("pair");
    }
    else if(b==1){
        console.log("impaire");
    }
}
checkd(5);
/**
 * Exercice 4 :
 * Créer une fonctionne qui s’invoque elle-même
 */
function loopyland(arg) {
    loopyland(arg) // Attention là, si tu appelles ta fonction tu créés un call infinie, elle ne va jamais s'arrêter de s'appeler
    // il faut mettre une condition et stoper le code dans ta condition pour eviter ça
}
// Correction
(function corr4(a) {
    console.log('bonjour :', a);
})(1);

/**
 * Exercice 5 :
 * Affichez la liste des arguments dans un tableau, sans directement utilisez les arguments en eux même
 */
a= ["a","b","v","d"];
function list(arg) {
    // Oublie pas "let i = 0" il faut instancer i
    for (i=0;i < arg.length;i++){ 
        console.log(arg[i]);
    }

}
list(a);
// Corection
// Ta proposition est bonne simplement attention à instancier la variable i à la ligne 5

function correc5(a, b, c) {
    console.log(arguments);
}

correc5(1, 2, 3);

/**
 * Exercice 6 :
 * Reproduire la suite de fibonnachi : 1-1-2-3-5-8-9-18
 */
function fibonacci(nbr) {
    if(nbr < 2){
        return nbr;
    }
    return fibonacci(nbr - 1) + fibonacci(nbr - 2);
}
console.log(fibonacci(8));
