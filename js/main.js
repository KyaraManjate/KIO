/* =========================================================
   KIO — MAIN.JS
   Interacções gerais do site
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       1. HAMBÚRGUER
       ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const menuOverlay =
        document.getElementById("menuOverlay");


    if (menuToggle && menuOverlay) {

        function openMenu() {

            menuToggle.classList.add("active");

            menuOverlay.classList.add("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            menuOverlay.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.classList.add(
                "menu-open"
            );
        }


        function closeMenu() {

            menuToggle.classList.remove("active");

            menuOverlay.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuOverlay.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.classList.remove(
                "menu-open"
            );
        }


        menuToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                const isOpen =
                    menuOverlay.classList.contains(
                        "active"
                    );

                if (isOpen) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );


        /*
         * Clicar fora do conteúdo fecha o menu.
         */

        menuOverlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === menuOverlay
                ) {

                    closeMenu();

                }

            }
        );


        /*
         * Clicar num link do menu fecha-o.
         */

        const menuLinks =
            menuOverlay.querySelectorAll("a");


        menuLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMenu();

                }
            );

        });


        /*
         * ESC fecha o menu.
         */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeMenu();

                }

            }
        );

    }



    /* =====================================================
       2. NAVEGAÇÃO — PÁGINA ACTIVA
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";


    const mainNavLinks =
        document.querySelectorAll(
            ".main-nav a"
        );


    mainNavLinks.forEach(function (link) {

        const targetPage =
            link.getAttribute("href");


        if (
            targetPage === currentPage
        ) {

            link.classList.add(
                "is-active"
            );

            link.setAttribute(
                "aria-current",
                "page"
            );

        }

    });



    /* =====================================================
       3. HEADER — ESCONDER AO DESCER / MOSTRAR AO SUBIR
       ===================================================== */

    const header =
        document.querySelector(".site-header");


    if (header) {

        let lastScroll =
            window.scrollY;


        window.addEventListener(
            "scroll",
            function () {

                const currentScroll =
                    window.scrollY;


                /*
                 * Não esconder o header no topo.
                 */

                if (currentScroll <= 20) {

                    header.classList.remove(
                        "header-hidden"
                    );

                }


                /*
                 * Se estiver a descer, esconde.
                 */

                else if (
                    currentScroll > lastScroll
                ) {

                    header.classList.add(
                        "header-hidden"
                    );

                }


                /*
                 * Se estiver a subir, mostra.
                 */

                else {

                    header.classList.remove(
                        "header-hidden"
                    );

                }


                lastScroll =
                    currentScroll;

            },
            {
                passive: true
            }
        );

    }



    /* =====================================================
       4. CURIOSIDADES — CARROSSEL
       ===================================================== */

    const carousels =
        document.querySelectorAll(
            ".curiosity-carousel"
        );


    carousels.forEach(function (carousel) {


        /*
         * Roda do rato
         */

        carousel.addEventListener(
            "wheel",
            function (event) {

                if (
                    Math.abs(event.deltaY) >
                    Math.abs(event.deltaX)
                ) {

                    event.preventDefault();

                    carousel.scrollLeft +=
                        event.deltaY;

                }

            },
            {
                passive: false
            }
        );


        /*
         * Teclado
         */

        carousel.addEventListener(
            "keydown",
            function (event) {

                const amount = 340;


                if (
                    event.key === "ArrowRight"
                ) {

                    event.preventDefault();

                    carousel.scrollBy({
                        left: amount,
                        behavior: "smooth"
                    });

                }


                if (
                    event.key === "ArrowLeft"
                ) {

                    event.preventDefault();

                    carousel.scrollBy({
                        left: -amount,
                        behavior: "smooth"
                    });

                }

            }
        );


        /*
         * Touch
         */

        let touchStartX = 0;

        let touchStartScroll = 0;


        carousel.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.touches[0].clientX;

                touchStartScroll =
                    carousel.scrollLeft;

            },
            {
                passive: true
            }
        );


        carousel.addEventListener(
            "touchmove",
            function (event) {

                const currentX =
                    event.touches[0].clientX;

                const distance =
                    touchStartX - currentX;

                carousel.scrollLeft =
                    touchStartScroll + distance;

            },
            {
                passive: true
            }
        );

    });



    /* =====================================================
       5. BOTÕES QUE VOLTAM AO INÍCIO
       ===================================================== */

    const homeButtons =
        document.querySelectorAll(
            "[data-home]"
        );


    homeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                /*
                 * Todas as páginas do KIO estão
                 * dentro da pasta "pages".
                 *
                 * Por isso, para voltar ao index,
                 * basta usar index.html.
                 */

                window.location.href =
                    "index.html";

            }
        );

    });



    /* =====================================================
       6. BOTÃO DE SAÍDA DO EXPLORAR
       ===================================================== */

    const exitButton =
        document.querySelector(
            ".explore-exit"
        );


    if (exitButton) {

        exitButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                window.location.href =
                    "index.html";

            }
        );

    }



    /* =====================================================
       7. ANIMAÇÕES DE ENTRADA
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".reveal, " +
            ".concept-item, " +
            ".language-example, " +
            ".curiosity-card, " +
            ".image-placeholder, " +
            ".visual-card"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );

    } else {

        animatedElements.forEach(
            function (element) {

                element.classList.add(
                    "is-visible"
                );

            }
        );

    }



    /* =====================================================
       8. PALAVRAS DESTACADAS
       ===================================================== */

    const highlightedWords =
        document.querySelectorAll(
            ".text-highlight, " +
            ".concept-word, " +
            ".accent-word"
        );


    highlightedWords.forEach(
        function (word) {

            word.addEventListener(
                "mouseenter",
                function () {

                    word.classList.add(
                        "word-active"
                    );

                }
            );


            word.addEventListener(
                "mouseleave",
                function () {

                    word.classList.remove(
                        "word-active"
                    );

                }
            );

        }
    );



    /* =====================================================
       9. CARTÕES DE CONCEITO
       ===================================================== */

    const conceptCards =
        document.querySelectorAll(
            ".concept-item"
        );


    conceptCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.classList.add(
                        "concept-active"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.classList.remove(
                        "concept-active"
                    );

                }
            );

        }
    );



    /* =====================================================
       10. ELEMENTOS FLUTUANTES
       ===================================================== */

    const floatingElements =
        document.querySelectorAll(
            ".floating-shape, " +
            ".visual-symbol, " +
            ".orbit, " +
            ".decorative-circle"
        );


    if (
        floatingElements.length > 0
    ) {

        window.addEventListener(
            "scroll",
            function () {

                const scroll =
                    window.scrollY;


                floatingElements.forEach(
                    function (
                        element,
                        index
                    ) {

                        const movement =
                            scroll *
                            (
                                0.015 +
                                index * 0.004
                            );


                        element.style.transform =
                            "translateY(" +
                            movement +
                            "px)";

                    }
                );

            },
            {
                passive: true
            }
        );

    }



    /* =====================================================
       11. ELEMENTOS VISUAIS
       ===================================================== */

    const visualElements =
        document.querySelectorAll(
            ".visual-dot, " +
            ".visual-line, " +
            ".visual-ring"
        );


    visualElements.forEach(
        function (
            element,
            index
        ) {

            element.style.animationDelay =
                index * 0.25 + "s";

        }
    );



    /* =====================================================
       12. ESTADO DA PÁGINA
       ===================================================== */

    const page =
        document.querySelector(
            ".explore-page"
        );


    if (page) {

        page.classList.add(
            "page-ready"
        );

    }


});