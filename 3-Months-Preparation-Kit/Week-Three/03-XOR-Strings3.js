// En este desafío, la tarea es depurar el código existente para ejecutar con éxito todos los archivos de prueba
// positivos.

// Dadas dos cadenas que consisten únicamente en los dígitos 0 y 1, encuentre el XOR de las dos cadenas.

// Depure la función dada strings_xor para encontrar el XOR de las dos cadenas dadas de manera adecuada.

// NOTA: Puede modificar un máximo de tres líneas en el código dado y no puede agregar ni quitar líneas al código.

function strings_xor(str) {
  let output = "";
  const str1 = str.slice(0, str.length/2);
  const str2 = str.slice(str.length/2);
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2[i]) output += '0'
    else output += '1'
  }
  console.log(output);
}

const str1 = `1010100101`

strings_xor(str1);

// 0 XOR 0 => 0
// 1 XOR 0 => 1
// 0 XOR 1 => 1
// 1 XOR 1 => 0