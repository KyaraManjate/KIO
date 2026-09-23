/* =========================================================
   KIO — DIZ-ME
   INTERACÇÕES
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01 — VOTAÇÃO
       ===================================================== */

    const situations = document.querySelectorAll(".dizme-situation");


    situations.forEach((situation, situationIndex) => {

        const options =
            situation.querySelectorAll(".answer-option");

        const toggle =
            situation.querySelector(".kio-answer-toggle");

        const kioAnswer =
            situation.querySelector(".kio-answer");


        /*
         * Cada situação tem a sua própria chave.
         * Não são criadas percentagens artificialmente.
         */

        const storageKey =
            `kio-dizme-votes-${situationIndex}`;


        let votes;

        try {

            votes =
                JSON.parse(
                    localStorage.getItem(storageKey)
                );

        } catch (error) {

            votes = null;

        }


        if (
            !votes ||
            !Array.isArray(votes) ||
            votes.length !== options.length
        ) {

            votes =
                new Array(options.length).fill(0);

        }


        /*
         * Mostra os resultados que já existem.
         * Se ninguém votou, não aparece 0%.
         */

        function showResults(selectedIndex = null) {

            const total =
                votes.reduce(
                    (sum, value) => sum + value,
                    0
                );


            options.forEach((option, index) => {

                const result =
                    option.querySelector(".option-result");


                if (!result) {
                    return;
                }


                if (total === 0) {

                    result.textContent = "";

                    return;

                }


                /*
                 * Apenas opções com votos recebem percentagem.
                 */

                if (votes[index] > 0) {

                    const percentage =
                        Math.round(
                            (votes[index] / total) * 100
                        );

                    result.textContent =
                        `${percentage}%`;

                } else {

                    result.textContent = "";

                }

            });


            if (selectedIndex !== null) {

                options.forEach((option, index) => {

                    option.classList.add("voted");


                    if (index === selectedIndex) {

                        option.classList.add("selected");

                    } else {

                        option.classList.add("not-selected");

                    }

                });

            }

        }


        /*
         * Verifica se este utilizador já votou.
         */

        const userVoteKey =
            `${storageKey}-user`;


        const previousVote =
            localStorage.getItem(userVoteKey);


        if (previousVote !== null) {

            const previousIndex =
                Number(previousVote);


            if (
                Number.isInteger(previousIndex) &&
                previousIndex >= 0 &&
                previousIndex < options.length
            ) {

                showResults(previousIndex);

            }

        }


        /* =================================================
           CLIQUE NA OPÇÃO
           ================================================= */

        options.forEach((option, optionIndex) => {

            option.addEventListener("click", () => {

                /*
                 * Uma pessoa só pode votar uma vez
                 * nesta situação neste navegador.
                 */

                if (
                    localStorage.getItem(userVoteKey) !== null
                ) {

                    return;

                }


                votes[optionIndex] += 1;


                localStorage.setItem(
                    storageKey,
                    JSON.stringify(votes)
                );


                localStorage.setItem(
                    userVoteKey,
                    String(optionIndex)
                );


                showResults(optionIndex);

            });

        });


        /* =================================================
           RESPOSTA DO KIO
           ================================================= */

        if (toggle && kioAnswer) {

            toggle.addEventListener("click", () => {

                const isOpen =
                    kioAnswer.classList.toggle(
                        "is-open"
                    );


                toggle.classList.toggle(
                    "is-open",
                    isOpen
                );


                const symbol =
                    toggle.querySelector("span");


                if (symbol) {

                    symbol.textContent =
                        isOpen ? "−" : "+";

                }

            });

        }

    });



    /* =====================================================
       02 — REVELAR SITUAÇÕES
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".dizme-situation, .dizme-final"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add(
                "is-visible"
            );

        });

    }



    /* =====================================================
       03 — HEADER
       ===================================================== */

    const header =
        document.querySelector(".dizme-header");


    let previousScroll =
        window.scrollY;


    window.addEventListener(
        "scroll",
        () => {

            const currentScroll =
                window.scrollY;


            if (!header) {
                return;
            }


            /*
             * Esconde o cabeçalho quando descemos
             * e mostra-o novamente quando subimos.
             */

            if (
                currentScroll > previousScroll &&
                currentScroll > 100
            ) {

                header.classList.add(
                    "header-hidden"
                );

            } else {

                header.classList.remove(
                    "header-hidden"
                );

            }


            previousScroll =
                currentScroll;

        },
        {
            passive: true
        }
    );



    /* =====================================================
       04 — PEQUENO EFEITO NO SCROLL
       ===================================================== */

    const orbit =
        document.querySelector(".intro-orbit");


    window.addEventListener(
        "scroll",
        () => {

            if (!orbit) {
                return;
            }


            const scroll =
                window.scrollY;


            if (scroll < window.innerHeight) {

                orbit.style.transform =
                    `translateY(${scroll * 0.08}px)`;

            }

        },
        {
            passive: true
        }
    );

});