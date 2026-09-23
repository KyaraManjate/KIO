/* =========================================================
   KIO — TREINAR
   Interacções da página
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const video =
        document.querySelector(".training-video");

    const audio =
        document.getElementById("trainingAudio");


    /* =====================================================
       VÍDEO
       ===================================================== */

    if (video) {

        video.addEventListener("play", function () {

            video.closest(".video-frame")
                ?.classList.add("playing");

        });


        video.addEventListener("pause", function () {

            video.closest(".video-frame")
                ?.classList.remove("playing");

        });


        video.addEventListener("ended", function () {

            video.closest(".video-frame")
                ?.classList.remove("playing");

        });

    }


    /* =====================================================
       ÁUDIO
       ===================================================== */

    if (audio) {

        audio.addEventListener("play", function () {

            document.body.classList.add("audio-playing");

        });


        audio.addEventListener("pause", function () {

            document.body.classList.remove("audio-playing");

        });


        audio.addEventListener("ended", function () {

            document.body.classList.remove("audio-playing");

        });

    }


    /* =====================================================
       ANIMAÇÃO AO ENTRAR NO ECRÃ
       ===================================================== */

    const elements =
        document.querySelectorAll(
            ".video-frame, .video-description, .audio-card, .method-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        elements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        elements.forEach(function (element) {

            element.classList.add("visible");

        });

    }

});