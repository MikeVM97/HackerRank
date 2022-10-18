/* - Declarar una matriz bidimensional "arr", de "n" matrices vacías. Todas las matrices están indexadas a cero.
  - Declarar un entero, lastAnswer, e inicialízalo en 0.
  - Existen 2 tipos de consulta, dadas como una matriz de cadenas para que las analice:
    1. Consulta: 1 x y
      1. Dejar idx = ((x * lastAnswer) % n).
      2. Agregar el entero "y" a arr[idx].
    2. Consulta: 2 x y
      1. Dejar idx = ((x * lastAnswer) % n).
      2. Asignar el valor arr[idx][y % size(arr[idx])] a lastAnswer.
      3. Almacenar el nuevo valor de lastAnswer a una matriz de respuestas.
  
  NOTA: * es la operación XOR bit a bit, que corresponde al ^operador en la mayoría de los idiomas.
        % es el operador módulo.
        Finalmente, size(arr[idx]) es el número de elementos en arr[idx]
  
  Devuelve un entero, que representa los resultados de cada consulta de tipo 2 en el orden en que se presentan.
  
  1 <= n,q <= 10 elevado al exponente 5
  0 <= x,y <= 10 elevado al exponente 9
  Se garantiza que el tipo de consulta 2 nunca consultará una matriz o índice vacío. */

function dinamycArray(n, queries) {
  const arr = [];
  let lastAnswer = 0;
  const result = [];

  for (let i = 0; i < n; i++) { arr.push([]) };

  for (let i = 0; i < queries.length; i++) {
    let idx = (queries[i][1] ^ lastAnswer) % n;
    if (queries[i][0] == 1) {
      arr[idx].push(queries[i][2]);
    } else {
      lastAnswer =  arr[idx][queries[i][2] % arr[idx].length];
      result.push(lastAnswer);
    }
  }

  return result;
} 

const queries1 = [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]];
const n1 = 2;

console.log(dinamycArray(n1, queries1));
