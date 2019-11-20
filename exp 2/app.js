/**
 * Expérimentation 2 :
 * Au maintien du click, Déplacez le carré bleu dans le carré rouge
 */
function calcXPos(e,scare,container){
    return e.pageX -container.offsetLeft- (scare.offsetWidth/2);
}

function calcYPos(e,scare,container){
    return e.pageY -container.offsetTop- (scare.offsetWidth/2);
}

function inArea(e,scare,container){
    const limitTop= container.offsetTop;
    const limitRight= container.offsetLeft + container.offsetWidth - scare.offsetWidth;
    const limitBottom= container.offsetTop + container.offsetHeight - scare.offsetHeight;
    const limitLeft= container.offsetLeft;

    const x =event.pageX - (scare.offsetWidth/2);
    const y =event.pageY - (scare.offsetWidth/2);

    if(y >= limitTop && y <= limitBottom && x >= limitLeft && x <= limitRight){
        return true;
    }else{
        return false;
    }
}

window.addEventListener("DOMContentLoaded",function () {
    const container = document.getElementById('div1')
    const scare = document.getElementById('div2');
   
    let isDown = false;
    
    scare.addEventListener('mousedown', function (e) {
        isDown =true;
    });
    
    scare.addEventListener('mouseup',function (e) {
        isDown = false;
    });
    
    document.addEventListener('mousemove',function (e) {
        // On check si on clique
        if(isDown && inArea(e,scare,container)){
            scare.style.left =  calcXPos(e,scare,container)+"px";
            scare.style.top = calcYPos(e,scare,container)+"px" ;
        }
    });

});
