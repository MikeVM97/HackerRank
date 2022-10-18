/* Louise se unió a un sitio de redes sociales para mantenerse en contacto con sus amigos. La página de registro
  le pedía que ingresara un nombre y una contraseña. Sin embargo, la contraseña debe ser fuerte. El sitio web
  considera que una contraseña es segura si cumple los siguientes criterios:
  
  - Su longitud es almenos 6
  - Contiene almenos un dígito
  - Contiene almenos un carácter inglés en minúscula
  - Contiene almenos un carácter inglés en mayúsculas
  - Contiene almenos un carácter especial. Los caracteres especiales son: !@#$%^&*()-+
  
  Ella escribió una cadena aleatoria de longitud "n" en el campo de la contraseña, pero no estaba segura de si la
  contraseña era segura. Dada la cadena que escribió, 
  ¿puede encontrar la cantidad mínima de caracteres que debe agregar para que su contraseña sea segura?
  
  NOTA: Este es el conjunto de tipos de caracteres en un formulario que puede pegar en su solución.
  
        números               : 0123456789
        minúsuculas           : abcdefghijklmnopqrstuvwxyz
        mayúsculas            : ABCDEFGHIJKLMNOPQRSTUVWXYZ
        caracteres especiales : !@#$%^&*()-+
  
  Ejemplo:
  password = "2bbbb"
  Esta contraseña tiene 5 caracteres y le falta una mayúscula y un caracter especial. El número mínimo de
  caracteres para agregar es 2.

  password = "2bb#A"
  Esta contraseña tiene 5 caracteres y tiene almenos 1 de cada tipo de caracter. El número mínimo de
  caracteres para agregar es 1.
  
  Devolver el número mínimo de caracteres para agregar. */

function minimumNumber(password) {
  const minus = /[a-z]/g;
  const mayus = /[A-Z]/g;
  const digits = /\d/g;
  const specials = /[!@#$%^&*()+-]/g;

  let minCharsToAdd = 0

  if ( !minus.test(password) ) minCharsToAdd++
  if ( !mayus.test(password) ) minCharsToAdd++
  if ( !digits.test(password) ) minCharsToAdd++
  if ( !specials.test(password) ) minCharsToAdd++

  if ( password.length + minCharsToAdd < 6 ) minCharsToAdd = 6 - password.length;

  return minCharsToAdd;
}

const password1 = "2bbbb";

const password2 = "2bb#A";

const password3 = "#HackerRank";

const password4 = "9";

const password5 = "xZaEu";

const password6 = "Ab1";

console.log(minimumNumber(password1));
console.log(minimumNumber(password2));
console.log(minimumNumber(password3));
console.log(minimumNumber(password4));
console.log(minimumNumber(password5));
console.log(minimumNumber(password6));