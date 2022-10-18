// Hay una colección de cadenas de entrada y una colección de cadenas de consulta. Para cada cadena de consulta,
// determine cuántas veces aparece en la lista de cadenas de entrada. Devuelve una matriz de los resultados.

// Ejemplo:
// strings = ['ab', 'ab', 'abc']
// queries = ['ab', 'abc', 'bc']
// Hay 2 instancias de 'ab', 1 instancia de 'abc' y 0 de 'bc'. Por cada consulta, añade un elemento a la matriz:
// results = [2, 1, 0]

// Ejemplo: Input
/* 
    strings = ['aba', 'baba', 'aba', 'xzxb']
    queries = ['aba', 'xzxb', 'ab']
*/

// Ejemplo: Output
// [2, 1, 0]

function matchingStrings(strings, queries) {
    const arr = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) count++
        }
        arr.push(count);
    }
    return arr;
}

const strings1 = ['aba', 'baba', 'aba', 'xzxb'];
const queries1 = ['aba', 'xzxb', 'ab'];

const strings2 = ['def', 'de', 'fgh'];
const queries2 = ['de', 'lmn', 'fgh'];

console.log(matchingStrings(strings2, queries2));