/* Una cadena numérica, s, es hermoso si se puede dividir en una secuencia de dos o más números positivos, a[1],
  a[2], ...,a[n], satisfaciendo las siguientes condiciones:
  
  1. a[i] - a[i-1] = 1 para cualquier 1 < i <= n (es decir, cada elemento en la secuencia es 1 más que el
      elemento anterior).
  2. a[i] contiene un cero inicial. Por ejemplo, podemos dividir s = 10203 en la secuencia {1, 02, 03}, pero no
      es hermoso porque 02 y 03 tienen ceros a la izquierda.
  3. El contenido de la secuencia no se puede reorganizar. Por ejemplo, podemos dividir s = 312 en la secuencia
      {3, 1, 2}, pero no es hermoso porque rompe nuestra primera restricción(es decir, 1 - 3 !== 1).
      
  Llevar a cabo "q" consultas donde cada consulta cada consulta consiste en una cadena entera "s".
  Para cada consulta, imprima si la cadena es hermosa o no en una nueva línea. Si es hermoso, imprima "YES x", donde
  "x" es el primer número de la secuencia creciente. Si hay varios valores de este tipo de "x", elige el más
  pequeño. De lo contrario, imprima "NO". */

function separateNumbers(s) {
	const len = s.length;
	let first = 0;
	let nDigits = 1;
	let p = 0;
	let q = 1;
	let incr = 1;
	let number = 0;
	let search = 0;
	let next = 0;

	while (q < len) {
		number = BigInt(s.slice(p, q));
		search = (number + 1n).toString();
		nDigits = search.length; // 4

		next = s.slice(q, q + nDigits);

		if (search[0] !== '0' && search === next) {
			if (p === 0) first = number;
			p = q;
			q = p + nDigits;
			if (q >= len) {
				console.log('YES ' + first);
				return;
			}
		} else {
			p = 0;
			q = (++incr);
		}
	}
	console.log('NO');
	return;
}

const s9 = '9899100'

const s8 = '101112'

const s1 = '1234'; // YES 1

const s2 = '91011'; // YES 9

const s3 = '99100'; // YES 99

const s4 = '010203'; // NO

const s5 = '7891011'; // YES 7

console.log(separateNumbers(s1));
console.log(separateNumbers(s2));
console.log(separateNumbers(s3));
console.log(separateNumbers(s4));
console.log(separateNumbers(s5));