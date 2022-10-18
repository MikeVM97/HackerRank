/* Dada una cuadrícula de caracteres en el rango ascii[a-z], reorganice los elementos de cada fila alfabéticamente,
  de forma ascendente. Determine si las columnas también están en orden alfabético ascendente, de arriba a abajo.
  Devolver "YES" si lo son, o "NO" si no lo son.
  
  Ejemplo:
  grid = ['abc', 'ade', 'efg']
  La cuadrícula se ilustra a continuación.
  a b c
  a d e
  e f g

  Las filas ya están en orden alfabético. Las columnas "a a e", "b d f" y "c e g" también están en orden alfabético,
  por lo que la respuesta sería "YES". Solo se pueden reorganizar los elementos dentro de la misma fila.
  No se pueden mover una fila diferente.

  1 <= t <= 100           "t" número casos de prueba.
  1 <= n <= 100           "n" número de filas y "n" número de columnas de la cuadrícula.
  Cada cadena consta de letras minúsculas en el rango ascii[a-z]
*/

function gridChallenge(grid) {
  
}

const grid1 = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
/* 
  e b a c d
  f g h i j
  o l m k n
  t r p q s
  x y w u v
*/

const grid2 = [];

console.log(gridChallenge(grid1));