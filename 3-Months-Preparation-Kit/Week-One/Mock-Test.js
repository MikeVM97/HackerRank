// La mediana de una lista de números es esencialmente su elemento medio después de ordenar. El mismo número de
// los elementos ocurren después de él como antes.

// Dada una lista de números con un número impar de elementos, ENCONTRAR LA MEDIANA.

function findMedian(arr) {
  /* for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let aux = arr[i]
    while (j >= 0 && arr[j] > aux) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = aux
  } */
  const newArr =  [...arr];
  newArr.sort((a, b) => a - b);
  return newArr[Math.floor(arr.length/2)];
}

const arr1 = [0, 1, 2, 4, 6, 5, 3]; // [0, 1, 2, 3, 4, 5, 6]
const arr2 = [20, 14, 38, 9, 91, 43, 4, 72, 55]; // [4, 9, 14, 20, 38, 43, 55, 72, 91]

console.log(findMedian(arr2));