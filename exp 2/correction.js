/**
 * Expérimentation 2 :
 * Au maintien du click, Déplacez le carré bleu dans le carré rouge
 */

function calcXPos(e, el, container) {
    return e.pageX - container.offsetLeft - (el.offsetWidth / 2)
}

function calcYPos(e, el, container) {
    return e.pageY - container.offsetTop - (el.offsetHeight / 2);
}

function isInArea(e, el, container) {
    const limitTop = container.offsetTop;
    const limitRight = container.offsetLeft + container.offsetWidth - el.offsetWidth;
    const limitBottom = container.offsetTop + container.offsetHeight - el.offsetHeight;
    const limitLeft = container.offsetLeft;

    const x = e.pageX - (el.offsetWidth / 2);
    const y = e.pageY - (el.offsetHeight / 2);

    return y >= limitTop && y <= limitBottom && x >= limitLeft && x <= limitRight;
}

// V1
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM entièrement chargé et analysé");

    const container = document.getElementById('div1');
    const el = document.getElementById('div2');

    let isDown = false;

    el.addEventListener('mousedown', function () {
        isDown = true;
    });

    el.addEventListener('mouseup', function () {
        isDown = false;
    });

    document.addEventListener('mousemove', function (e) {
        e.preventDefault();
        if (isDown && isInArea(e, el, container)) {
            el.style.left = calcXPos(e, el, container) + 'px';
            el.style.top = calcYPos(e, el, container) + 'px';
        }
    });

    function isInArea(e, el, container) {
        const limitTop = container.offsetTop;
        const limitRight = container.offsetLeft + container.offsetWidth - el.offsetWidth;
        const limitBottom = container.offsetTop + container.offsetHeight - el.offsetHeight;
        const limitLeft = container.offsetLeft;

        const x = e.pageX - (el.offsetWidth / 2);
        const y = e.pageY - (el.offsetHeight / 2);

        return y >= limitTop && y <= limitBottom && x >= limitLeft && x <= limitRight;
    }

});

// V2 - Btn Add
window.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const selector = document.querySelector('#container > .scare');

    let isDown = false;
    let el = null;

    // Les fonctions onMouseDown et onMouseUp sont utilisé comme callback, et évite de dupliquer le code
    function onMouseDown() {
        isDown = true;
        el = this;
    }

    function onMouseUp() {
        isDown = false;
        el = null;
    }

    selector.addEventListener('mousedown', onMouseDown);

    selector.addEventListener('mouseup', onMouseUp);

    document.addEventListener('mousemove', function (e) {
        e.preventDefault();
        if (isDown && isInArea(e, el, container)) {
            el.style.left = calcXPos(e, el, container) + 'px';
            el.style.top = calcYPos(e, el, container) + 'px';
        }
    });

    const btn = document.getElementById('btn-add');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const scare = document.createElement('div'); // On créé le carré
        scare.className = "scare"; // Puis on ajoutela class

        // On ajoute les event listener au nouveau carré
        scare.addEventListener('mousedown', onMouseDown);
        scare.addEventListener('mouseup', onMouseUp);

        container.appendChild(scare);
    });

});
