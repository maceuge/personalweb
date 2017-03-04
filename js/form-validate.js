
$(document).ready(function () {

    var form = $('#sendmail');
    var asunto = $('#about');
    var email = $('#emailsender');
    var comentario = $('#comment');
    var errorSelect = $('.form-group');
    var errorDetail = $('.help-block');

    var validarForm = {

        vacio: "",
        minAsunto: 5,
        maxAsunto: 30,
        minComent: 10,
        maxComent: 250,
        mailreg: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,

        validarAsunto: function () {
            if (asunto[0].value != this.vacio) {
                if (asunto[0].value.length >= this.minAsunto && asunto[0].value.length <= this.maxAsunto) {
                    errorSelect[0].setAttribute("class","form-group has-success");
                    errorDetail[0].innerHTML = "";
                    return true;
                } else {
                    errorSelect[0].setAttribute("class","form-group has-error");
                    errorDetail[0].innerHTML = "El campo tiene que tener minimo 5 y maximo 30 caracteres.";
                }  // fin 2 if else
            } else {
                errorSelect[0].setAttribute("class","form-group has-error");
                errorDetail[0].innerHTML = "El campo Asunto no puede estar vacio.";
            } // fin 1 if else
        }, // fin validarAsunto()

        validarMail: function () {
            if (email[0].value != this.vacio) {
                if (this.mailreg.test(email[0].value)) {
                    errorSelect[1].setAttribute("class","form-group has-success");
                    errorDetail[1].innerHTML = "";
                    return true;
                } else {
                    errorSelect[1].setAttribute("class","form-group has-error");
                    errorDetail[1].innerHTML = "El campo Email ingresado no es valido.";
                }  // fin 2 if else
            } else {
                errorSelect[1].setAttribute("class","form-group has-error");
                errorDetail[1].innerHTML = "El campo Email no puede estar vacio.";
            } // fin 1 if else
        }, // fin validarMail()

        validarComentario: function () {
            if (comentario[0].value != this.vacio) {
                if (comentario[0].value.length >= this.minComent && comentario[0].value.length <= this.maxComent) {
                    errorSelect[2].setAttribute("class","form-group has-success");
                    errorDetail[2].innerHTML = "";
                    return true;
                } else {
                    errorSelect[2].setAttribute("class","form-group has-error");
                    errorDetail[2].innerHTML = "El campo tiene que tener minimo 10 y maximo 250 caracteres.";
                }  // fin 2 if else
            } else {
                errorSelect[2].setAttribute("class","form-group has-error");
                errorDetail[2].innerHTML = "El campo Comentario no puede estar vacio.";
            } // fin 1 if else
        } // fin validarComentario()

    }; // fin validarFormulario

    form[0].onsubmit = function(evt) {
        evt.preventDefault();

        if (validarForm.validarAsunto() && validarForm.validarMail() && validarForm.validarComentario()) {

            notif({
                msg: "Enviando Email....",
                position: "center",
                fade: true,
                bgcolor: "#039be5",
                color: "#ffffff",
                offset: 55,
                // clickable: true,
                timeout: 2800,
                width: 300,
            });

            emailjs.send("gmail","template_kE7bGuek",{
                to_name: "Eugenio",
                from_name: email[0].value,
                about: asunto[0].value,
                message_html: comentario[0].value
            })
            .then(
                function(response) {

                    notif({
                        msg: "El Email se envio con exito!",
                        type: "success",
                        color: "#0e351b",
                        position: "center",
                        autohide: true,
                        offset: 55,
                        fade: true,
                        timeout: 12000,
                        width: 300,
                    });

                    $('#sendmail')[0].reset();
                    errorSelect[0].setAttribute("class","form-group");
                    errorSelect[1].setAttribute("class","form-group");
                    errorSelect[2].setAttribute("class","form-group");
                    $('#enviar')[0].blur();

                },
                function(error) {

                    notif({
                        msg: "Fallo el envio de Email",
                        type: "error",
                        position: "center",
                        autohide: true,
                        offset: 55,
                        fade: true,
                        timeout: 12000,
                        width: 300,
                    });
                }
            );

        } else {
            validarForm.validarAsunto();
            validarForm.validarMail();
            validarForm.validarComentario();
            $('#enviar')[0].blur();
            $('#borrar').fadeIn(500);
        }
    };

    $('#borrar').on('click', function (evt) {
        evt.preventDefault();
        $('#sendmail')[0].reset();
        errorSelect[0].setAttribute("class","form-group");
        errorSelect[1].setAttribute("class","form-group");
        errorSelect[2].setAttribute("class","form-group");
        errorDetail[0].innerHTML = "";
        errorDetail[1].innerHTML = "";
        errorDetail[2].innerHTML = "";
        $('#enviar')[0].blur();
        $('#borrar').fadeOut(500);
    });

});  // fin window onload
