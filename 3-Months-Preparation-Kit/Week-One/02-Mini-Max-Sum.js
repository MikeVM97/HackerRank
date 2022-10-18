// Dado un arreglo de enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando
// exactamente cuatro de los cinco enteros. Luego imprima los respectivos valores mínimo y máximo como una sola
// línea de dos enteros largos separados por espacios.

// Ejemplo:
// arr = [7, 3, 9, 1, 5]
// La suma mínima es: 1 + 3 + 5 + 7 = 16
// La suma máxima es: 3 + 5 + 7 + 9 = 24
// Output: 16 24

function miniMaxSum(arr) {
    let newArr = []; // [10, 11, 12, 13, 14]
    for (let i = arr.length - 1; i >= 0; i--) {
        let suma = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j === i) continue;
            suma += arr[j];
        }
        newArr.push(suma);
    }
    let max = newArr[0]; // 14
    let min = newArr[0]; // 10
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > max) max = newArr[i];
        if (newArr[i] < min) min = newArr[i];
    }
    console.log (min, max);
}

const arr1 = [1, 2, 3, 4, 5];

miniMaxSum(arr1);