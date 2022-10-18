/* En este desafío, la tarea es depurar el código existente para ejecutar con éxito todos los archivos de prueba
  proporcionados.
  
  Un número se llama número inteligente si tiene un número impar de factores.
  Dados algunos números, encuentra si son números inteligentes o no.
  
  Depure la función dada is_smart_number para verificar correctamente si un número dado es un número inteligente.
  
  1 <= t <= 10 elevado al exponente 3
  1 <= n sub i <= 10 elevado al exponente 4
  
  t => el número de casos de prueba
  n sub i => un número entero
  
  La salida debe consistir en t líneas. Si el entero tiene un número impar de factores imprimir YES, de lo
  contrario, imprimir NO */

function processData(input) {
  let n = parseInt(input.slice(0, input.indexOf('\n')));
  let idx = input.indexOf('\n') + 1;
  const elements = []; // 1, 2, 7, 169
  let str = '';
  for (let i = idx; i < input.length; i++) {
    if (input[i] !== '\n') str += input[i]
    else {
      elements.push(parseInt(str));
      str = '';
    }
    if (i == input.length-1) elements.push(parseInt(str))
  }

  let j = 0;
  while (j < n) {
    x(elements[j]);
    j++
  }

  function x(element) {
    const array = [];
    for (let i = 1; i <= element; i++) {
      if ( element % i == 0) array.push(i);
    }
    if ( array.length % 2 == 0 )  console.log('NO');
    else console.log('YES');
  }
  
}

const input1 = '1'
const input2 = '2'
const input3 = '7'
const input4 = '169'

const input10 = `4
1
2
7
169`

/* console.log(processData(input1));
console.log(processData(input2));
console.log(processData(input3));
console.log(processData(input4)); */
console.log(processData(input10));