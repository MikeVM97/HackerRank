/* Sean inventó un juego que involucra una matriz de 2n*2n donde cada celda de la matriz contiene un número entero.
    Puede invertir cualquiera de sus filas o columnas cualquier número de veces. El objetivo del juego es maximizar
    la suma de los elementos en la submatriz n*n ubicada en el cuadrante superior izquierdo de la matriz. */
/* Dadas las configuraciones iniciales para "q" matrices, ayude a Sean a invertir las filas y columnas de cada matriz
    de la mejor manera posible para que la suma de los elementos en el cuadrante superior izquierdo de la matriz
    sea máxima. */

// Ejemplo:
// matrix = [[1, 2], [3, 4]]
/* 
    1   2
    3   4
*/
// Es una matriz de 2x2 y queremos maximizar el cuadrante superior izquierdo, a una matriz de 1x1. Invierte la fila 1
/* 
    1   2
    4   3
*/
// Ahora invierte la columna 0
/* 
    4   2
    1   3
*/
// La suma máxima es 4

// Formato de entrada
// Se recibe un arreglo con sub-arreglos (donde cada sub-arreglo representa una fila en la matriz)

// Formato de salida
// Retorna un entero, que representa la suma máxima posible en el cuadrante superior izquierdo.

function flippingMatrix(matrix) {
	const bestValues = [];
  const aux = matrix[0].length;
	for (let i = 0; i < aux/2; i++) {
		let j = 0;
		while (j < aux/2) {
			let maxValue = matrix[i][j];
			let arr = [matrix[i][j], matrix[i][matrix.length-1-j], matrix[matrix.length-1-i][j], matrix[matrix.length-1-i][matrix.length-1-j]]
			for (let k = 0; k < arr.length; k++) {
				if (arr[k] > maxValue) maxValue = arr[k];
			}
			j++
			bestValues.push(maxValue);
		}
	}
	return bestValues.reduce((a, b) => a + b);
}

const matrix1 = [
  [1, 2],
  [3, 4]
]; // 4

const matrix2 = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
]; // 414

const matrix8 = [
  [107, 54, 128, 15],
  [12, 75, 110, 138],
  [100, 96, 34, 85],
  [75, 15, 28, 112]
]; // 488

console.log(flippingMatrix(matrix1));
console.log(flippingMatrix(matrix2));
console.log(flippingMatrix(matrix8));
