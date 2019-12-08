/**
 * Expérimentation 2 :
 * Au maintien du click, Déplacez le carré bleu dans le carré rouge
 */

function calcXPos(event, scare, container) {
    return event.pageX - container.offsetLeft - (scare.offsetWidth / 2);
}

function calcYPos(event, scare, container) {
    return event.pageY - container.offsetTop - (scare.offsetWidth / 2);
}

function inArea(event, scare, container) {
    const limitTop = container.offsetTop;
    const limitRight = container.offsetLeft + container.offsetWidth - scare.offsetWidth;
    const limitBottom = container.offsetTop + container.offsetHeight - scare.offsetHeight;
    const limitLeft = container.offsetLeft;

    const x = event.pageX - (scare.offsetWidth / 2);
    const y = event.pageY - (scare.offsetHeight / 2);

    return (y >= limitTop && y <= limitBottom && x >= limitLeft && x <= limitRight);
}

// V1
window.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById('div1');
    const scare = document.getElementById('div2');

    let isDown = false;

    scare.addEventListener('mousedown', function () {
        console.log('mousedown');
        isDown = true;
    });

    scare.addEventListener('mouseup', function () {
        console.log('mouseup');
        isDown = false;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDown && inArea(event, scare, container)) {
            scare.style.left = calcXPos(event, scare, container) + 'px';
            scare.style.top = calcYPos(event, scare, container) + 'px';
        }
    });

});












