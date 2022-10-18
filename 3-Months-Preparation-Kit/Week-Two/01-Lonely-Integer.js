// Dado una matriz de enteros, donde todos los elementos menos uno ocurren dos veces, encuentre el elemento único

// Ejemplo
// array = [1, 2, 3, 4, 3, 2, 1]
// El único elemento es 4

function lonelyinteger(a) {
  /* if (a.length === 1) return a[0];
  for (let j = 1; j < a.length; j++) {
    if (a[0] === a[j]) {
      a.splice(j, 1);
      a.shift();
      return lonelyinteger(a);
    }
  } */
	const array = [...a];
	array.sort((a, b) => a - b);
  return array[array.length - 1];
}

const a1 = [0, 0, 1, 2, 1];
const a2 = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(a2));
