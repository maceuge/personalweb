/**
 * Created by maveriks on 21/2/17.
 */

$(document).ready(function () {

    $('#btn-allbymi').hide();
    $('#btn-aptitud').show();
    $('#btn-hobby').show();


    $('#btn-hobby').click(function (evt) {
        evt.preventDefault();

        if ($('#hobby').hasClass('hide')) {
            $('#hobby').removeClass('hide');
            $('#allbymi').addClass('hide');
            $('#aptitud').addClass('hide');
        }

        $('#btn-hobby').hide();

        if ($('#btn-allbymi').hide()) {
            $('#btn-allbymi').show();
        }

        if ($('#btn-aptitud').hide()) {
            $('#btn-aptitud').show();
        }

    });

    $('#btn-aptitud').click(function (evt) {
        evt.preventDefault();

        if ($('#aptitud').hasClass('hide')) {

            $('#aptitud').removeClass('hide');
            $('#allbymi').addClass('hide');
            $('#hobby').addClass('hide');
        }

        $('#btn-aptitud').hide();

        if ($('#btn-allbymi').hide()) {
            $('#btn-allbymi').show();
        }

        if ($('#btn-hobby').hide()) {
            $('#btn-hobby').show();
        }

    });

    $('#btn-allbymi').click(function (evt) {
        evt.preventDefault();

        if ($('#allbymi').hasClass('hide')) {

            $('#allbymi').removeClass('hide');
            $('#aptitud').addClass('hide');
            $('#hobby').addClass('hide');
        }

        $('#btn-allbymi').hide();

        if ($('#btn-hobby').hide()) {
            $('#btn-hobby').show();
        }

        if ($('#btn-aptitud').hide()) {
            $('#btn-aptitud').show();
        }

    });

});