// Quicksort normalmente tiene un tiempo de ejecución de "n x log(n)". Pero ¿hay algún algoritmo que pueda ordenar
// aún más rapido? En general, esto no es posible. La mayoría de los algoritmos de clasificación son clasificaciones
// de comparación, es decir, clasifican una lista simplemente comparando los elementos entre sí.
// Un algoritmo de clasificación por comparación no puede vencer el tiempo de ejecución "n x log(n)"
// (en el peor de los casos), ya que "n x log(n)" representa el número mínimo de comparaciones necesarias para saber
// donde colocar cada elemento.

// Otro método de clasificación, el de conteo, no requiere comparación. En su lugar, crea una matriz de enteros cuyo
// rango de índice cubre todo el rango de valores en su matriz para ordenar. Cada vez que ocurre un valor en la
// matriz original, incrementa el contador en ese índice. 

// Al final, ejecute su matriz de conteo, imprimiendo el valor
// de cada índice con valor distinto de cero esa cantidad de veces

// Ejemplo:
// arr = [1, 1, 3, 2, 1]
// Todos los valores están en el rango [0...3], así que cree una matriz de ceros, result = [0, 0, 0, 0].
// Los resultados de cada iteración son los siguientes:

/* 
    i   arr[i]     result
    0     1     [0, 1, 0, 0]
    1     1     [0, 2, 0, 0]
    2     3     [0, 2, 0, 1]
    3     2     [0, 2, 1, 1]
    4     1     [0, 3, 1, 1]
*/

// La matriz de frecuencia es [0, 3, 1, 1]. Con esto podemos crear una matriz ordenada: [1, 1, 1, 2, 3]

// Dada una lista de enteros, cuente y devuelva el número de veces que aparece cada valor como una matriz de enteros.

// Nota: Para este ejercicio, siempre devuelva una matriz de frecuencia con 100 elementos. El ejemplo anterior
// muestra solo los primeros 4 elementos, siendo el resto ceros.

function countingSort(arr) {
    const newArr = [];
    let i = 0;
    while (i < 100) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) count++
        }
        i++
        newArr.push(count);
    }
    return newArr;
}

const arr1 = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33];

console.log(countingSort(arr1));