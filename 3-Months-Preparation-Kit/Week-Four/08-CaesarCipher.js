/* Julio César protegió su información confidencial cifrándola con un cifrado. El cifrado de César cambia cada
  letra por un número de letras. Si el cambio lo lleva más allá del final del alfabeto, simplemente gírelo
  hacia el frente del alfabeto. En el caso de una rotación de 3, "w", "x", "y" y "z" corresponderían a
  "z", "a", "b" y "c"
  
  Alfabeto original: abcdefghijklmnopqrstuvwxyz
  Alfabeto rotado +3: defghijklmnopqrstuvwxyzabc
  zabcdefghijklmnopqrstuvwxy    k = 25
  abcdefghijklmnopqrstuvwxyz    k = 26

  Ejemplo:
  s = There's-a-starman-waiting-in-the-sky
  k = 3
  
  EL alfabeto se rota por 3, coincidiendo con el mapeo anterior. La cadena encriptada es
  Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb
  Retorna la cadena encriptada.
  
  NOTA: El cifrado solo cifra letras, los símbolos como "-", permanecen sin cifrar.
  
  0 <= k <= 100 */

function caesarCipher(s, k) {
  let string = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const regex = /[a-zA-Z]/;
  
  for (let j = 0; j < s.length; j++) {
    if ( !regex.test(s[j]) ) {
      string += s[j];
      continue;
    }

    let pos = alphabet.indexOf(s[j].toLowerCase());
    let counter = 0;

    while (counter < k) {
      if (pos === alphabet.length-1) {
        counter++
        pos = 0
      } else {
        counter++
        pos++
      }
    }

    s[j] == s[j].toUpperCase() ? string += alphabet[pos].toUpperCase() : string += alphabet[pos];
  }

  return string;
}

const s1 = `There's-a-starman-waiting-in-the-sky`;
const k1 = 3;

const s2 = `middle-Outz`;
const k2 = 2;

const s3 = "Always-Look-on-the-Bright-Side-of-Life";
const k3 = 5;

const s4 = "Hello_World!";
const k4 = 4;

console.log(caesarCipher(s1, k1));
console.log(caesarCipher(s2, k2));
console.log(caesarCipher(s3, k3));
console.log(caesarCipher(s4, k4));