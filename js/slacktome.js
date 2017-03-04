/**
 * Created by maveriks on 4/3/17.
 */


$(document).ready(function () {

    var url = "https://hooks.slack.com/services/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";
    var asunto = $("#asunto");
    var comentario = $("#comentario");


    $("#sendslack").on("click", function (evt) {
        evt.preventDefault();

        $.ajax({
            data: 'payload=' + JSON.stringify({

                "attachments":[
                    {
                        "fallback":"Asunto: " + asunto[0].value,
                        "pretext":"Asunto: " + asunto[0].value,
                        "color":"#039be5",
                        "fields":[
                            {
                                "title":"Comentario:",
                                "value":comentario[0].value,
                                "short":false
                            }
                        ]
                    }
                ]
            }),
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: url

        }).done(

            notif({
                msg: "El Mensaje Slack se envio con exito!",
                type: "success",
                color: "#0e351b",
                position: "center",
                autohide: true,
                offset: 55,
                fade: true,
                timeout: 12000,
                width: 300,
            }),

            $("#slackModal").modal("hide")

        );


    })



});