// Dada una matriz de enteros y un entero positivo k, determine el número de pares (i, j) donde
// i < j y arr[i] + arr[j] es divisible por k

// Ejemplo:
// arr = [1, 2, 3, 4, 5, 6]
// k = 5
// Tres pares coinciden con el criterio: [0, 3], [1, 2] y [3, 5]
// Output: 3

function divisibleSumPairs(n, k, ar) {
    // n = ar.length
    const array = [];
    for (let i = 0; i < n; i++) {
        for (let j = n -1; j > i; j--) {
            if ((ar[i] + ar[j]) % k === 0) array.push([i, j]);
        }
    }
    return array;
}

const n1 = 6;
const k1 = 3;
const ar1 = [1, 3, 2, 6, 1, 2];

const n2 = 6;
const k2 = 5;
const ar2 = [1, 2, 3, 4, 5, 6];

console.log(divisibleSumPairs(n2, k2, ar2));