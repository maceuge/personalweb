/**
 * Created by maveriks on 22/2/17.
 */

$(document).ready(function () {

    var spanCount = $('.badge').length;

    function getAleatorio (min, max){
        var rndnum = Math.random() * (max - min);
            rndnum = Math.floor(rndnum)
        return parseInt(min) + rndnum
    }

    for (var x = 0; x < spanCount; x++) {
        var rndNum = getAleatorio(000000, 999999);
        $('.badge')[x].setAttribute('style', 'background-color:#' + rndNum);
    }

});