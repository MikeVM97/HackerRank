/* Estás coreografeando un espectáculo de circo con varios animales. Para un acto, se le dan dos canguros en una 
  recta númerica listos para saltar en la dirección positiva(es decir, hacia el infinito positivo).
  
  - El primer canguro comienza en la ubicación "x1" y se mueve a una velocidad de "v1" metros por salto.
  - El segundo canguro comienza en la ubicación "x2" y se mueve a una velocidad de "v2" metros por salto.
  
  Tienes que encontrar una manera de llevar a ambos canguros al mismo lugar al mismo tiempo como parte del 
  espectáculo. Si es posible, devuelve "YES", de lo contrario devuelve "NO".
  
  Ejemplo: 
  x1 = 2
  v1 = 1
  x2 = 1
  v2 = 2
  Después de un salto, ambos están en x = 3 (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2)
  por lo que la respuesta es "YES"
  
  Devuelve la cadena "YES" o "NO" */

function kangaroo(x1, v1, x2, v2) {
  if (v1 == v2) return "NO";
  for (let i = 1; i < Infinity; i++) {
    if ( v1 > v2 && x1 + (v1 * i) > x2 + (v2 * i) ) return "NO"
    if ( v2 > v1 && x2 + (v2 * i) > x1 + (v1 * i) ) return "NO"
    if ( x1 + (v1 * i) == x2 + (v2 * i) ) return "YES"
  }
}

const x1 = 2;
const v1 = 1;
const x2 = 1;
const v2 = 2; // YES

const x3 = 0;
const v3 = 3;
const x4 = 4;
const v4 = 2; // YES

const x5 = 0;
const v5 = 2;
const x6 = 5;
const v6 = 3; // NO

const x7 = 43;
const v7 = 2;
const x8 = 70;
const v8 = 2; // NO

console.log(kangaroo(x1, v1, x2, v2));
console.log(kangaroo(x3, v3, x4, v4));
console.log(kangaroo(x5, v5, x6, v6));
console.log(kangaroo(x7, v7, x8, v8));