/* Dada una serie de longitudes de palo, use 3 de ellos para construir un triángulo no degenerado con el máximo
perímetro posible. Devuelve una matriz de las longitudes de sus lados como 3 números enteros en orden no decreciente.

  Si hay varios triángulos válidos que tienen el perímetro máximo:
    1. Elige el que tena el lado máximo mas largo
    2. Si más de uno tiene ese máximo, elige entre ellos el que tiene el lado mínimo más largo
    3. Si más de uno tiene ese máximo también, imprima cualquiera de ellos
  
  Si existe un triángulo no degenerado, devuelve [-1]
*/

// Ejemplo:
// sticks = [1, 2, 3, 4, 5, 10]
// El triplete(1, 2, 3)no formará un triángulo, tampoco(4, 5, 10) o (2, 3, 5), por lo que el problema se reduce a
// (2, 3, 4) y (3, 4, 5). El perímetro mayor es 3 + 4 + 5 = 12

function maximumPerimeterTriangle(sticks) {
  const array = [];
  // Recorro el array(sticks) original y obtengo todas las combinaciones posibles de 3 unidades
  for (let i = 0; i < sticks.length; i++) {
    // Cada combinación de 3 unidades será guardado en el arreglo "newArr" y pusheado a "array"
    let newArr = [];
    newArr.push(sticks[i]);
    for (let j = i; j < sticks.length; j++) {
      if (j == i) continue
      else newArr.push(sticks[j]);
      for (let k = j; k < sticks.length; k++) {
        if (k == i || k == j) continue
        else {
          newArr.push(sticks[k]);
          array.push(newArr);
          newArr = newArr.slice(0, 2)
        }
      }
      newArr = newArr.slice(0, 1)
    }
  }

  const finalArr = [];
  // Recorro el arreglo donde se encuentran todas las combinaciones de 3 unidades(array) y pusheo a finalArr
  // aquellas combinaciones que cumplen con la condición de ser un triángulo no degenerado
  for (let i = 0; i < array.length; i++) {
    let flag = true;
    if (array[i][0] + array[i][1] <= array[i][2]) flag = false;
    if (array[i][1] + array[i][2] <= array[i][0]) flag = false;
    if (array[i][2] + array[i][0] <= array[i][1]) flag = false;
    if (flag) finalArr.push(array[i]);
  }

  if (finalArr.length == 0) return [-1];
  // Recorro el arreglo que tiene las combinaciones de 3 palos, que forman un triángulo no degenerado y obtengo
  // aquella combinación que forma el triángulo más grande
  else {
    let maxSum = finalArr[0].reduce((a, b) => a + b);
    let position = 0;
    for (let i = 0; i < finalArr.length; i++) {
      let value = finalArr[i].reduce((a, b) => a + b)
      if (value > maxSum) {
        maxSum = value;
        position = i;
      }
    }
    let result = finalArr[position];
    return result.sort((a, b) => a - b);
  }
}

const sticks1 = [1, 1, 1, 3, 3];

const sticks2 = [1, 2, 3];

const sticks3 = [1, 1, 1, 2, 3, 5];

const sticks4 = [3, 9, 2, 15, 3];

console.log(maximumPerimeterTriangle(sticks1))
console.log(maximumPerimeterTriangle(sticks2));
console.log(maximumPerimeterTriangle(sticks3));
console.log(maximumPerimeterTriangle(sticks4));