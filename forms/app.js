/**
 * Exercice 1 :
 * - Vérifiez que le dom est bien créé
 * - Sélectionnez l'input par son id
 * - Ajoutez un événement lorsque la valeur de l'input change
 * - Stockez la valeur du contenu
 * - Créez et sélectionnez une balise <p></p> via son id
 * - Insérez ce contenu dans la balise p créé
 */
document.addEventListener('DOMContentLoaded',function () {
    document.addEventListener("change", function () {
        let input = document.getElementById("input").value;
        document.getElementById("content").innerText=input;
    });

});

// Correction
// J'ai testé, ta réalisation fonctionne mais il faut appuyer sur entrée
document.addEventListener('DOMContentLoaded', function () { // Vérifiez que le dom est bien créé
    let input = document.getElementById("input"); // Sélectionnez l'input par son id
    input.addEventListener('input', function (el) {  // Ajoutez un événement lorsque la valeur de l'input change
        const val = el.target.value; // Stockez la valeur du contenu

        const para = document.getElementById('content'); // Sélectionnez une balise <p></p> via son id
        para.innerText = val; // Insérez ce contenu dans la balise p créé
    })
});

/**
 * Exercice 2 :
 * - Vérifiez que le dom est bien créé
 * - Sélectionnez tous les items de la liste par leur class
 * - Stocker un item de la list
 * - Supprimez l'item de la liste
 * - Créez un nouvel élément li
 * - créé un text avec la valeur de l'item (qui a été supprimé mais stocké)
 * - Sélectionnez et stocker le conteneur ul via son id
 * - Ajouter un nouveau li dans ce container
 */
document.addEventListener('DOMContentLoaded',function () {
    var item = document.getElementsByClassName("item");
    var item1 = document.getElementsByClassName("item")[0].innerHTML;

    var garbage =document.getElementById("items").removeChild(item[0]);
    var newitem = document.createElement("LI"); // li
    var text = document.createTextNode(item1);
    newitem.appendChild(text);
    document.getElementById("items").appendChild(newitem);

});

/**
 * Exercice 3 :
 * Au téléchargement complet de la page
 * l'input doit être automatiquement focus
 */
document.addEventListener('DOMContentLoaded',function () {
    document.getElementById('input').focus();
});
