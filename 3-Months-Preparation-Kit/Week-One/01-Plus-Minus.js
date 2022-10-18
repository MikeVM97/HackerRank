// Dado una matriz de números enteros, calcule las proporciones de sus elementos que son positivos, negativos
// y cero. Imprime el valor decimal de cada fracción en una nueva línea con 6 cifras decimales.

// Ejemplo:
// arr = [1, 1, 0, -1, -1]
// Hay 5 elementos: 2 positivos, 2 negativos y 1 cero. Sus proporciones son:
// 2/5 = 0.400000				2/5 = 0.400000				1/5 = 0.200000
// Output:
//				0.400000
//				0.400000
//				0.200000

function plusMinus(arr) {
	let positives = 0; // 3
	let negatives = 0; // 2
	let zero = 0; // 1
	let n = arr.length;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) positives++
		if (arr[i] < 0) negatives++
		if (arr[i] === 0) zero++
	}
	// La cantidad de números positivos entre la cantidad de números en el arreglo
	let ratioPositive = (positives/n).toFixed(6);
	let ratioNegative = (negatives/n).toFixed(6);
	let ratioZero = (zero/n).toFixed(6);
	console.log(ratioPositive);
	console.log(ratioNegative);
	console.log(ratioZero);
}

const arr1 = [-4, 3, -9, 0, 4, 1];

plusMinus(arr1);