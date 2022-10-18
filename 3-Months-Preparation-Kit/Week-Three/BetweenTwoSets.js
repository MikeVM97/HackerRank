/* Tendrás 2 arreglos de enteros. Determine todos los enteros que satisfagan las siguientes dos condiciones:
  1. Los elementos del primer arreglo son todos factores del entero que se está considerado
  2. El entero que se está considerado es un factor de todos los elementos del segundo arreglo.
  Se dice que estos números están entre las dos matrices. Determine cuántos de esos números existen.

  Ejemplo:
  a = [2, 6]
  b = [24, 36]
  Hay dos números entre los arreglos: 6 y 12.
  6 % 2 = 0, 6 % 6 = 0, 24 % 6 = 0, 36 % 6 = 0       para el primer valor
  12 % 0 = 0, 12 % 6 = 0, 24 % 12 = 0, 36 % 12 = 0      para el segundo valor
  Retorna 2
*/

function getTotalX(a, b) {
  let array = [...a].concat([...b]);
  array.sort((a, b) => a - b);
  const maxValue = array[array.length - 1];

  let maxLength = b.length;
  if (a.length > b.length) maxLength = a.length;

  const result = [];

  for (let i = 1; i <= maxValue; i++) {
    let counter = 0
    for (let j = 0; j < maxLength; j++) {
      if (a[j] !== undefined) {
        if (i % a[j] == 0) counter++
      }
      if (b[j] !== undefined) {
        if (b[j] % i == 0) counter++
      }
      
    }
    if (counter == array.length) result.push(i);
  }

  return result.length;
}

const a1 = [2, 6];
const b1 = [24, 36]; // 6, 12

const a2 = [2, 4];
const b2 = [16, 32, 96]; // 4, 8, 16

console.log(getTotalX(a1, b1));
console.log(getTotalX(a2, b2));