
const start_btn = document.querySelector(".start_btn");
const areaButtons = document.querySelectorAll(".area-btn");

const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");

const option_list = document.querySelector(".option_list");

const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

let questions = [];
let areaSeleccionada = "";

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;

let counter;
let counterLine;

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function cargarPreguntas() {

    let banco = [];

    switch (areaSeleccionada) {

        case "matematicas":
            banco = typeof matematicas !== "undefined" ? matematicas : [];
            break;

        case "fisica":
            banco = typeof fisica !== "undefined" ? fisica : [];
            break;

        case "general":
            banco = typeof simulacro !== "undefined" ? simulacro : [];
            break;

        case "snk":
            banco = typeof snk !== "undefined" ? snk : [];
            break;

        default:
            banco = [];
    }

    if (!Array.isArray(banco) || banco.length === 0) {
        alert("No se encontraron preguntas para esta área. Revisa el archivo JavaScript correspondiente.");
        return false;
    }

    questions = banco.map(pregunta => ({
        ...pregunta,
        options: [...pregunta.options]
    }));

    questions = mezclarArray(questions);

    if (areaSeleccionada === "general") {
        questions = questions.slice(0, 50);
    }

    questions.forEach(pregunta => {
        pregunta.options = mezclarArray(pregunta.options);
    });

    console.log("Área seleccionada:", areaSeleccionada);
    console.log("Preguntas cargadas:", questions.length);

    return true;
}

// SELECCIONAR AREA

areaButtons.forEach(btn => {

    btn.onclick = () => {

        areaSeleccionada = btn.dataset.area;

        start_btn.style.display = "none";

        info_box.classList.add("activeInfo");

    };

});

// CANCELAR

exit_btn.onclick = () => {

    info_box.classList.remove("activeInfo");

    start_btn.style.display = "block";

};

// COMENZAR EXAMEN

continue_btn.onclick = () => {

    if (!cargarPreguntas()) {
        return;
    }

    info_box.classList.remove("activeInfo");

    result_box.classList.remove("activeResult");

    quiz_box.classList.add("activeQuiz");

    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;

    clearInterval(counter);
    clearInterval(counterLine);

    time_line.style.width = "0px";

    showQuetions(0);

    queCounter(1);

    startTimer(15);

    startTimerLine(0);

};

// REINICIAR EXAMEN

const restart_quiz = result_box.querySelector(".buttons .restart");

restart_quiz.onclick = () => {

    if (!cargarPreguntas()) {
        return;
    }

    result_box.classList.remove("activeResult");

    quiz_box.classList.add("activeQuiz");

    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;

    clearInterval(counter);
    clearInterval(counterLine);

    time_line.style.width = "0px";

    showQuetions(0);

    queCounter(1);

    startTimer(15);

    startTimerLine(0);

    timeText.textContent = "Tiempo";

    next_btn.classList.remove("show");

};

// SALIR DEL RESULTADO

const quit_quiz = result_box.querySelector(".buttons .quit");

quit_quiz.onclick = () => {

    clearInterval(counter);
    clearInterval(counterLine);

    result_box.classList.remove("activeResult");

    start_btn.style.display = "block";

};

// SIGUIENTE PREGUNTA

next_btn.onclick = () => {

    if (que_count < questions.length - 1) {

        que_count++;
        que_numb++;

        showQuetions(que_count);

        queCounter(que_numb);

        clearInterval(counter);
        clearInterval(counterLine);

        time_line.style.width = "0px";

        startTimer(15);

        startTimerLine(0);

        timeText.textContent = "Tiempo";

        next_btn.classList.remove("show");

    } else {

        clearInterval(counter);
        clearInterval(counterLine);

        showResult();

    }

};

// MOSTRAR PREGUNTAS

function showQuetions(index) {

    const que_text = document.querySelector(".que_text");

    let que_tag =
        '<span>' +
        (index + 1) +
        '. ' +
        questions[index].question +
        '</span>';

    let option_tag = "";

    questions[index].options.forEach(opcion => {

        option_tag +=
            '<div class="option"><span>' +
            opcion +
            '</span></div>';

    });

    que_text.innerHTML = que_tag;

    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    option.forEach(element => {

        element.setAttribute(
            "onclick",
            "optionSelected(this)"
        );

    });

}

