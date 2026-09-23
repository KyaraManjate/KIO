/* =========================================================
   KIO — PERCURSO
   Interacções da página
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const noPath =
        document.getElementById("noPath");

    const pathArea =
        document.getElementById("pathArea");

    const startPath =
        document.getElementById("startPath");

    const dailyPhrase =
        document.getElementById("dailyPhrase");

    const dailyNumber =
        document.getElementById("dailyNumber");

    const progressText =
        document.getElementById("progressText");

    const progressFill =
        document.getElementById("progressFill");


    /* =====================================================
       FRASES MOTIVACIONAIS
       ===================================================== */

    const dailyPhrases = [

        "Não precisas de falar perfeitamente. Precisas de te permitir começar.",

        "A confiança não aparece antes de tentares. Aparece porque tentaste.",

        "Nem tudo o que pensas precisa de ser perfeito para ser dito.",

        "A tua voz também aprende quando decides usá-la.",

        "Falar melhor começa por prestar atenção àquilo que já fazes.",

        "Não tenhas pressa de responder. Primeiro encontra aquilo que queres dizer.",

        "Um erro durante o treino continua a ser treino.",

        "Às vezes, comunicar melhor significa simplesmente dizer menos.",

        "A clareza não está em dizer mais. Está em saber o que merece ser dito.",

        "Não precisas de parecer confiante para começares a agir com confiança.",

        "A tua forma de comunicar também faz parte daquilo que te torna única.",

        "Hoje pode ser o dia em que tentas aquilo que ontem evitaste.",

        "Ouvir também é uma forma de comunicar.",

        "Não compares o teu primeiro passo com o percurso de outra pessoa.",

        "A prática transforma aquilo que hoje parece difícil em algo familiar.",

        "Se bloqueares, respira. Depois continua.",

        "Uma boa ideia merece uma forma clara de ser contada.",

        "Não esperes pelo momento perfeito para usar a tua voz.",

        "O teu ritmo não precisa de ser igual ao de ninguém.",

        "Continua. Mesmo quando ainda não sabes exactamente para onde estás a ir."

    ];


    /* =====================================================
       FRASE DO DIA
       ===================================================== */

    function setDailyPhrase() {

        if (!dailyPhrase) {
            return;
        }


        const today =
            new Date();


        const start =
            new Date(
                today.getFullYear(),
                0,
                0
            );


        const difference =
            today - start;


        const oneDay =
            1000 * 60 * 60 * 24;


        const dayOfYear =
            Math.floor(
                difference / oneDay
            );


        const phraseIndex =
            dayOfYear %
            dailyPhrases.length;


        dailyPhrase.textContent =
            dailyPhrases[phraseIndex];


        if (dailyNumber) {

            const displayNumber =
                String(
                    phraseIndex + 1
                ).padStart(
                    2,
                    "0"
                );


            dailyNumber.textContent =
                displayNumber;

        }

    }


    /* =====================================================
       ESTADO DO PERCURSO
       ===================================================== */

    function hasPath() {

        return (
            localStorage.getItem(
                "kioPercurso"
            ) === "true"
        );

    }


    /* =====================================================
       MOSTRAR PERCURSO
       ===================================================== */

    function showPath() {

        if (noPath) {

            noPath.style.display =
                "none";

        }


        if (pathArea) {

            pathArea.style.display =
                "block";

        }


        localStorage.setItem(
            "kioPercurso",
            "true"
        );

    }


    /* =====================================================
       MOSTRAR ESTADO INICIAL
       ===================================================== */

    function showNoPath() {

        if (noPath) {

            noPath.style.display =
                "block";

        }


        if (pathArea) {

            pathArea.style.display =
                "none";

        }

    }


    /* =====================================================
       BOTÃO COMEÇAR
       ===================================================== */

    if (startPath) {

        startPath.addEventListener(
            "click",
            function () {

                showPath();


                if (pathArea) {

                    setTimeout(
                        function () {

                            pathArea.scrollIntoView({

                                behavior: "smooth",

                                block: "start"

                            });

                        },
                        100
                    );

                }

            }
        );

    }


    /* =====================================================
       INICIALIZAÇÃO
       ===================================================== */

    setDailyPhrase();


    if (hasPath()) {

        showPath();

    } else {

        showNoPath();

    }


    /* =====================================================
       PROGRESSO
       ===================================================== */

    if (progressFill) {

        setTimeout(
            function () {

                progressFill.style.width =
                    "20%";

            },
            200
        );

    }


    if (progressText) {

        progressText.textContent =
            "20%";

    }


});