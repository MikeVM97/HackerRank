// Se le dará una lista de enteros sin signo de 32bits. Da la vuelta a todos los bits(1 -> 0 y 0 -> 1) y devuelve 
// el resultado como un entero sin signo.

// Ejemplo:
// n = 9
// 9 = 1001. Estamos trabajando con 32 bits, asi que
// 00000000000000000000000000001001 = 9
// 11111111111111111111111111110110 = 4294967286
// Return 4294967286

function flippingBits(n) {
    function binToDecimal(bin) {
        let result = 0;
        for (let i = 0; i < bin.length; i++) {
            result += parseInt(bin[i]) * Math.pow(2, bin.length-1-i);
        }
        return result;
    }
    function decToBinary(dec) {
        let binary = ''; // '1011'
        let aux = dec;
        while (aux !== 0) {
            binary += (aux % 2);
            aux = Math.floor(aux / 2);
        }
        let final = '';
        for (let i = binary.length-1; i >= 0; i--) {
            final += binary[i];
        }
        return final;
    }
    
    if (decToBinary(n).length < 32) {
        let bits = '';
        let i = 0;
        while (i < 32 - decToBinary(n).length) {
            bits += '0'
            i++
        }
        bits += decToBinary(n);
        let convert = '';
        for (let i = 0; i < bits.length; i++) {
            if (bits[i] === '0') convert += '1'
            if (bits[i] === '1') convert += '0'
        }
        return binToDecimal(convert);
    }
    if (decToBinary(n).length === 32) {
        let bits = '';
        bits += decToBinary(n);
        let convert = '';
        for (let i = 0; i < bits.length; i++) {
            if (bits[i] === '0') convert += '1'
            if (bits[i] === '1') convert += '0'
        }
        return binToDecimal(convert);
    }
}

const n1 = 2147483647;
const n2 = 1;
const n3 = 0;

console.log(flippingBits(n1));
console.log(flippingBits(n2));
console.log(flippingBits(n3));