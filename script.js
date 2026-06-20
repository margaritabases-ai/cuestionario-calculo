// BANCO BASE DE 20 PREGUNTAS
const questionBank = [
    { 
        id: 1, 
        question: "Determine si la siguiente serie alternante converge o diverge:", 
        imgPregunta: "Imagenes/img1.png", 
        options: [
            { text: "Diverge porque contiene raíces."}, 
            { text: "Converge condicionalmente por el criterio de Leibniz"},
            { text: "Converge absolutamente."},
            { text: "La serie es geométrica."}
        ], 
        correct: 1 
    },
    { 
        id: 2, 
        question: "Determine si la siguiente serie alternante converge o diverge:", 
        imgPregunta: "Imagenes/img2.png", 
        options: [
            { text: "Por Diverge."},
            { text: " Converge condicionalmente."},
            { text: "Su suma es igual a 1."},
            { text: " Converge absolutamente porque es una serie geométrica con razón 1/3."}
        ], 
        correct: 3 
    },
    { 
        id: 3, 
        question: "¿Qué es una serie alternante?", 
        options: [
            { text: "Una serie cuyos términos son todos positivos."}, 
            { text: "Una serie cuyos términos alternan de signo positivo y negativo."}, 
            { text: "Una serie que tiene un número finito de términos."}, 
            { text: "Una serie formada únicamente por fracciones."}
        ], 
        correct: 1
    },
    { 
        id: 4, 
        question: "Según el criterio de Leibniz, una serie alternante converge si:",
        options: [
            { text: "Sus términos son constantes."}, 
            { text: "Sus términos aumentan indefinidamente. "}, 
            { text: "Sus términos decrecen y su límite es cero"}, 
            { text: "Todos sus términos son negativos."}
        ], 
        correct: 2 
    },
    { 
        id: 5, 
        question: "¿Qué ocurre si el límite de los términos de una serie alternante no es cero?", 
        options: [
            { text: "La serie converge siempre."}, 
            { text: "La serie diverge."}, 
            { text: "La serie converge condicionalmente."}, 
            { text: "La serie tiene suma infinita. "}
        ], 
        correct: 1 
    },
    { 
        id: 6, 
        question: "¿Qué representa la serie de Taylor de una función?",
        options: [
            { text: "Una forma de derivar cualquier función sin usar límites."}, 
            { text: "Una fórmula que solo sirve para funciones trigonométricas."}, 
            { text: "Una técnica exclusiva para resolver ecuaciones diferenciales."}, 
            { text: "Una aproximación de una función mediante una suma infinita de potencias alrededor de un punto."}
        ], 
        correct: 3 
    },
    { 
        id: 7, 
        question: "¿Cuál es la forma general de la serie de Taylor de una función f(x) alrededor de x=a?", 
        options: [{img: "Imagenes/img3.png" }, {img: "Imagenes/img4.png" }, {img: "Imagenes/img5.png" }, {img: "Imagenes/img6.png" }], 
        correct: 1 
    },
    { 
        id: 8, 
        question: "¿Qué nombre recibe la serie de Taylor cuando se desarrolla alrededor de x=0?", 
        options: [
            { text: "Serie geométrica"}, 
            { text: "Serie de Fourier"}, 
            { text: "Serie de Maclaurin"}, 
            { text: "Serie armónica"}
        ], 
        correct: 2 
    },
    { 
        id: 9, 
        question: "Selecciona el desarrollo matemático correcto para el siguiente planteamiento:",
        imgPregunta: "Imagenes/img7.png",
        options: [{img: "Imagenes/img8.png" }, {img: "Imagenes/img9.png" }, {img: "Imagenes/img10.png" }, {img: "Imagenes/img11.png" }], 
        correct: 0 
    },
    { 
        id: 10, 
        question: "Usa la serie de Taylor para aproximar sin(x) alrededor de x=0 hasta el término de grado 5.", 
        options: [{img: "Imagenes/img12.png" }, {img: "Imagenes/img13.png" }, {img: "Imagenes/img14.png" }, {img: "Imagenes/img15.png" }], 
        correct: 2 
    },
    { 
        id: 11, 
        question: "Determine el radio de convergencia R de la siguiente serie de potencias:", 
        imgPregunta: "Imagenes/img16.png",
        options: [{img: "Imagenes/img17.png" }, {img: "Imagenes/img18.png" }, {img: "Imagenes/img19.png" }, {img: "Imagenes/img20.png" }], 
        correct: 3
    },
    { 
        id: 12, 
        question: "Encuentre el intervalo de convergencia de la serie de potencias:", 
        imgPregunta: "Imagenes/img21.png",
        options: [{ text: "(2,4)"}, { text: "[2,4)"}, { text: "(2,4]"}, { text: "[2,4]"}], 
        correct: 1 
    },
    { 
        id: 13, 
        question: "Determine el intervalo de convergencia de la siguiente serie de potencias:", 
        imgPregunta: "Imagenes/img22.png",
        options: [{img: "Imagenes/img23.png" }, {img: "Imagenes/img24.png" }, {img: "Imagenes/img25.png" }, {img: "Imagenes/img26.png" }], 
        correct: 0 
    },
    { 
        id: 14, 
        question: "Analiza el intervalo de convergencia basándote en la siguiente expresión:",
        imgPregunta: "Imagenes/img27.png",
        options: [
            { text: "La serie siempre converge en ambos extremos si el radio de convergencia es finito."}, 
            { text: "La serie siempre diverge en los extremos porque el valor absoluto de la razón es exactamente igual a 1."}, 
            { text: "La serie puede converger en ambos extremos, en ninguno, o en solo uno de ellos, requiriendo un análisis específico para cada caso."}, 
            { text: "Si converge en el extremo izquierdo, obligatoriamente debe converger en el extremo derecho por simetría."}
        ], 
        correct: 2
    },
    { 
        id: 15, 
        question: "Si una serie de potencias centrada en el origen converge en x=4, ¿qué se puede asegurar con total certeza sobre su convergencia en otros puntos?", 
        options: [{img: "Imagenes/img28.png" }, {img: "Imagenes/img29.png" }, {img: "Imagenes/img30.png" }, {img: "Imagenes/img31.png" }], 
        correct: 0 
    },
    { 
        id: 16, 
        question: "La serie de McLaurin puede verse como el caso especial de las series de Taylor. ¿Qué valor toma 'a' en este caso especial?",
        options: [{ text: "a = 1"}, { text: "a = 0"}, { text: "a = -1"}, { text: "a = x"}], 
        correct: 1 
    },
    { 
        id: 17,  
        question: "Resuelve la serie de potencias representada en la imagen:",
        imgPregunta: "Imagenes/img32.png",
        options: [{img: "Imagenes/img33.png" }, {img: "Imagenes/img34.png" }, {img: "Imagenes/img35.png" }, {img: "Imagenes/img36.png" }], 
        correct: 3 
    },
    { 
        id: 18, 
        question: "Determinar la serie de MacLaurin de la siguiente función:", 
        imgPregunta: "Imagenes/img37.png",
        options: [{img: "Imagenes/img38.png" }, {img: "Imagenes/img39.png" }, {img: "Imagenes/img40.png" }, {img: "Imagenes/img41.png" }], 
        correct: 0 
    },
    { 
        id: 19, 
        question: "Determinar la serie de MacLaurin de la siguiente función:", 
        imgPregunta: "Imagenes/img42.png",
        options: [{img: "Imagenes/img43.png" }, {img: "Imagenes/img44.png" }, {img: "Imagenes/img45.png" }, {img: "Imagenes/img46.png" }], 
        correct: 2 
    },
    { 
        id: 20, 
        question: "Determinar la serie de MacLaurin de la siguiente función:", 
        imgPregunta: "Imagenes/img47.png",
        options: [{img: "Imagenes/img48.png" }, {img: "Imagenes/img49.png" }, {img: "Imagenes/img50.png" }, {img: "Imagenes/img51.png" }], 
        correct: 1 
    }
];

