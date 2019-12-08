/**
 * Exercice 1 :
 * créer une fonction avec un argument, qui affiche l’argument
 */
function test(argument) {
    console.log(argument);

}

test("Salut ca va ");

/**
 * Exercice 2 :
 * créer une fonction qui prend un nombre en argument et
 * qui le multiplie par deux et retourne le résultat.
 */
function multiplie(nb1, nb2) {
    return +nb1 + +nb2;
}

console.log(multiplie("4", 2));

/**
 * Exercice 3 :
 * créer une fonction qui détermine si le nombre passé en argument est pair ou impaire.
 */

function modulo(nb) {
    if (nb % 2) {
        return "Impaire";
    } else {
        return "Pair";
    }
    // return nb % 2 ? "Impair" : "Pair";
}

console.log(modulo(3));
console.log(modulo(4));

/**
 * Exercice 4 :
 * Créer une fonctionne qui s’invoque elle-même
 */
(function hello(a) {
    console.log('bonjour :', a);
})(1);

// }(1));

/**
 * Exercice 5 :
 * Affichez la liste des arguments dans un tableau,
 * sans directement utiliser les arguments en eux même
 */

function displayArg(a, b, c) {
    console.log(arguments);
}

displayArg(1, 2, 3);

/**
 * Exercice 6 : Bonus
 * Reproduire la suite de fibonacci : 1-1-2-3-5-8-13-21
 */
function fibonacci(nb) {
    if (nb < 2) {
        return nb;
    }
    console.log('fib :', nb);
    return fibonacci(nb - 1) + fibonacci(nb - 2);
}

// console.log(fibonacci(12));

function fibonacci2(nb = 0) {
    if (nb === 0) {
        return 0;
    }

    if (nb === 1) {
        return 1;
    }
    if (nb < 22) {
        return fibonacci2(nb -1) + fibonacci2(nb - 2);
    }
}

console.log(fibonacci2(0));








