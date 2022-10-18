/* Una operación de rotación a la izquierda sobre una matriz de longitud "n" desplaza cada uno de los elementos de
  la matriz 1 unidad a la izquierda.
  Dado un número entero "d", gire la matriz que faltan muchos pasos y devuelva el resultado.
  
  Ejemplo:
  d = 2
  arr = [1, 2, 3, 4, 5]
  Después de 2 rotaciones, arr' = [3, 4, 5, 1, 2]
  Retorne la matriz rotada 

  1 <= n <= 10 a la 5             n : longitud de la matriz
  1 <= d <= n                     d : el número de veces a rotar la matriz
  1 <= a[i] <= 10 a la 6       a[i] : cada elemento en la matriz */

function rotateLeft(d, arr) {
  return arr.slice(d).concat(arr.slice(0, d));
}

const d1 = 2;
const arr1 = [1, 2, 3, 4, 5];

const d2 = 4;
const arr2 = [1, 2, 3, 4, 5];

console.log(rotateLeft(d1, arr1));
console.log(rotateLeft(d2, arr2));