// Camel Case es un estilo de nomenclatura común en muchos lenguajes de programación. En Java, los nombres de
// métodos y variables generalmente comienzan con una letra minúscula, y todas las palabras posteriores comienzan
// con una letra mayúscula

// Ejemplo: startThread
// Los nombres de las clases siguen el mismo patrón, excepto que comienzan con una letra mayúscula
// Ejemplo: BlueCar

// Su tarea es escribir un programa que cree o divida nombres de clases, métodos y variables de Camel Case.

// Formato de entrada
// 1. Cada línea de archivo de entrada comenzará con una operación (S o C) seguida de un punto y coma, seguido
//    de M, C o V, seguido de un punto y coma, seguido de las palabras que necesitará operar.
// 2. La operación será S(dividir) o C(combinar).
// 3. M indica método, C indica clase y V indica variable.
// 4. En el caso de una operación de división, las palabras serán un método Camel Case, una Clase o un nombre de
//    Variable que debe dividir en una lista de palabras delimitadas por espacios que comienzan con una letra minúscula.
// 5. En el caso de una operación de combinación, las palabras serán una lista de palabras delimitadas por espacios
//    que comienzan con letras minúsculas que debe combinar en la Cadena de mayúsculas y minúsculas adecuada.
//    Los métodos deben terminar con un conjunto vacío de paréntesis para diferenciarlos de las Variables.

// Formato de salida
// Para cada línea de entrada, su programa debe imprimir la lista de palabras delimitadas por espacios (en el caso
// de una operación de división) o la cadena de mayúsculas y minúsculas apropiada (en el caso de una combinación).

// Ejemplo: Input
/* 
    S;M;plasticCup()
    C;V;mobile phone
    C;C;coffee machine
    S;C;LargeSoftwareBook
    C;M;white sheet of paper
    S;V;pictureFrame
*/

// Ejemplo: Output
/* 
    plastic cup
    mobilePhone
    CoffeeMachine
    large software book
    whiteSheetOfPaper()
    picture frame
*/

function processData(input) {
    const inputArray = (input.includes("\r")) ? input.split("\r\n") : input.split("\n");
    for (let input of inputArray) {
        if (input[0] === "S") console.log(processSplit(input.substring(4, input.length)));
        if (input[0] === "C") console.log(processConcat(input.substring(4, input.length), input[2]));
    }
    function processSplit(input) {
        let processedInput = "";
        for (let i = 0; i < input.length; i++) {
            if (input[i] === "(") break
            if (input[i] === input[i].toUpperCase() && i > 0) {
                processedInput += " " + input[i].toLowerCase();
            } else {
                processedInput += input[i].toLowerCase();
            }
        }
        return processedInput;
    }
    function processConcat(input, type) {
        let processedInputArr = input.split(" ");
        let processedInput = "";
        for (let i = 0; i < processedInputArr.length; i++) {
            if (i === 0 && ["M", "V"].includes(type)) {
                processedInput += processedInputArr[0];
            } else {
                processedInput += processedInputArr[i][0].toUpperCase() + processedInputArr[i].substring(1, processedInputArr[i].length);
            }
        }
        if (type === "M") processedInput += "()"
        return processedInput; 
    }
}

const input1 = 'S;M;plasticCup()';
const input2 = 'C;V;mobile phone';
const input3 = 'C;C;coffee machine';
const input4 = 'S;C;LargeSoftwareBook';
const input5 = 'C;M;white sheet of paper';
const input6 = 'S;V;pictureFrame';

processData(input1);
processData(input2);
processData(input3);
processData(input4);
processData(input5);
processData(input6);