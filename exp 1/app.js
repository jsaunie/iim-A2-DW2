/**
 * Expérimentation 1 :ateur, et faite un appelle http vers l’api
 * A l’aide d’un formulaire récupérer l’adresse frappé par l’utilis
 * géographique du gouvernement. Afficher ensuite les 3 adresses les plus pertinentes en bas du formulaire
 * en les triant par pertinence ( donc décroissant ).
 * Addresse APi Gouv : https://geo.api.gouv.fr/adresse
 * Utilisez Fetch api pour l'appelle api : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
 */
document.addEventListener('DOMContentLoaded',function () {
    let feature=[];
    let Obj = {};
    const apiURL = 'https://api-adresse.data.gouv.fr/search/?q=';
    document.getElementById("but").addEventListener('click',function () {
        let adresse = document.getElementById('add').value;
        let adresse2 = adresse.trim().replace(/ /g, "+");
        let url = apiURL+adresse2;
        fetch(url).then(function (resp) {return resp.json()}).then(function (data) {
            feature = data.features;
            for (let i=0; i< 3;i++){
                let prop = feature[i].properties;
                let label = prop.label;
                let newitem = document.createElement("P");
                let text = document.createTextNode(label);
                newitem.appendChild(text);
                document.getElementById("list").appendChild(newitem);
            }
        })

    });

});