/* Las palabras son anagramas entre sí si sus letras se pueden reorganizar para formar la otra palabra.
  Dada una cadena, divídala en dos subcadenas contiguas de igual longitud.
  Determine el número mínimo de caracteres a cambiar para convertir las dos subcadenas en anagramas entre sí.
  
  Ejemplo:
  s = abccde
  Divide "s" en dos partes: "abc" y "cde". Note que todas las letras han sido usadas, las subcadenas son contiguas
  y sus longitudes son iguales. Ahora bien, puedes cambiar "a" y "b" en la primera subcadena a "d" y "e" para tener
  "dec" y "cde" los cuales son anagramas. Dos cambios son necesarios. 
  Devolver 2
  En caso de no encontrar cambios devolver -1 */

function anagrams(s) {
  
  if (s.length % 2 === 1) return -1;

  let str1 = s.slice(0, s.length/2);
  let str2 = s.slice(s.length/2);

  str2.split('').forEach(el => {
    if ( str1.includes(el) ) str1 = str1.replace(el, '0');
  });

  str1 = str1.split('').filter(el => el !== '0');

  return str1.length;
}

const s1 = "aaabbb"; // 3

const s2 = "ab"; // 1

const s3 = "abc"; // -1

const s4 = "mnop"; // 2

const s5 = "xyyx"; // 0

const s6 = "xaxbbbxx"; // 1

const s7 = "fdhlvosfpafhalll"; // 5

const s8 = "xaxxad"

console.log(anagrams(s1));
console.log(anagrams(s2));
console.log(anagrams(s3));
console.log(anagrams(s4));
console.log(anagrams(s5));
console.log(anagrams(s6));
console.log(anagrams(s7));
console.log(anagrams(s8));