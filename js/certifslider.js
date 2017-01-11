/**
 * Created by Web Developer on 28/12/2016.
 */

$(document).ready(function () {

    // $('#checkbox').change(function(){
    //     setInterval(function () {
    //         moveRight();
    //     }, 3000);
    // });

    if ($('#dhModal').hasClass('.in')) {

        console.log($('#dhModal').hasClass('.in'))

        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;

        if (slideCount == 1) {
            $('#slider').css({ width: slideWidth, height: slideHeight });
        } else {
            $('#slider').css({ width: slideWidth, height: slideHeight });
            $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
            $('#slider ul li:last-child').prependTo('#slider ul');
        }

        function moveLeft() {
            $('#slider ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };

        function moveRight() {
            $('#slider ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('#slider ul li:first-child').appendTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };

        $('a.control_prev').click(function (e) {
            e.preventDefault();
            moveLeft();
        });

        $('a.control_next').click(function (e) {
            e.preventDefault();
            moveRight();
        });

    } else if ($('#ubaModal').hasClass('.in')) {

        var slideCount = $('#slider1 ul li').length;
        var slideWidth = $('#slider1 ul li').width();
        var slideHeight = $('#slider1 ul li').height();
        var sliderUlWidth = slideCount * slideWidth;

        if (slideCount == 1) {
            $('#slider1').css({ width: slideWidth, height: slideHeight });
        } else {
            $('#slider1').css({ width: slideWidth, height: slideHeight });
            $('#slider1 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
            $('#slider1 ul li:last-child').prependTo('#slider1 ul');
        }

        function moveLeft() {
            $('#slider1 ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('#slider1 ul li:last-child').prependTo('#slider1 ul');
                $('#slider1 ul').css('left', '');
            });
        };

        function moveRight() {
            $('#slider1 ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('#slider1 ul li:first-child').appendTo('#slider1 ul');
                $('#slider1 ul').css('left', '');
            });
        };

        $('a.control_prev').click(function (e) {
            e.preventDefault();
            moveLeft();
        });

        $('a.control_next').click(function (e) {
            e.preventDefault();
            moveRight();
        });

    } else if ($('#utnModal').hasClass('.in')) {

        var slideCount = $('#slider2 ul li').length;
        var slideWidth = $('#slider2 ul li').width();
        var slideHeight = $('#slider2 ul li').height();
        var sliderUlWidth = slideCount * slideWidth;

        if (slideCount == 1) {
            $('#slider2').css({ width: slideWidth, height: slideHeight });
        } else {
            $('#slider2').css({ width: slideWidth, height: slideHeight });
            $('#slider2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
        }

        function moveLeft() {
            $('#slider2 ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('#slider2 ul li:last-child').prependTo('#slider2 ul');
                $('#slider2 ul').css('left', '');
            });
        };

        function moveRight() {
            $('#slider2 ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('#slider2 ul li:first-child').appendTo('#slider2 ul');
                $('#slider2 ul').css('left', '');
            });
        };

    } else {

        var slideCount = $('#slider3 ul li').length;
        var slideWidth = $('#slider3 ul li').width();
        var slideHeight = $('#slider3 ul li').height();
        var sliderUlWidth = slideCount * slideWidth;

        if (slideCount == 1) {
            $('#slider3').css({ width: slideWidth, height: slideHeight });
        } else {
            $('#slider3').css({ width: slideWidth, height: slideHeight });
            $('#slider3 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
            $('#slider3 ul li:last-child').prependTo('#slider3 ul');
        }

        function moveLeft() {
            $('#slider3 ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('#slider3 ul li:last-child').prependTo('#slider3 ul');
                $('#slider3 ul').css('left', '');
            });
        };

        function moveRight() {
            $('#slider3 ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('#slider3 ul li:first-child').appendTo('#slider3 ul');
                $('#slider3 ul').css('left', '');
            });
        };

    }

    // Slider Controls

    $('a.control_prev').click(function (e) {
        e.preventDefault();
        moveLeft();
    });

    $('a.control_next').click(function (e) {
        e.preventDefault();
        moveRight();
    });

});
