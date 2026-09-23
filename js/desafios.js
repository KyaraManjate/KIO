/* =========================================================
   KIO — DESAFIOS
   Interacções da página
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DADOS DOS DESAFIOS
       ===================================================== */

    const challenges = [

        {
            type: "expressão",

            title: "Explica sem dizer o nome.",

            description:
                "Escolhe uma coisa que conheças bem. Explica o que é, para que serve e porque é importante sem dizer o seu nome.",

            rule:
                "O objectivo não é falar depressa. É conseguir fazer a outra pessoa perceber.",

            suggestions: {
                intro:
                    "Escolhe qualquer coisa que faça parte do teu dia. Se quiseres um ponto de partida, experimenta uma destas:",

                lists: [
                    {
                        title: "coisas à tua volta",

                        items: [
                            "telemóvel",
                            "carregador",
                            "espelho",
                            "mochila",
                            "janela",
                            "cadeira",
                            "chaves",
                            "garrafa de água"
                        ]
                    },

                    {
                        title: "coisas que usas",

                        items: [
                            "escova de dentes",
                            "auscultadores",
                            "caderno",
                            "perfume",
                            "relógio",
                            "computador",
                            "caneta",
                            "guarda-chuva"
                        ]
                    },

                    {
                        title: "um pouco mais difícil",

                        items: [
                            "privacidade",
                            "confiança",
                            "rotina",
                            "silêncio",
                            "amizade",
                            "liberdade",
                            "pressa",
                            "saudade"
                        ]
                    }
                ]
            }
        },


        {
            type: "improviso",

            title: "Convence-me de uma coisa absurda.",

            description:
                "Escolhe um objecto que esteja perto de ti. Em menos de um minuto, convence alguém de que esse objecto é indispensável.",

            rule:
                "Não procures a resposta perfeita. A tua capacidade de improvisar começa quando deixas de esperar por ela.",

            suggestions: {
                intro:
                    "Escolhe um objecto e inventa-lhe uma utilidade que ninguém pediu.",

                lists: [
                    {
                        title: "objectos",

                        items: [
                            "uma colher",
                            "um comando",
                            "uma almofada",
                            "uma caneta",
                            "um sapato",
                            "um pente",
                            "uma garrafa",
                            "um livro"
                        ]
                    },

                    {
                        title: "ângulos absurdos",

                        items: [
                            "é indispensável numa emergência",
                            "é uma invenção revolucionária",
                            "foi criado para resolver um problema que ninguém conhecia",
                            "é muito mais importante do que parece",
                            "sem isto, a sociedade entraria em colapso"
                        ]
                    }
                ]
            }
        },


        {
            type: "voz",

            title: "A mesma frase. Diferentes intenções.",

            description:
                "Usa a voz para mudar completamente a forma como uma frase ou palavra pode ser recebida.",

            rule:
                "As palavras podem permanecer iguais. A voz é que muda a mensagem.",

            suggestions: {
                intro:
                    "Escolhe uma frase ou palavra e repete-a várias vezes. Não mudes as palavras. Muda apenas a intenção.",

                lists: [
                    {
                        title: "frases",

                        items: [
                            "Não estava à espera disto.",
                            "Está tudo bem.",
                            "Podes fazer isso.",
                            "Eu sabia.",
                            "Não faz mal.",
                            "A sério?",
                            "Está bem.",
                            "Depois falamos.",
                            "Não estava a contar contigo.",
                            "Faz como quiseres.",
                            "Eu percebi.",
                            "Não precisavas de fazer isso.",
                            "Já chegaste?",
                            "Tudo bem contigo?",
                            "Era isto que querias?"
                        ]
                    },

                    {
                        title: "palavras",

                        items: [
                            "sim",
                            "não",
                            "claro",
                            "talvez",
                            "mesmo",
                            "agora",
                            "amanhã",
                            "obrigada",
                            "espera",
                            "vem",
                            "fica",
                            "calma",
                            "sério",
                            "porquê",
                            "finalmente"
                        ]
                    },

                    {
                        title: "intenções",

                        items: [
                            "surpresa",
                            "irritação",
                            "indiferença",
                            "entusiasmo",
                            "desilusão",
                            "medo",
                            "alívio",
                            "desconfiança",
                            "ironia",
                            "vergonha",
                            "impaciência",
                            "curiosidade",
                            "admiração",
                            "nervosismo",
                            "confiança",
                            "cansaço",
                            "alívio fingido",
                            "alegria contida",
                            "raiva controlada",
                            "surpresa fingida"
                        ]
                    }
                ]
            }
        },


        {
            type: "argumentação",

            title: "Defende uma ideia que não é tua.",

            description:
                "Escolhe uma opinião com a qual não concordas. Agora apresenta o melhor argumento possível a favor dela.",

            rule:
                "Não precisas de mudar de opinião. Precisas de compreender como seria possível defendê-la.",

            suggestions: {
                intro:
                    "Se não te ocorrer nenhuma opinião, escolhe uma destas e tenta defendê-la durante um minuto.",

                lists: [
                    {
                        title: "ideias",

                        items: [
                            "Os trabalhos de casa deviam deixar de existir.",
                            "As aulas deviam começar mais tarde.",
                            "Toda a gente devia aprender a falar em público.",
                            "Os telemóveis deviam ser proibidos durante as aulas.",
                            "As pessoas deviam passar menos tempo nas redes sociais.",
                            "É melhor trabalhar sozinho do que em grupo.",
                            "Os erros deviam contar para a avaliação.",
                            "Toda a gente devia saber cozinhar."
                        ]
                    }
                ]
            }
        },


        {
            type: "pressão",

            title: "Tens cinco segundos para responder.",

            description:
                "Imagina que alguém te faz uma pergunta inesperada diante de várias pessoas. Responde sem preparar a frase.",

            rule:
                "Uma resposta imperfeita pode ser melhor do que ficar presa à procura da resposta ideal.",

            suggestions: {
                intro:
                    "Lê a pergunta. Conta mentalmente até cinco. Depois responde. Não apagues a primeira resposta só porque não parece perfeita.",

                lists: [
                    {
                        title: "perguntas",

                        items: [
                            "Qual foi a última coisa que te fez mudar de opinião?",
                            "O que farias se ninguém pudesse julgar-te?",
                            "Qual é uma coisa que finges perceber?",
                            "Que hábito teu gostarias de abandonar?",
                            "O que te irrita sem razão?",
                            "Preferias ser muito inteligente ou muito confiante?",
                            "Qual é a coisa mais difícil de explicar sobre ti?",
                            "O que farias se tivesses de falar para uma sala cheia de desconhecidos agora?"
                        ]
                    }
                ]
            }
        },


        {
            type: "clareza",

            title: "Torna uma ideia impossível de confundir.",

            description:
                "Escolhe uma ideia que tenhas na cabeça. Explica-a em três frases. Nem mais uma.",

            rule:
                "Se tiveres de escolher entre acrescentar informação e tornar a ideia mais clara, escolhe a clareza.",

            suggestions: {
                intro:
                    "Escolhe uma destas ideias ou usa uma que seja tua. Tens apenas três frases para fazer alguém perceber exactamente o que queres dizer.",

                lists: [
                    {
                        title: "ideias simples",

                        items: [
                            "Porque gosto de determinada música.",
                            "Porque prefiro estudar de manhã.",
                            "Porque uma determinada pessoa me inspira.",
                            "Porque gosto de ler.",
                            "Porque não gosto de falar ao telefone."
                        ]
                    },

                    {
                        title: "ideias mais difíceis",

                        items: [
                            "O que significa confiar em alguém.",
                            "Porque é difícil pedir ajuda.",
                            "Porque algumas pessoas têm medo de falar.",
                            "O que significa sentir-se preparado.",
                            "Porque nem sempre dizer a verdade é fácil.",
                            "A diferença entre estar sozinho e sentir-se sozinho.",
                            "Porque uma opinião pode mudar.",
                            "O que torna uma conversa realmente boa."
                        ]
                    }
                ]
            }
        },


        {
            type: "pesquisa",

            title: "Descobre. Depois explica.",

            description:
                "Escolhe um tema, pesquisa durante alguns minutos e tenta explicá-lo sem simplesmente repetir aquilo que encontraste.",

            rule:
                "Primeiro compreende. Depois explica. O desafio não é decorar informação: é conseguir torná-la tua.",

            suggestions: {
                intro:
                    "Escolhe um tema. Pesquisa durante alguns minutos. Depois fecha as páginas e explica o que aprendeste como se estivesses a contar a alguém que nunca ouviu falar disso.",

                lists: [
                    {
                        title: "sociedade",

                        items: [
                            "Porque existem fusos horários?",
                            "Como funciona uma eleição?",
                            "Porque existem diferentes sistemas de ensino?",
                            "O que é desinformação?",
                            "Como funciona a publicidade?",
                            "Porque é que as pessoas seguem tendências?"
                        ]
                    },

                    {
                        title: "ciência e tecnologia",

                        items: [
                            "Como funciona o GPS?",
                            "Como é que a internet encontra uma página?",
                            "Como funciona o reconhecimento facial?",
                            "O que acontece quando enviamos uma fotografia pela internet?",
                            "Como funciona a inteligência artificial?",
                            "Porque é que o céu muda de cor?"
                        ]
                    },

                    {
                        title: "comunicação",

                        items: [
                            "Porque é que o tom de voz muda uma mensagem?",
                            "Como funciona a linguagem corporal?",
                            "Porque é que algumas pessoas falam mais depressa quando estão nervosas?",
                            "O que torna uma história interessante?",
                            "Como nasce um mal-entendido?",
                            "Porque é que algumas palavras têm mais impacto do que outras?"
                        ]
                    }
                ]
            }
        }

    ];


    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const cards = document.querySelectorAll(".challenge-card");

    const workspace =
        document.getElementById("challengeWorkspace");

    const closeChallenge =
        document.getElementById("closeChallenge");

    const activeType =
        document.getElementById("activeType");

    const activeTitle =
        document.getElementById("activeTitle");

    const activeDescription =
        document.getElementById("activeDescription");

    const activeRule =
        document.getElementById("activeRule");

    const suggestionsContent =
        document.getElementById("suggestionsContent");

    const toggleSuggestions =
        document.getElementById("toggleSuggestions");

    const timeSelect =
        document.getElementById("timeSelect");

    const timerDisplay =
        document.getElementById("timerDisplay");

    const startTimer =
        document.getElementById("startTimer");

    const pauseTimer =
        document.getElementById("pauseTimer");

    const resetTimer =
        document.getElementById("resetTimer");

    const resultArea =
        document.getElementById("challengeResult");

    const resultButtons =
        document.querySelectorAll(".result-options button");

    const feedbackText =
        document.getElementById("feedbackText");


    /* =====================================================
       ESTADO DO CRONÓMETRO
       ===================================================== */

    let timer = null;

    let timerRunning = false;

    let remainingSeconds = 30;


    /* =====================================================
       SUGESTÕES
       ===================================================== */

    function renderSuggestions(index) {

        if (!suggestionsContent) {
            return;
        }

        const challenge = challenges[index];

        if (!challenge || !challenge.suggestions) {
            suggestionsContent.innerHTML = "";
            return;
        }

        let html = "";

        html += `
            <p class="suggestions-intro">
                ${challenge.suggestions.intro}
            </p>
        `;

        challenge.suggestions.lists.forEach((list) => {

            html += `
                <div class="suggestion-group">

                    <span class="suggestion-group-title">
                        ${list.title}
                    </span>

                    <div class="suggestion-items">
            `;

            list.items.forEach((item) => {

                html += `
                    <span class="suggestion-item">
                        ${item}
                    </span>
                `;

            });

            html += `
                    </div>

                </div>
            `;

        });

        suggestionsContent.innerHTML = html;
    }


    /* =====================================================
       SUGESTÕES — FECHAR
       ===================================================== */

    function closeSuggestions() {

        if (!suggestionsContent) {
            return;
        }

        suggestionsContent.classList.remove("open");

        if (toggleSuggestions) {

            toggleSuggestions.textContent =
                "ver sugestões";

            toggleSuggestions.classList.remove("active");

            toggleSuggestions.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    }


    /* =====================================================
       SUGESTÕES — ABRIR
       ===================================================== */

    function openSuggestions() {

        if (!suggestionsContent) {
            return;
        }

        suggestionsContent.classList.add("open");

        if (toggleSuggestions) {

            toggleSuggestions.textContent =
                "esconder sugestões";

            toggleSuggestions.classList.add("active");

            toggleSuggestions.setAttribute(
                "aria-expanded",
                "true"
            );
        }
    }


    /* =====================================================
       BOTÃO DAS SUGESTÕES
       ===================================================== */

    if (toggleSuggestions) {

        toggleSuggestions.addEventListener(
            "click",
            () => {

                const isOpen =
                    suggestionsContent.classList.contains("open");

                if (isOpen) {

                    closeSuggestions();

                } else {

                    openSuggestions();

                }

            }
        );

    }


    /* =====================================================
       TEMPO
       ===================================================== */

    function formatTime(seconds) {

        const minutes =
            Math.floor(seconds / 60);

        const secs =
            seconds % 60;

        return (
            String(minutes).padStart(2, "0") +
            ":" +
            String(secs).padStart(2, "0")
        );
    }


    function updateTimerDisplay() {

        if (!timerDisplay) {
            return;
        }

        timerDisplay.textContent =
            formatTime(remainingSeconds);
    }


    /* =====================================================
       PARAR CRONÓMETRO
       ===================================================== */

    function stopTimer() {

        if (timer !== null) {

            clearInterval(timer);

            timer = null;

        }

        timerRunning = false;

        if (timerDisplay) {

            timerDisplay.classList.remove("running");

        }
    }


    /* =====================================================
       REINICIAR CRONÓMETRO
       ===================================================== */

    function resetTimerFunction() {

        stopTimer();

        if (timeSelect) {

            remainingSeconds =
                parseInt(
                    timeSelect.value,
                    10
                );

        } else {

            remainingSeconds = 30;

        }

        updateTimerDisplay();

        if (timerDisplay) {

            timerDisplay.classList.remove("finished");

        }

        if (resultArea) {

            resultArea.classList.remove("visible");

        }

        resultButtons.forEach((button) => {

            button.classList.remove("selected");

        });
    }


    /* =====================================================
       COMEÇAR CRONÓMETRO
       ===================================================== */

    function startTimerFunction() {

        if (timerRunning) {
            return;
        }

        if (remainingSeconds <= 0) {
            resetTimerFunction();
        }

        timerRunning = true;

        if (timerDisplay) {

            timerDisplay.classList.add("running");

            timerDisplay.classList.remove("finished");

        }

        timer = setInterval(() => {

            remainingSeconds--;

            updateTimerDisplay();

            if (remainingSeconds <= 0) {

                stopTimer();

                remainingSeconds = 0;

                updateTimerDisplay();

                if (timerDisplay) {

                    timerDisplay.classList.remove("running");

                    timerDisplay.classList.add("finished");

                }

                if (resultArea) {

                    resultArea.classList.add("visible");

                }

            }

        }, 1000);
    }


    /* =====================================================
       PAUSAR CRONÓMETRO
       ===================================================== */

    function pauseTimerFunction() {

        stopTimer();

    }


    /* =====================================================
       ESCOLHER DESAFIO
       ===================================================== */

    cards.forEach((card) => {

        const button =
            card.querySelector(".choose-challenge");

        if (!button) {
            return;
        }

        button.addEventListener(
            "click",
            () => {

                const index =
                    parseInt(
                        card.dataset.challenge,
                        10
                    );

                const challenge =
                    challenges[index];

                if (!challenge) {
                    return;
                }


                /* Texto */

                if (activeType) {
                    activeType.textContent =
                        challenge.type;
                }

                if (activeTitle) {
                    activeTitle.textContent =
                        challenge.title;
                }

                if (activeDescription) {
                    activeDescription.textContent =
                        challenge.description;
                }

                if (activeRule) {
                    activeRule.textContent =
                        challenge.rule;
                }


                /* Sugestões */

                renderSuggestions(index);

                closeSuggestions();


                /* Cronómetro */

                resetTimerFunction();


                /* Abrir workspace */

                if (workspace) {

                    workspace.classList.add("active");

                    workspace.setAttribute(
                        "aria-hidden",
                        "false"
                    );


                    setTimeout(() => {

                        workspace.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 100);

                }

            }
        );

    });


    /* =====================================================
       FECHAR WORKSPACE
       ===================================================== */

    if (closeChallenge) {

        closeChallenge.addEventListener(
            "click",
            () => {

                stopTimer();

                closeSuggestions();

                if (workspace) {

                    workspace.classList.remove("active");

                    workspace.setAttribute(
                        "aria-hidden",
                        "true"
                    );

                }

            }
        );

    }


    /* =====================================================
       BOTÕES DO CRONÓMETRO
       ===================================================== */

    if (startTimer) {

        startTimer.addEventListener(
            "click",
            startTimerFunction
        );

    }


    if (pauseTimer) {

        pauseTimer.addEventListener(
            "click",
            pauseTimerFunction
        );

    }


    if (resetTimer) {

        resetTimer.addEventListener(
            "click",
            resetTimerFunction
        );

    }


    /* =====================================================
       ALTERAR DURAÇÃO
       ===================================================== */

    if (timeSelect) {

        timeSelect.addEventListener(
            "change",
            () => {

                stopTimer();

                remainingSeconds =
                    parseInt(
                        timeSelect.value,
                        10
                    );

                updateTimerDisplay();

                if (timerDisplay) {

                    timerDisplay.classList.remove(
                        "finished"
                    );

                }

                if (resultArea) {

                    resultArea.classList.remove(
                        "visible"
                    );

                }

            }
        );

    }


    /* =====================================================
       RESULTADO
       ===================================================== */

    resultButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                resultButtons.forEach((item) => {

                    item.classList.remove("selected");

                });

                button.classList.add("selected");

                const text =
                    button.textContent
                        .trim()
                        .toLowerCase();


                if (
                    text.includes("facilmente")
                ) {

                    feedbackText.textContent =
                        "Boa. Agora tenta novamente, mas aumenta a dificuldade. O objectivo é perceber se consegues manter a clareza quando deixas de estar confortável.";

                } else if (
                    text.includes("dificuldade")
                ) {

                    feedbackText.textContent =
                        "É precisamente aí que o desafio começa a ser útil. Repara no momento em que sentiste dificuldade e tenta perceber o que te fez perder o fio à ideia.";

                } else if (
                    text.includes("bloqueei")
                ) {

                    feedbackText.textContent =
                        "Bloquear também é uma experiência de comunicação. Pensa no que te bloqueou: faltaram palavras, tempo, segurança ou organização da ideia?";

                } else {

                    feedbackText.textContent =
                        "Então tenta novamente. Não precisas de repetir exactamente da mesma forma. Muda uma coisa e vê se o resultado também muda.";

                }

            }
        );

    });


    /* =====================================================
       ANIMAÇÃO DOS CARTÕES
       ===================================================== */

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

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


        cards.forEach((card) => {

            observer.observe(card);

        });

    } else {

        cards.forEach((card) => {

            card.classList.add("visible");

        });

    }


    /* =====================================================
       ESTADO INICIAL
       ===================================================== */

    closeSuggestions();

    updateTimerDisplay();

});