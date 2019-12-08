// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object

/**
 * Exercice 1 :
 * Créer un objet avec comme propriété âge, name et notes (un tableau de note)
 */

const obj = {
    name: 'Jean',
    age: 21,
    notes: [12, 20],
};
obj.name = "Andrew";
console.log(obj);

const arr = [obj, obj, obj];
arr.map(o => console.log(o.name));
/**
 * Exercice 2 :
 * Affichez la meilleur note
 */

const notesSorted = obj.notes.sort(function (a, b) {
    return a - b;
});
console.log('best note :', notesSorted[notesSorted.length -1]);

/**
 * Exercice 3 :
 * Affichez toutes les propriété dans un tableau
 */
console.log(Object.keys(obj));

