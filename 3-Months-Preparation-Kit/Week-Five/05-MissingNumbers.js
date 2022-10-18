/* Dadas dos matrices de enteros, encontrar cuales elementos en la segunda matriz son faltantes de la primera matriz
  
  Ejemplo:
  arr = [7, 2, 5, 3, 5, 3]
  brr = [7, 2, 5, 4, 6, 3, 5, 3]
  La matriz brr es la lista original. Los números faltantes son [4, 6].
  
  NOTA: 
  - Si un número aparece varias veces en las listas, debe asegurarse de que la frecuencia de ese número en ambas
    listas sea la misma. Si ese no es el caso, entonces también es un número faltante.
  - Devuelve los números que faltan ordenados de forma ascendente, en una matriz.
  - Solo incluya un número faltante una vez, incluso si falta varias veces.
  - La diferencia entre los números máximo y mínimo en la lista original es menor o igual a 100. */

function missingNumbers(arr, brr) {
  let x1 = [...arr];
  let x2 = [...brr];

  const missing = [];

  let j = 0;
  while (j < brr.length) {
    const arr1 = [];
    const arr2 = [];
    let num = 0;
    for (let i = 0; i < x2.length; i++) {
      let value = x2[i];
      for (let j = 0; j < x2.length; j++) {
        if (x1[j] == value) arr1.push(x1[j]);
        if (x2[j] == value) arr2.push(x2[j]);
      }
      x2 = x2.filter(n => n != value);
      x1 = x1.filter(n => n != value);
      num = value;
      break;
    }
    if (arr2.length > arr1.length) missing.push(num);
    j++
  }

  missing.sort((a, b) => a - b);
  return missing;
}

const arr1 = [7, 2, 5, 3, 5, 3];
const brr1 = [7, 2, 5, 4, 6, 5, 3];

const arr2 = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const brr2 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

const arr3 = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14];
const brr3 = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12];

console.log(missingNumbers(arr1, brr1));
console.log(missingNumbers(arr2, brr2));
console.log(missingNumbers(arr3, brr3));