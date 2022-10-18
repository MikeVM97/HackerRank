// Dada una matriz cuadrada, calcule la diferencia absoluta entre las sumas de sus diagonales.
// Por ejemplo, la matriz cuadrada arr se muestra a continuación

// 1   2   3
// 4   5   6
// 9   8   9

// La diagonal de izquierda a derecha es = 1 + 5 + 9 = 15
// La diagonal de derecha a izquierda es = 3 + 5 + 9 = 17
// Su diferencia absoluta es = |15 - 17| = 2

// Formato de entrada
// Un arreglo con varios sub-arreglos(cada sub-arreglo representa una línea horizontal en la matriz cuadrada).

// Formato de salida
// Retorna un entero, que representa la diferencia absoluta.

function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][j];
        j++
    }
    let k = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        rightToLeft += arr[i][k];
        k--
    }
    let difference = leftToRight - rightToLeft;
    if (difference >= 0) return difference;
    if (difference < 0) {
        let absolute = difference.toString().split('');
        absolute.shift();
        return parseInt(absolute.join(''));
    }
}

const arr1 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

console.log(diagonalDifference(arr1));