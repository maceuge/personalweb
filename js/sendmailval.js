

$(document).ready(function() {

    $('#sendmail').bootstrapValidator({

        feedbackIcons: {
            valid: 'fa fa-check fa-lg',
            invalid: 'fa fa-times fa-lg',
            validating: 'fa fa-spinner fa-lg'
        },

        fields: {

            asunto: {
                validators: {
                    notEmpty: {
                        message: 'El Campo Asunto no puede estar vacio.'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'Tiene que tener minimo 6 y maximo 30 caracteres.'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'El Campo Asunto solo puede contener letras, numeros, guiones y puntos.'
                    }
                }
            },

            comentario: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 200,
                        message:'Tiene que tener minimo 10 y maximo 200 caracteres.'
                    },
                    notEmpty: {
                        message: 'El campo Comentarios no puede estar vacio.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'El campo Email no puede estar vacio.'
                    },
                    emailAddress: {
                        message: 'Ingrese un Email valido'
                    }
                }
            }

        }
    })


    .on('success.form.bv', function(e) {
        $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
        $('#sendmail').data('bootstrapValidator').resetForm();

        // Prevent form submission
        e.preventDefault();

        console.log("Hey Hey Kids!!!");

        // emailjs.send("gmail","template_kE7bGuek",{name: "James", notes: "Check this out!"});

        // emailjs.sendForm("gmail","template_kE7bGuek","sendmail");

        // // Get the form instance
        var $form = $(e.target);
        //
        // // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        console.log(bv);

        // // Use Ajax to submit form data
        $.post($form.attr('action'), $form.serialize(), function(result) {
            console.log(result);
        }, 'json');
    });


    console.log("hola estoy aqui");

});
