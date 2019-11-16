// https://developer.mozilla.org/fr/docs/Web/Events

/**
 * Exercice 1 :
 * Ajoutez au document un event listener au click, compter et affichez le nombre de click
 */
document.addEventListener("click",count,false );
let i=0;
console.log(i);
function count() {
    i++;
    console.log(i);
}
/**
 * Exercice 2 :
 * Ajoutez au document un event listener lorsqu'on copy, affichez une alert avec le contenu de la copy
 */
document.addEventListener('copy', function () {
    var selectedText = window.getSelection().toString();
    alert(selectedText);
});
/**
 * Exercice 3 :
 * Ajoutez au document un event listener lorsqu'on tape sur le clavier, affichez le contenu de notre frappe dans la console
 */
document.addEventListener('keydown', function (event) {
    console.log(event.key);
});
/**
 * Exercice 4 :
 * Ajoutez au document un event listener lorsqu'on scroll, affichez la position du scroll
 * - Affichez lorsqu'on arrive tout en bas et tout en haut
 * - Lorsqu'on arrive tout en bas, remontez automatiquement tout en haut
 */
document.addEventListener('scroll', function (event) {
    let pos=window.scrollY;
    console.log(pos);
    if (pos==0){
        console.log("vous êtes tout en haut");
    }
    if(pos==document.documentElement.scrollHeight - document.documentElement.clientHeight){
        console.log("vous êtes tout en bas");
        window.scroll(0, 0);
    }
});