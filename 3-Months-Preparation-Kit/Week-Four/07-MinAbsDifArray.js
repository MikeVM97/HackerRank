/* La diferencia absoluta es la diferencia positiva entre dos valores. a y b, está escrito |a-b| o |b-a| y son
  iguales. Si a = 3 y b = 2, |3-2| = |2-3| = 1.
  
  Dada una matriz de enteros, encuentre la diferencia absoluta mínima entre dos elementos cualesquiera de la matriz.
  
  Ejemplo:
  arr = [-2, 2, 4]
  Existen 3 pares de números: [-2, 2], [-2, 4] y [2, 4]
  Las diferencias absolutas para estos pares son |(-2)-2| = 4,   |(-2)-4| = 6    y    |2-4| = 2
  La mínima diferencia absoluta es 2
  Retorna el entero 2 */

function minimumAbsoluteDifference(arr) {
  const array = [...arr];

  /* return array.sort((a, b) => a - b).reduce((min, number, index, a) => {
    if (a[index + 1] === undefined) return min;
    return Math.min(Math.abs(number - a[index + 1]), min);
  }, Infinity); */

  array.sort((a, b) => a - b);

  let minDif = Infinity;
  
  for (let i = 0; i < array.length; i++) {
    if (minDif === 0) return minDif;
    if (array[i+1] == undefined) return minDif;
    if (Math.abs(array[i] - array[i+1]) < minDif) {
      minDif = Math.abs(array[i] - array[i+1]);
    }
  }
}

const arr1 = [-2, 2, 4];

const arr2 = [3, -7, 0];

const arr3 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
          // [-96, -92, -59, -54, -53, -36, -13, -2, 1, 75]
const arr4 = [1, -3, 71, 68, 17];

console.log(minimumAbsoluteDifference(arr1));
console.log(minimumAbsoluteDifference(arr2));
console.log(minimumAbsoluteDifference(arr3));
console.log(minimumAbsoluteDifference(arr4));