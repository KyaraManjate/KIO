/* =========================================================
   KIO — DIZ-ME RESPONDER
   Interacções da página "Diz-me" da homepage
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const messageInput =
        document.getElementById("messageInput");

    const characterCount =
        document.getElementById("characterCount");

    const clearMessage =
        document.getElementById("clearMessage");

    const sendMessage =
        document.getElementById("sendMessage");

    const messageFeedback =
        document.getElementById("messageFeedback");


    /* =====================================================
       VERIFICAR ELEMENTOS
       ===================================================== */

    if (!messageInput) {
        return;
    }


    /* =====================================================
       CONTADOR DE CARACTERES
       ===================================================== */

    function updateCharacterCount() {

        const currentLength =
            messageInput.value.length;

        const maxLength =
            messageInput.maxLength;

        if (characterCount) {

            characterCount.textContent =
                currentLength + " / " + maxLength;

        }

    }


    messageInput.addEventListener(
        "input",
        function () {

            updateCharacterCount();

            if (messageFeedback) {

                messageFeedback.classList.remove(
                    "visible"
                );

            }

        }
    );


    /* =====================================================
       LIMPAR TEXTO
       ===================================================== */

    if (clearMessage) {

        clearMessage.addEventListener(
            "click",
            function () {

                messageInput.value = "";

                updateCharacterCount();

                messageInput.focus();

                if (messageFeedback) {

                    messageFeedback.classList.remove(
                        "visible"
                    );

                }

            }
        );

    }


    /* =====================================================
       GUARDAR / MOSTRAR FEEDBACK
       ===================================================== */

    if (sendMessage) {

        sendMessage.addEventListener(
            "click",
            function () {

                const message =
                    messageInput.value.trim();


                /* -----------------------------------------
                   NÃO DEIXAR ENVIAR VAZIO
                   ----------------------------------------- */

                if (message === "") {

                    messageInput.focus();

                    messageInput.classList.add(
                        "input-error"
                    );


                    setTimeout(
                        function () {

                            messageInput.classList.remove(
                                "input-error"
                            );

                        },
                        500
                    );

                    return;
                }


                /* -----------------------------------------
                   MOSTRAR CONFIRMAÇÃO
                   ----------------------------------------- */

                if (messageFeedback) {

                    messageFeedback.classList.add(
                        "visible"
                    );


                    setTimeout(
                        function () {

                            messageFeedback.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });

                        },
                        80
                    );

                }

            }
        );

    }


    /* =====================================================
       ESTADO INICIAL
       ===================================================== */

    updateCharacterCount();


});