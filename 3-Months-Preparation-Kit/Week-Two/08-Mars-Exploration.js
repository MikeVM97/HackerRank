// La nave de un explorador espacial se estrelló en Marte. Envían una serie de mensajes SOS a la Tierra pidiendo ayuda.
// Las letras de algunos de los mensajes SOS son alteradas por la radiación cósmica durante la transmisión.
// Dada la señal recibida por la Tierra, como una cuerda s, determine cuántas letras del mensaje SOS han cambiado por radiación.

// Ejemplo:
// s = 'SOSTOT'
// El mensaje original era 'SOSSOS'. Dos de los caracteres del mensaje se cambiaron en tránsito.

// Formato de salida
// Retorna un entero, que representa el número de letras cambiadas durante la transmisión.

function marsExploration(s) {
    let count = 0;
    let i = 0;
    while (i < s.length-2) {
        if (s[i] !== 'S') count++
        if (s[i+1] !== 'O') count++
        if (s[i+2] !== 'S') count++
        i += 3
    }
    return count;
}

const s1 = 'SOSSOT';
const s2 = 'SOSSPSSQSSOR';

console.log(marsExploration(s1));
console.log(marsExploration(s2));