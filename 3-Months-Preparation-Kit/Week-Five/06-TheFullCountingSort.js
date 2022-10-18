/* Utilice la ordenación por conteo para ordenar una lista de cadenas asociadas con números enteros. Si dos cadenas
  están asociadas con el mismo entero, deben imprimirse en su orden original, es decir, su algoritmo de clasificación
  debe ser estable. Hay otro giro, las cadenas en la primera mitad de la matriz deben reemplazarse con el carácter "-"
  (guión, ascii 45 decimal).
  
  La ordenación por inserción y la versión simple de QuickSort son estables, pero la versión in situ más rápida de
  QuickSort no lo es, ya que revuelve los elementos mientras los ordena.

  Diseñe su tipo de conteo para que sea estable. 
  
  Ejemplo:
  arr = [[0, 'a'], [1, 'b'], [0, 'c'], [1, 'd']]
  Las dos primeras cadenas se reemplazan con guión bajo "-". Dado que el entero máximo asociado es 1, configure
  una matriz auxiliar con almenos dos matrices vacías como elementos. A continuación se muestran las inserciones
  en una matriz de tres matrices vacías.
  
  i   cadena    convertida    lista
  0                           [[],[],[]] 
  1     a           -         [[-], [], []]
  2     b           -         [[-], [-], []]
  3     c                     [[-, c], [-], []]
  4     d                     [[-, c], [-, d], []]

  Luego se imprime el resultado: - c - d

  Imprime la matriz terminada con cada elemento separado por un solo espacio.

  NOTA: el primer elemento de cada arr[i], "x", se debe convertir como un número entero para realizar la ordenación.
  arr[i] = [x, s]       ||      arr[i][x], arr[i][s]

  1 <= n <= 1000000         n, representa la longitud de la matriz principal
  1 <= s <= 10
  0 <= x < 100
  s[i] consta de caracteres en el rango ascii[a-z]
*/

function countSort(arr) {
  let max = 0;    
  arr.forEach(a => {
    if(+a[0] > max) max = +a[0];
  });

  let sorted = [];
//[["-","-","-","-","-","to"],["be","or"],["not","to"],["be"],["-","that","is","the"],["question"],["-","-","-","-"]]
  for (let i = 0; i < max + 1; i++) { sorted.push([]) };
  
  for(let i = 0; i < arr.length; i++){
    let associatedInteger = arr[i][0];
    let string = arr[i][1];
    if(i < Math.floor(arr.length/2)){
      string  = '-';
    }
      
    sorted[associatedInteger].push(string);
  }

  sorted = sorted.flat(1).join(' ').trim();
   
  console.log(sorted);
}

const arr1 = [['0', 'a'], ['1', 'b'], ['0', 'c'], ['1', 'd']]; // - c - d

const arr2 = [
['0', 'ab'], ['6', 'cd'], ['0', 'ef'], ['6', 'gh'], ['4', 'ij'], ['0', 'ab'], ['6', 'cd'], ['0', 'ef'],
['6', 'gh'], ['0', 'ij'],/**/ ['4', 'that'], ['3', 'be'], ['0', 'to'], ['1', 'be'], ['5', 'question'], ['1', 'or'],
['2', 'not'], ['4', 'is'], ['2', 'to'], ['4', 'the']
]; // - - - - - to be or not to be - that is the question - - - -

const arr3 = [['1', 'e'], ['2', 'a'], ['1', 'b'], ['3', 'a'], ['4', 'f'], ['1', 'f'], ['2', 'a'], ['1', 'e'], ['1', 'b'], ['1', 'c']];
// - - f e b c - a - -

countSort(arr1);
countSort(arr2);
countSort(arr3);
