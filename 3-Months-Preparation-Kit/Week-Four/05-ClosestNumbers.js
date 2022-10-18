/* La clasificación es útil como primer paso en muchas tareas diferentes. La tarea más común es facilitar la
  búsqueda de cosas, pero también hay otros usos. En este caso, será más fácil determinar que par o pares de
  elementos tienen la menor diferencia absoluta entre ellos.
  
  Ejemplo:
  arr = [5, 2, 3, 4, 1]
  ordenado, arr' = [1, 2, 3, 4, 5]. Varios pares tienen la diferencia mínima absoluta de 1:
  [(1,2), (2,3), (3,4), (4,5)]. Devolver la matriz [1, 2, 2, 3, 3, 4, 4, 5]
  
  NOTA: Como se muestra en el ejemplo, los pares pueden superponerse.
  
  Dada una lista de enteros no ordenados "arr" encuentre el par de elementos que tienen la menor diferencia
  absoluta entre ellos. Si hay varios pares, encuéntrelos todos. 
  
  - La diferencia está en el rango de 2 y 200000
  - Ningun valor en la matriz se repite */

function closestNumbers(arr) {
  const newArr = [...arr];
  newArr.sort((a, b) => a - b);

  let pairs = [];
  let minDif = 200000;

  for (let i = 0; i < newArr.length; i++) {
    const dif = newArr[i+1] - newArr[i];
    if ( dif <= minDif ) {
      if ( dif < minDif ) pairs = [];
      minDif = dif;
      pairs.push( newArr[i], newArr[i+1] );
    }
  }

  return pairs;
}

const arr1 = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854];

          // [-7330761, -6461594, -3916237, -3620601, -357920, -20, 30, 266854, 6246457, 7374819]

const arr2 = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470];

const arr3 = [5, 4, 3, 2];

const arr4 = [5, 2, 3, 4, 1];

console.log(closestNumbers(arr1));
console.log(closestNumbers(arr2));
console.log(closestNumbers(arr3));
console.log(closestNumbers(arr4));