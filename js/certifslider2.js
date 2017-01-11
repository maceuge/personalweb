/**
 * Created by havyRoad on 29/12/2016.
 */

$(document).ready(function () {

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    var slideCount1 = $('#slider1 ul li').length;
    var slideWidth1 = $('#slider1 ul li').width();
    var slideHeight1 = $('#slider1 ul li').height();
    var sliderUlWidth1 = slideCount1 * slideWidth1;

    var slideCount2 = $('#slider2 ul li').length;
    var slideWidth2 = $('#slider2 ul li').width();
    var slideHeight2 = $('#slider2 ul li').height();
    var sliderUlWidth2 = slideCount2 * slideWidth2;

    var slideCount3 = $('#slider3 ul li').length;
    var slideWidth3 = $('#slider3 ul li').width();
    var slideHeight3 = $('#slider3 ul li').height();
    var sliderUlWidth3 = slideCount3 * slideWidth3;

    if (slideCount == 1) {
        $('#slider').css({ width: slideWidth, height: slideHeight });
    } else {
        $('#slider').css({ width: slideWidth, height: slideHeight });
        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        $('#slider ul li:last-child').prependTo('#slider ul');
    }

    if (slideCount1 == 1) {
        $('#slider1').css({ width: slideWidth1, height: slideHeight1 });
    } else {
        $('#slider1').css({ width: slideWidth1, height: slideHeight1 });
        $('#slider1 ul').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
        $('#slider1 ul li:last-child').prependTo('#slider1 ul');
    }

    if (slideCount2 == 1) {
        $('#slider2').css({ width: slideWidth2, height: slideHeight2 });
    } else {
        $('#slider2').css({ width: slideWidth2, height: slideHeight2 });
        $('#slider2 ul').css({ width: sliderUlWidth2, marginLeft: - slideWidth2 });
        $('#slider2 ul li:last-child').prependTo('#slider2 ul');
    }

    if (slideCount3 == 1) {
        $('#slider3').css({ width: slideWidth3, height: slideHeight3 });
    } else {
        $('#slider3').css({ width: slideWidth3, height: slideHeight3 });
        $('#slider3 ul').css({ width: sliderUlWidth3, marginLeft: - slideWidth3 });
        $('#slider3 ul li:last-child').prependTo('#slider3 ul');
    }



    function moveLeft1() {
        $('#slider1 ul').animate({
            left: + slideWidth1
        }, 200, function () {
            $('#slider1 ul li:last-child').prependTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    };

    function moveRight1() {
        $('#slider1 ul').animate({
            left: - slideWidth1
        }, 200, function () {
            $('#slider1 ul li:first-child').appendTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    };

    $('a.control_prev1').click(function (e) {
        e.preventDefault();
        moveLeft1();
    });

    $('a.control_next1').click(function (e) {
        e.preventDefault();
        moveRight1();
    });




    function moveLeft2() {
        $('#slider2 ul').animate({
            left: + slideWidth2
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight2() {
        $('#slider2 ul').animate({
            left: - slideWidth2
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev2').click(function (e) {
        e.preventDefault();
        moveLeft2();
    });

    $('a.control_next2').click(function (e) {
        e.preventDefault();
        moveRight2();
    });

});