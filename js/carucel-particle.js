/**
 * Created by havyRoad on 09/01/2017.
 */

$(document).ready(function () {

    function changeTitle() {

        if (!$('#slideone').hasClass('hidedown')) {
            $('#slideone').addClass('hidedown');
            $('#slidetwo').removeClass('hidedown');
        }
        else if (!$('#slidetwo').hasClass('hidedown')) {
            $('#slidetwo').addClass('hidedown');
            $('#slidethree').removeClass('hidedown');
        }
        else if (!$('#slidethree').hasClass('hidedown')){
            $('#slidethree').addClass('hidedown');
            $('#slideone').removeClass('hidedown');
        }
    }
    setInterval(changeTitle, 12000);
});