// ICONOS

let tickIconTag =
    '<div class="icon tick"><i class="fas fa-check"></i></div>';

let crossIconTag =
    '<div class="icon cross"><i class="fas fa-times"></i></div>';

// RESPUESTAS

function optionSelected(answer) {

    if (answer.classList.contains("disabled")) {
        return;
    }

    clearInterval(counter);
    clearInterval(counterLine);

    let userAns = answer.querySelector("span").textContent.trim();

    let correcAns = questions[que_count].answer.trim();

    const allOptions = option_list.children.length;

    if (userAns === correcAns) {

        userScore++;

        answer.classList.add("correct");

        answer.insertAdjacentHTML(
            "beforeend",
            tickIconTag
        );

    } else {

        answer.classList.add("incorrect");

        answer.insertAdjacentHTML(
            "beforeend",
            crossIconTag
        );

        for (let i = 0; i < allOptions; i++) {

            let textoOpcion = option_list.children[i]
                .querySelector("span").textContent.trim();

            if (textoOpcion === correcAns) {

                option_list.children[i].classList.add("correct");

                option_list.children[i].insertAdjacentHTML(
                    "beforeend",
                    tickIconTag
                );

            }

        }

    }

    for (let i = 0; i < allOptions; i++) {

        option_list.children[i].classList.add("disabled");

    }

    next_btn.classList.add("show");

}

// RESULTADOS

function showResult() {

    info_box.classList.remove("activeInfo");

    quiz_box.classList.remove("activeQuiz");

    result_box.classList.add("activeResult");

    const scoreText = result_box.querySelector(".score_text");

    let porcentaje = Math.round(
        (userScore / questions.length) * 100
    );

    let mensaje = "";

    if (porcentaje >= 80) {

        mensaje = "Excelente desempeño";

    } else if (porcentaje >= 60) {

        mensaje = "Buen desempeño";

    } else {

        mensaje = "Debe seguir preparándose";

    }

    scoreText.innerHTML = `
        <span>
            Área: <b>${areaSeleccionada.toUpperCase()}</b>
        </span>
        <br>
        <span>
            Correctas: <b>${userScore}</b>
        </span>
        <br>
        <span>
            Total: <b>${questions.length}</b>
        </span>
        <br>
        <span>
            Porcentaje: <b>${porcentaje}%</b>
        </span>
        <br><br>
        <span>
            ${mensaje}
        </span>
    `;

}

// TEMPORIZADOR

function startTimer(time) {

    let remaining = time;

    timeCount.textContent = remaining;

    counter = setInterval(() => {

        remaining--;

        timeCount.textContent =
            remaining < 10 ? "0" + remaining : remaining;

        if (remaining <= 0) {

            clearInterval(counter);

            timeText.textContent = "Tiempo Finalizado";

            let correcAns = questions[que_count].answer.trim();

            const allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {

                let textoOpcion = option_list.children[i]
                    .querySelector("span").textContent.trim();

                if (textoOpcion === correcAns) {

                    option_list.children[i].classList.add("correct");

                    option_list.children[i].insertAdjacentHTML(
                        "beforeend",
                        tickIconTag
                    );

                }

                option_list.children[i].classList.add("disabled");

            }

            next_btn.classList.add("show");

        }

    }, 1000);

}

// BARRA DE TIEMPO

function startTimerLine(time) {

    let width = time;

    counterLine = setInterval(() => {

        width += 1;

        time_line.style.width = width + "px";

        if (width >= 549) {

            clearInterval(counterLine);

        }

    }, 29);

}

// CONTADOR DE PREGUNTAS

function queCounter(index) {

    let totalQueCounTag =
        '<span><p>' +
        index +
        '</p> de <p>' +
        questions.length +
        '</p> Preguntas</span>';

    bottom_ques_counter.innerHTML = totalQueCounTag;

}
