/* Hay una gran pila de calcetines que deben emparejarse por color. Dada una serie de números enteros que 
  representan el color de cada calcetín, determine cuántos pares de calcetines con colores igual hay */

// Ejemplo:
// arr = [1, 2, 1, 2, 1, 3, 2]
// Hay un par de color 1 y uno de color 2. Quedan tres calcetines impares, uno de cada color.
// El número de parejas es 2

function sockMerchant(n, ar) {
  let counter = 0;
  let array = [...ar];
  array.sort((a, b) => a - b);
  let increment = 0;
  for (let i = 0; i < n; i=increment) {
    let arr = [];
    let j = i;
    while (array[j] === array[i]) {
      arr.push(array[j]);
      j++
    }
    for (let k = 0; k < arr.length; k+=2) {
      if (arr[k] === arr[k+1]) counter++
    }
    increment = j;
  }
  return counter;
}

const n1 = 7;
const ar1 = [1, 2, 1, 2, 1, 3, 2];

const n2 = 9;
const ar2 = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const n3 = 20;
const ar3 = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5];


console.log(sockMerchant(n1, ar1));
console.log(sockMerchant(n2, ar2));
console.log(sockMerchant(n3, ar3));