let quizQuestions = [];
let currentIdx = 0;
let userAnswers = {};

function seleccionarPreguntasAleatorias() {
    let shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 5); // <-- CAMBIADO: Ahora corta solo 5 elementos
    
    localStorage.setItem("selectedQuestions", JSON.stringify(selected));
    localStorage.setItem("currentIdx", "0");
    localStorage.setItem("userAnswers", JSON.stringify({}));
}

function cargarEstadoQuiz() {
    quizQuestions = JSON.parse(localStorage.getItem("selectedQuestions")) || [];
    currentIdx = parseInt(localStorage.getItem("currentIdx")) || 0;
    userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};

    if(quizQuestions.length === 0) {
        window.location.href = "index.html";
        return;
    }
    renderPregunta();
}

function renderPregunta() {
    const container = document.getElementById("questionContainer");
    const q = quizQuestions[currentIdx];

    // <-- CAMBIADO: Actualizado el texto a "de 5"
    document.getElementById("progressIndicator").innerText = `Pregunta ${currentIdx + 1} de 5`;
    document.getElementById("prevBtn").disabled = currentIdx === 0;
    
    // <-- CAMBIADO: El botón cambia a "Finalizar" en el índice 4 (la quinta pregunta)
    document.getElementById("nextBtn").innerText = currentIdx === 4 ? "Finalizar" : "Siguiente";

    let questionImgHTML = '';
    if (q.imgPregunta) {
        questionImgHTML = `<div class="text-center mb-4"><img src="${q.imgPregunta}" class="img-fluid rounded shadow-sm" style="max-height: 250px; object-fit: contain;" alt="Imagen Pregunta"></div>`;
    }

    let html = `
        <h3 class="question-title">${q.question}</h3>
        ${questionImgHTML} 
        <div class="row g-3">
    `;

    q.options.forEach((optionObj, oIdx) => {
        const isSelected = userAnswers[currentIdx] === oIdx ? 'selected' : '';
        const isChecked = userAnswers[currentIdx] === oIdx ? 'checked' : '';
        const letter = String.fromCharCode(65 + oIdx); 

        let optionImgHTML = '';
        if (optionObj.img) {
            optionImgHTML = `<div class="mt-2"><img src="${optionObj.img}" class="img-fluid option-img" alt="Opción ${letter}"></div>`;
        }

        html += `
            <div class="col-md-6">
                <label class="custom-option ${isSelected}" id="optLabel_${oIdx}" onclick="marcarOpcion(${oIdx})">
                    <input type="radio" name="quiz_option" value="${oIdx}" ${isChecked}>
                    <span class="bullet"></span>
                    <div class="option-content">
                        <span class="option-text"><strong>${letter})</strong> ${optionObj.text || ''}</span>
                        ${optionImgHTML}
                    </div>
                </label>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function marcarOpcion(oIdx) {
    userAnswers[currentIdx] = oIdx;
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    
    for (let i = 0; i < 4; i++) {
        const el = document.getElementById(`optLabel_${i}`);
        if(el) el.classList.remove("selected");
    }
    document.getElementById(`optLabel_${oIdx}`).classList.add("selected");
}

function navegar(direction) {
    if (direction === 1 && userAnswers[currentIdx] === undefined) {
        alert("Por favor, selecciona una respuesta antes de continuar.");
        return;
    }

    currentIdx += direction;
    localStorage.setItem("currentIdx", currentIdx.toString());

    // <-- CAMBIADO: Redirecciona al terminar la quinta pregunta (índice 5)
    if (currentIdx >= 5) {
        window.location.href = "resultados.html";
    } else {
        renderPregunta();
    }
}

function procesarYMostrarResultados() {
    const questions = JSON.parse(localStorage.getItem("selectedQuestions")) || [];
    const answers = JSON.parse(localStorage.getItem("userAnswers")) || {};
    const reviewContainer = document.getElementById("reviewContainer");

    if(questions.length === 0) {
        window.location.href = "index.html";
        return;
    }

    let score = 0;
    reviewContainer.innerHTML = "";

    questions.forEach((q, idx) => {
        const userChoice = answers[idx];
        const isCorrect = userChoice === q.correct;
        if (isCorrect) score++;

        const box = document.createElement("div");
        box.className = `result-box ${isCorrect ? 'correct-match' : 'incorrect-match'}`;
        
        const generarHtmlRevisionOpccion = (choiceIdx) => {
            if (choiceIdx === undefined || choiceIdx === null) return `<span class="text-muted">No respondida</span>`;
            
            const optionObj = q.options[choiceIdx];
            const letter = String.fromCharCode(97 + choiceIdx); 
            
            let contenido = `inciso ${letter})`;
            if (optionObj.text) {
                contenido += ` - ${optionObj.text}`;
            }
            if (optionObj.img) {
                contenido += `<br><img src="${optionObj.img}" class="img-fluid option-img mt-2" style="max-height: 90px;" alt="Opción ${letter}">`;
            }
            return contenido;
        };

        let preguntaImgHTML = '';
        if (q.imgPregunta) {
            preguntaImgHTML = `<div class="my-2"><img src="${q.imgPregunta}" class="img-fluid rounded border p-1" style="max-height: 110px; background-color:#fff;" alt="Problema"></div>`;
        }

        const userResponseHtml = generarHtmlRevisionOpccion(userChoice);
        const correctResponseHtml = generarHtmlRevisionOpccion(q.correct);

        let reviewHtml = `
            <h5 class="fw-bold mb-1">Pregunta ${idx + 1}: <span class="fw-normal text-secondary">${q.question || 'Analiza el siguiente gráfico:'}</span></h5>
            ${preguntaImgHTML}
            <div class="my-2">
                <strong>Tu respuesta:</strong> ${userResponseHtml} ${isCorrect ? '✅' : '❌'}
            </div>
        `;
        
        if (!isCorrect) {
            reviewHtml += `
                <div class="text-success mt-2">
                    <strong>Respuesta correcta:</strong> ${correctResponseHtml}
                </div>
            `;
        }
        
        box.innerHTML = reviewHtml;
        reviewContainer.appendChild(box);
    });

    // <-- CAMBIADO: Cálculo matemático y texto base escalado a 5 preguntas
    const percentage = (score / 5) * 100;
    document.getElementById("scoreText").innerText = `Lograste ${score} de 5 respuestas correctas (${percentage.toFixed(1)}%)`;
    document.getElementById("scoreBar").style.width = `${percentage}%`;
}