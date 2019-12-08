// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

/**
 * Exercice 1 :
 * Affichez la lettre à la position 2
 */
const char1 = "Bonjour";
console.log(char1[1]);

/**
 * Exercice 2 :
 * Affichez la taille de cette string
 */
const char2 = "Hello my name is ";
console.log(char2.length);
/**
 * Exercice 3 :
 * Créez un tableau contenant les mots de cette phrase
 * Exemple :
 *  string -> "Hi John Doe"
 *  expected -> ["hi", "John", "Doe"]
 */
const char3 = "Hello my name is ";
const char3Split = char3.split(" ");
console.log(char3Split);
// const array = ['Hello','John','Doe']

/**
 * Exercice 4 :
 * Concaténez les chaines de caractères entre elle
 */
const word1 = "Oui ";
const word2 = "ou Non";
console.log(word1 + word2);

/**
 * Exercice 4 :
 * Insérez une variable dans la variable phrase et affichez phrase
 * Remarque : Ne pas concaténer
 */
const age = 10;
const phrase = `Mon âge est ${age} ans`;
console.log(phrase);


/**
 * Exercice 5 :
 * Supprimez les 5 derniers charactères de la chaine
 */
const char5 = "les prochains caractères";
char5.substr(0, char5.length - 5);

/**
 * Exercice 6 :
 * Remplacer le mot "oranges" par "bananes", en utilisant une fonction bien sûr 😅
 */
const char6 = "j\'aime les oranges";
char6.replace('oranges', 'bananes');

/**
 * Exercice 7 :
 * Trouvez la position du mot "orange"
 */
const char7 = "des oranges";
char7.search('oranges');

/**
 * Exercice 8 :
 * Vérifier si la première phrase contient le mot "baleine"
 */
const char8 = "Baleine bleu";
char8.toLowerCase().includes('baleine');
/**
 * Exercice 9 :
 * Affichez cette phrase en minuscule, puis en majuscule
 */
const char9 = "Bonjour Je Suis Dan, Je Viens Du Sud !";
console.log('minuscule :', char9.toLowerCase());
console.log('majuscule :', char9.toUpperCase());

/**
 * Exercice 10 : Bonus
 * Effacez les espaces inutiles
 */
const char10 = '   Supprimez les espaces avant et après cette phrase    ';
console.log('char 10 :', char10.trim());
/**
 * Exercice 11 : Bonus
 * Écrire cette phrase en :
 * - SnakeCase
 * - Kebab-case
 * - CamelCase
 */
let str = '   Supprimez les espaces avant et après cette phrase    ';
str = str.trim();
// const space = / /g;
// str.replace(space, '_');
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
const arr = str.split(' ');
arr.join('_');
const arr2 = str.split(' ');
arr2.join('-');

camelize(str);

// Ou
const str7 = '   Supprimez les espaces avant et après cette phrase    ';
console.log(str7.trim().replace(/ /g,"_").toLowerCase());
console.log(str7.trim().replace(/ /g,"-").toLowerCase());

