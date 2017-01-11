/**
 * Created by havyRoad on 02/01/2017.
 */

$(document).ready(function () {

    var carusel = $('.partcontainer').innerHeight();
    var bymi = $('#bymi').innerHeight();
    var estudios = $('#estudios').innerHeight();
    var conocimientos = $('#conocimientos').innerHeight();
    var desarollo = $('#desarollo').innerHeight();
    var pfolio = $('#pfolio').innerHeight();

    $(window).resize(function () {
        carusel = $('.partcontainer').innerHeight();
        bymi = $('#bymi').innerHeight();
        estudios = $('#estudios').innerHeight();
        conocimientos = $('#conocimientos').innerHeight();
        desarollo = $('#desarollo').innerHeight();
        pfolio = $('#pfolio').innerHeight();
    });


    $('#sobremi').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: carusel - 50}, 500);
    })

    $('#cursos').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: (carusel + bymi) - 50}, 500);
    })

    $('#conocim').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: (carusel + bymi + estudios) - 50}, 500);
    })

    $('#desarrollo').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: (carusel + bymi + estudios + conocimientos) - 50}, 500);
    })

    $('#portfolio').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: (carusel + bymi + estudios + conocimientos + desarollo) - 50}, 500);
    })

    $('#contacto, #libros, #links').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: $(window).innerHeight() * 10}, 500);
    })

});