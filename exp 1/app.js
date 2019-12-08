/**
 * Expérimentation 1 :
 * A l’aide d’un formulaire récupérer l’adresse frappé par l’utilisateur, et faite un appelle http vers l’api
 * géographique du gouvernement. Afficher ensuite les 3 adresses les plus pertinentes en bas du formulaire
 * en les triant par pertinence ( donc décroissant ).
 * Addresse APi Gouv : https://geo.api.gouv.fr/adresse
 * Utilisez Fetch api pour l'appelle api : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
 */

// L'url de l'api a utiliser
const url = 'https://api-adresse.data.gouv.fr/search/?q=';

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez le boutton n'oubliez pas de lui rajouter l'id "btn", pour pouvoir lui ajouter un event listener au click
    document.getElementById("btn").addEventListener('click', function (e) {
        e.preventDefault(); // On annule le comportement par default des boutons, par default un bouton recharge la page

        // On récupère la valeur et on la nettoie
        let value = document.getElementById('add').value.trim();

        // N'oubliez pas de créer dans le fichier html une div ou un ul si vous créez un élément li, et de lui donner l'id list
        const list = document.getElementById('list');

        if (!!value) { // Ici on vérifie que value est différent de "", null et undefined
            fetch(url + value) // On fait notre requête
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    list.innerHTML = ''; // On vide la list à chaque recherche

                    const sort = data.features
                        .sort(function (add1, add2) { // On les trie par pertinance (la propriété est "importance")
                            return add1.properties.importance - add2.properties.importance;
                        })
                        .splice(0, 3); // On prend que les 3 plus pertinantes

                    sort.forEach(function (add) {
                        let item = document.createElement("p");
                        let text = document.createTextNode(add.properties.label);
                        item.appendChild(text);
                        list.appendChild(item);
                    });
                })
        }
    });
});
