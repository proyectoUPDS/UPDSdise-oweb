const matematicas = [
    {
        numb: 1,
        question: "¿Cuál es el residuo de dividir x³ - 2x² + 1 entre x - 2?",
        answer: "1",
        options: ["1", "-154", "0", "17"]
    },
    {
        numb: 2,
        question: "Desarrollar: (2x + 3y)²",
        answer: "4x² + 12xy + 9y²",
        options: ["2x² + 12xy + 3y²", "4x² + 12xy + 9y²", "2x² - 12xy + 3y²", "4x² - 12xy + 9y²"]
    },
    {
        numb: 3,
        question: "¿Cuál es el valor de x en la ecuación 3x - 2 = 2 - x?",
        answer: "1",
        options: ["-1", "0", "2", "1"]
    },
    {
        numb: 4,
        question: "¿Cuál es el resultado de multiplicar (8x²y² - 3y²)(2ax³)?",
        answer: "16ax⁵y² - 6ax³y²",
        options: ["16ax⁵y² - 6ax³y²", "6ax³y² - 16ax⁵y²", "16ax⁵y² + 6ax³y²", "10ax⁵y² - 3ax³y²"]
    },
    {
        numb: 5,
        question: "Factorizar: 3ax² - 3a",
        answer: "3a(x + 1)(x - 1)",
        options: ["3a(x + 1)", "3a(x + 1)(x - 1)", "(x + 1)(x - 1)", "3a(x - 1)"]
    },
    {
        numb: 6,
        question: "¿Cuál es el resultado de sumar (2a + 3b) + (6b - 4c) + (-a + 8c)?",
        answer: "a + 9b + 4c",
        options: ["a - 9b - 4c", "a + 9b + 4c", "-a + 9b + 4c", "a - 9b + 4c"]
    },
    {
        numb: 7,
        question: "¿Cuál es el resultado de (x - 1)(x + 3)(x + 1)(x - 3)?",
        answer: "x⁴ - 10x² + 9",
        options: ["x⁴ + 9", "x⁴ - 9", "x⁴ - 10x² + 9", "x⁴ + 10x² + 9"]
    },
    {
        numb: 8,
        question: "¿Cuál es el cociente de dividir 2x³ - 6x² - 8x + 24 entre x - 3?",
        answer: "2x² - 8",
        options: ["x + 3", "2x² - 8", "-2x² - 8", "x² - 2"]
    },
    {
        numb: 9,
        question: "Factorizar: 8x² - 2x - 3",
        answer: "(4x - 3)(2x + 1)",
        options: ["(x + 3)(2x + 1)", "(4x - 3)(2x + 1)", "(x - 3)(x + 1)", "(4x + 3)(x - 2)"]
    },
    {
        numb: 10,
        question: "Resolver: 2(2x - 3) = 6 + x",
        answer: "4",
        options: ["4", "3", "13", "12"]
    },
    {
        numb: 11,
        question: "Resolver: x - (2x + 1) = 4 - (3x + 3)",
        answer: "1",
        options: ["2", "-2", "3", "1"]
    },
    {
        numb: 12,
        question: "Factorizar: 6x² + x - 12",
        answer: "(3x - 4)(2x + 3)",
        options: ["(3x - 4)(2x + 3)", "(x - 4)(x - 3)", "(2x - 3)(x + 4)", "(3x + 4)(x + 3)"]
    },
    {
        numb: 13,
        question: "Factorizar: x² + xy - 12y²",
        answer: "(x - 3y)(x + 4y)",
        options: ["(x + 6y)(x - 2y)", "(x - 3y)(x + 4y)", "(x - y)²", "(x - 3)(x + 4)"]
    },
    {
        numb: 14,
        question: "Tres números pares consecutivos suman 54. ¿Cuáles son?",
        answer: "16, 18 y 20",
        options: ["16, 18 y 20", "10, 20 y 24", "11, 20 y 23", "10, 12 y 14"]
    },
    {
        numb: 15,
        question: "¿Cuál es el residuo de dividir x² - x - 6 entre x - 3?",
        answer: "0",
        options: ["2", "1", "0", "5"]
    },
    {
        numb: 16,
        question: "Un rectángulo tiene un perímetro de 58 m y su lado mayor mide 11 m más que el menor. ¿Cuáles son sus dimensiones?",
        answer: "9 m y 20 m",
        options: ["9 m y 20 m", "10 m y 21 m", "5 m y 16 m", "8 m y 50 m"]
    },
    {
        numb: 17,
        question: "Multiplicar: (3x²y)(-4y²)(-2y³)",
        answer: "24x²y⁶",
        options: ["24x²y⁶", "-12x⁴y⁵", "24x²y³", "12x²y⁶"]
    },
    {
        numb: 18,
        question: "Simplificar: (3x + 1)(4x - 3) - (2 - x)",
        answer: "12x² - 4x - 5",
        options: ["12x² - 7x + 4", "12x² - 7x + 5", "12x² - 4x - 5", "12x² - 5x + 5"]
    },
    {
        numb: 19,
        question: "¿Qué valor debe tener k para que 2x³ - 3x + 2k sea divisible entre x - 2?",
        answer: "-5",
        options: ["5", "-5", "-10", "10"]
    },
    {
        numb: 20,
        question: "¿Cuál es el residuo de dividir 7x² - 3x + 2 entre x + 1?",
        answer: "12",
        options: ["12", "6", "1", "0"]
    },
    {
        numb: 21,
        question: "¿Cuál es el máximo común divisor de 50xy³ y 125x²y³?",
        answer: "25xy³",
        options: ["10xy³", "25xy³", "25x²y³", "12x²y²"]
    },
    {
        numb: 22,
        question: "Simplificar: 4(x + 3) + 5(x + 2)",
        answer: "9x + 22",
        options: ["9x - 22", "9x + 22", "22x - 9", "22x + 9"]
    },
    {
        numb: 23,
        question: "Resolver: 5x - 7 = 7 - 2x",
        answer: "2",
        options: ["2", "4", "-2", "7"]
    },
    {
        numb: 24,
        question: "Un padre tiene el doble de edad que su hijo. Si entre ambos suman 72 años, ¿qué edades tienen?",
        answer: "Hijo: 24 años y padre: 48 años",
        options: ["Hijo: 16 años y padre: 32 años", "Hijo: 18 años y padre: 36 años", "Hijo: 25 años y padre: 50 años", "Hijo: 24 años y padre: 48 años"]
    },
    {
        numb: 25,
        question: "¿Cuál es el resultado de resolver la ecuación 4x + 8 = 20?",
        answer: "3",
        options: ["2", "3", "4", "5"]
    }
];