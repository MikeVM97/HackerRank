// Hay dos arreglos con "n" elementos de enteros, A y B. Permútalos en  arreglos 'A y 'B tal que la relación
// A'[i] + B'[i] >= k vale para todos los i donde 0 <= i < n.

// Habrá "q" consultas que consisten de A, B y k. Para cada consulta, devolver "YES" si alguna permutación A', B'
// satisface la relación existente. De lo contrario devuelve "NO".

// Ejemplo:
// A = [0, 1] [1, 2, 3, 4]
// B = [0, 2] [7, 8, 9, 10]
// k = 1

// Un válido A',B' es A' = [1, 0] y B' = [0, 2]:    1 + 0 >= 1   y  0 + 2 >= 1    DEVOLVER "YES"

function twoArrays(k, A, B) { // k = 4
	let arr1 = [...A]; // [1, 2, 2, 3, 3, 4, 4, 4, 4, 4]
	const arr2 = [...B]; // [0, 0, 0, 1, 1, 1, 2, 2, 3, 3]
	arr1.sort((a, b) => a - b);
	arr2.sort((a, b) => a - b);
	const array1 = [];
	const array2 = [];
	for (let i = 0; i < arr2.length; i ++) {
		for (let j = 0; j < arr1.length; j++) {
			if (arr1[j] + arr2[i] >= k) {
				array1.push(arr1[j]);
				array2.push(arr2[i]);
				const left = arr1.slice(0, j);
				const right = arr1.slice(j+1);
				arr1 = left.concat(right);
				break;
			}
		}
	}
	return (B.length === array2.length ? 'YES' : 'NO');
}

const A1 = [0, 1];
const B1 = [0, 2];
const k1 = 1;

const A2 = [2, 1, 3];
const B2 = [7, 8, 9];
const k2 = 10;

const A3 = [1, 2, 2, 1];
const B3 = [3, 3, 3, 4];
const k3 = 5;

const A10 = [7, 6, 8, 4, 2];
const B10 = [5, 2, 6, 3, 1];
const k10 = 10;

const A4 = [1, 3];
const B4 = [3, 1];
const k4 = 4;

const A5 = [2, 3, 1, 1, 1];
const B5 = [1, 3, 4, 3, 3];
const k5 = 5;

const A6 = [1, 5, 1, 4, 4, 2, 7, 1, 2, 2];
const B6 = [8, 7, 1, 7, 7, 4, 4, 3, 6, 7];
const k6 = 9;

const A7 = [3, 6, 8, 5, 9, 9, 4, 8, 4, 7];
const B7 = [5, 1, 0, 1, 6, 4, 1, 7, 4, 3];
const k7 = 9;

const A8 = [4, 4, 3, 2, 1, 4, 4, 3, 2, 4];
const B8 = [2, 3, 0, 1, 1, 3, 1, 0, 0, 2];
const k8 = 4;

console.log(twoArrays(k1, A1, B1));
console.log(twoArrays(k2, A2, B2));
console.log(twoArrays(k3, A3, B3));
console.log(twoArrays(k10, A10, B10));
console.log(twoArrays(k4, A4, B4));
console.log(twoArrays(k5, A5, B5));
console.log(twoArrays(k6, A6, B6));
console.log(twoArrays(k7, A7, B7));
console.log(twoArrays(k8, A8, B8));