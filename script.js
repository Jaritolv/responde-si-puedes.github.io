const temas = {
    historia: [
        {
            pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
            respuestas: ["1939", "1941", "1945", "1950"],
            correcta: 0
        },
        // Agregar más preguntas de historia
    ],
    geografia: [
        {
            pregunta: "¿Cuál es el país más grande del mundo por superficie?",
            respuestas: ["Rusia", "China", "Estados Unidos", "Canadá"],
            correcta: 0
        },
        // Agregar más preguntas de geografía
    ],
    anatomia: [
        {
            pregunta: "¿Cuál es el órgano del cuerpo humano encargado de bombear la sangre?",
            respuestas: ["Pulmones", "Cerebro", "Corazón", "Hígado"],
            correcta: 2
        },
        // Agregar más preguntas de anatomía
    ],
    naturaleza: [
        {
            pregunta: "¿Cuál es el animal más grande del mundo?",
            respuestas: ["Elefante", "Ballena azul", "Jirafa", "Tiburón blanco"],
            correcta: 1
        },
        // Agregar más preguntas de naturaleza
    ],
    caricaturas: [
        {
            pregunta: "¿Cuál es el nombre del personaje principal de la serie animada 'Bob Esponja'?",
            respuestas: ["Bob Esponja", "Patricio Estrella", "Calamardo Tentáculos", "Arenita Mejillas"],
            correcta: 0
        },
        // Agregar más preguntas de caricaturas
    ],
    programasTV: [
        {
            pregunta: "¿En qué año se emitió por primera vez el programa 'Los Simpsons'?",
            respuestas: ["1989", "1992", "1995", "2000"],
            correcta: 0
        },
        // Agregar más preguntas de programas de TV
    ],
    acertijosMatematicos: [
        {
            pregunta: "¿Cuál es la suma de los ángulos internos de un triángulo?",
            respuestas: ["90 grados", "180 grados", "270 grados", "360 grados"],
            correcta: 1
        },
        // Agregar más acertijos matemáticos
    ]
};

let temaSeleccionado = null;

function seleccionarTema(tema) {
    temaSeleccionado = tema;
    window.location.href = "preguntas.html";
}
