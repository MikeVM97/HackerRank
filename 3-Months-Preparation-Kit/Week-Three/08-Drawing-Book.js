/* Un maestro le pide a la clase que abra sus libros en un número de la página. Un estudiante puede comenzar a pasar
  las páginas desde el frente del libro o desde la parte posterior del libro. Siempre pasan las páginas de una en una.
  Cuando abren el libro, la página 1 siempre está del lado derecho.
  
  Cuando pasan la página 1, ven páginas 2 y 3. Cada página excepto la última página siempre se imprimirá en ambos 
  lados. La última página solo podrá imprimirse en el anverso, dada la extensión del libro. 
  Si el libro es "n" páginas de largo, y un estudiante quiere pasar a la página "p", 
  ¿cuál es el número mínimo de páginas para pasar? Pueden comenzar al principio o al final del libro. 
  
  Dado "n" y "p", busque e imprima el número mínimo de páginas que deben pasarse para llegar a la página p */

// Ejemplo:
// n = 5
// p = 3

// Si un estudiante quiere ir a la página 3, abren el libro a la página 1, da la vuelta 1 página y ya está en la
// página correcta.
// Si abren el libro en la última página(5), vuelve 1 página atrás y ya está en la página correcta.
// Entonces retorna 1.

function pageCount(n, p) {
  let pages = [[null, null]];
  let i = 0
  while (i <= n) {
    pages.push([i, i+1])
    i+=2
  }
  if (pages.length == 2) return 0;
  for (let i = 0; i < pages.length; i++) {
    for (let j = 0; j < pages[i].length; j++) {
      if (pages[i][j] == p && i - 1 < (pages.length-1) - i) return i - 1;
      if (pages[i][j] == p && i - 1 > (pages.length-1) - i) return (pages.length-1) - i;
    }
  }
}

const n1 = 10;
const p1 = 4;

const n2 = 1;
const p2 = 1;

console.log(pageCount(n1, p1));
console.log(pageCount(n2, p2));