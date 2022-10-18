/* Se le dará una lista de números enteros, "arr", y un solo entero "k". Debe crear una matriz de longitud "k" de
  elementos de "arr" tal que su injusticia se minimice. Llama a esa matriz arr'. 
  La injusticia de una matriz se calcula como: max(arr') - min(arr')
  Donde:
  - max denota el entero más grande en arr'
  - min denota el entero más pequeño en arr'
  
  Ejemplo:
  arr = [1, 4, 7, 2]
  k = 2
  Elija dos elementos cualesquiera, digamos: arr' = [4, 7]
  max(4, 7) - min(4, 7) = 7 - 4 = 3
  Probando para todos los pares, la solución [1, 2] proporciona la mínima injusticia.
  NOTA: números enteros en arr puede no ser único(osea, se pueden repetir algunos números).
  
  Devolver un entero, que representa la mínima injusticia posible. */

function maxMin(k, arr) {
  const array = [...arr];
  array.sort((a, b) => a - b);

  let min = Infinity;
  
  for(let i = 0; i < array.length - k + 1; i++) {
    let first = array[i];
    let second = array[i+k-1];
    let diff = second-first;
    min = Math.min(diff, min);
  } 
  return min;
}

const arr1 = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]; // 3
const k1 = 4;

const arr2 = [10, 100, 300, 200, 1000, 20, 30];
const k2 = 3;

const arr3 = [1, 2, 1, 2, 1];
const k3 = 2;

const arr4 = 
[4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232];
const k4 = 5; // 1335

/* console.log(maxMin(k1, arr1));
console.log(maxMin(k2, arr2));
console.log(maxMin(k3, arr3)); */
console.log(maxMin(k4, arr4));