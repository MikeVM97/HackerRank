/* Roy quiere mejorar su velocidad de escritura en máquina para concursos de programación. Su amigo le dijo que
    escribiera la oración "The quick brown fox jumps over the lazy dog" repetidamente porque es un pangrama (los
    pangramas son oraciones construidas usando todas las letras del alfabeto, por lo menos una vez). 
    Después de escribir la oración muchas veces, Roy se aburrió. Entonces comenzó a buscar otros pangramas */

// Dada una oración s, dile a Roy si es un pangrama o no.

// La longitud de s puede ser a lo mucho 1000 (1 <= |s| <= 1000) y puede contener espacios, minúsculas y mayúsculas.
// Las minúsculas y mayúsculas de una misma letra son consideradas la misma letra.

// Formato de salida
// Imprime una línea que contiene "pangram" si s es un pangram, sino imprime "not pangram".

function pangrams(s) {
    const alphabet = 'bcdfghjklmnpqrstvwxyz'; // length = 21
    let letter = '';
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] === alphabet[i] || s[j] === alphabet[i].toUpperCase()) {
                letter += alphabet[i];
                break;
            }
        }
    }
    return (letter.length === alphabet.length ? "pangram" : "not pangram");
}

const s1 = 'We promptly judged antique ivory buckles for the next prize';
const s2 = 'We promptly judged antique ivory buckles for the prize'

console.log(pangrams(s1));
console.log(pangrams(s2));