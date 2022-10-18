/* Dada una serie de avistamientos de aves donde cada elemento representa una identificación de tipo de ave, determine
  la identificación del tipo avistado con más frecuencia. Si se ha detectado más de un tipo de esa cantidad máxima,
  devuelva la identificación más pequeña. */

// Ejemplo:
// arr = [1, 1, 2, 2, 3]
// Hay dos de cada uno de los tipos 1 y 2, y un avistamiento de tipo 3. Elija el menor de los dos tipos vistos
// dos veces: tipo 1

function migratoryBirds(arr) {
  let array = [...arr];
	array.sort((a, b) => a - b);
	let increment = 0;
	let finalArray = [];
	for (let i = 0; i < array.length; i=increment) {
		const newArr = [];
		let j = i;
		while (array[j] === array[i]) {
			newArr.push(array[j]);
			j++
		}
		increment = j;
		finalArray.push(newArr);
	}

	finalArray.sort((a, b) => b.length - a.length);
	
	const newArr = [];
	for (let i = 0; i < finalArray.length; i++) {
		if (finalArray[i].length < finalArray[0].length) break;
		else newArr.push(finalArray[i]);
	}

	let result = newArr[0][0];
	if (newArr.length == 1) {
		return result
	} else {
		for (let i = 1; i < newArr.length; i++) {
			if (newArr[i][0] < result) result = newArr[i][0];
		}
		return result;
	}
}

const arr1 = [1, 4, 4, 4, 5, 3]; // 4

const arr2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]; // 3

const arr3 = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3]; // 3

console.log(migratoryBirds(arr1));
console.log(migratoryBirds(arr2));
console.log(migratoryBirds(arr3));