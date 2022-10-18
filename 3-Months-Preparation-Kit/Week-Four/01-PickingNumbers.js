/* Dada una matriz de enteros, encontrar la sub-matriz más larga donde la diferencia absoluta entre dos
  elementos cualesquiera es menor o igual a 1.
  
  Ejemplo:
  a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
  Hay dos sub-matrices que cumplen el criterio: [1, 1, 2, 2] y [4, 4, 5, 5, 5].
  El subarreglo de la longitud máxima tiene 5 elementos.
  Retorna 5. */

function pickingNumbers(a) {
  let array = [...a];
  array.sort((a, b) => a - b);
  const subArrays = [];
  for (let i = 0; i < array.length-1; i++) {
    const arr = [array[i]];
    for (let j = i+1; j < array.length; j++) {
      if ( Math.abs(array[j] - array[i]) <= 1 ) arr.push(array[j]);
    }
    subArrays.push(arr);
  }
  subArrays.sort((a, b) => a.length - b.length);
  const arrayFound = subArrays[subArrays.length - 1];
  return arrayFound.length;
}

const a1 = [1, 1, 2, 2, 4, 4, 5, 5, 5]; // 5

const a2 = [4, 6, 5, 3, 3, 1]; // 3

const a3 = [1, 2, 2, 3, 1, 2]; // 5

console.log(pickingNumbers(a1));
console.log(pickingNumbers(a2));
console.log(pickingNumbers(a3));