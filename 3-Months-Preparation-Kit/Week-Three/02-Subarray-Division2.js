/* Dos niños, Lily y Ron, quieren compartir una barra de chocolate. Cada uno de los cuadrados tiene un número entero.
    Lily decide compartir un segmento contiguo de la barra seleccionada de manera que:
    - La longitud del segmento coincide con el mes de nacimiento de Ron y,
    - La suma de los dos números enteros en los cuadrados es igual a su día de nacimiento.
    
    Determina de cuántas manera puede dividir el chocolate. */

// Ejemplo:
// s = [2, 2, 1, 3, 2]
// d = 4
// m = 2

/* Lily quiere encontrar segmentos que sumen el día del cumpleaños de Ron, d = 4 con una longitud igual a su mes de
    nacimiento, m = 2. En este caso, hay dos segmentos que cumplen sus criterios: [2, 2] y [1, 3] */

// Formato de entrada
// s[n] : los números de cada uno de los cuadrados del chocolate
// d : el día del cumpleaños de Ron
// m : el mes del cumpleaños de Ron

// Formato de salida
// Retorna un entero, que representa el número de formas en que se puede dividir la barra.

function birthday(s, d, m) {
  let counter = 0;
  let month = m;
  for (let i = 0; i < s.length-m+1; i++) {
    let values = [];
    let j = i;
    while (j < month) {
      values.push(s[j]);
      j++
    }
    if ( values.reduce((a, b) => a + b) == d ) counter++
    month++
  }
  return counter;
}

const s1 = [2, 2, 1, 3, 2];
const d1 = 4;
const m1 = 2;

const s2 = [1, 2, 1, 3, 2];
const d2 = 3;
const m2 = 2;

const s3 = [4];
const d3 = 4;
const m3 = 1;

const s4 = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const d4 = 18;
const m4 = 7;

console.log(birthday(s1, d1, m1));
console.log(birthday(s2, d2, m2));
console.log(birthday(s3, d3, m3));
console.log(birthday(s4, d4, m4));