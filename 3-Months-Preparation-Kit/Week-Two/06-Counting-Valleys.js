// Un ávido excursionista mantiene registros meticulosos de sus caminatas. Durante la última caminata que tomó
// exactamente n pasos, para cada paso se anotó si era un paso cuesta arriba(U), o cuesta abajo(D). Las caminatas
// siempre comienzan y terminan al nivel del mar, y cada paso hacia arriba o hacia abajo representa un cambio de
// 1 unidad de altitud. Definimos los siguientes términos:

// ► Una montaña es una secuencia de pasos consecutivos sobre el nivel del mar, comenzando con un paso hacia arriba
//   desde el nivel del mar y terminando con un paso hacia abajo hasta el nivel del mar.
// ► Un valle es una secuencia de pasos consecutivos por debajo del nivel del mar, comenzando con un paso hacia abajo
//   desde el nivel del mar y terminando con un paso hacia arriba hasta el nivel del mar.

// Dada la secuencia de pasos hacia arriba y hacia abajo durante una caminata, encuentre el número de valles por los que pasó.

// Formato de entrada
// steps = un entero (la cantidad de pasos)
// path = 'DUDUDUDUDUDUDDUU'

// Formato de salida
// Retorna un entero, que representa la cantidad de valles por los que pasó

function countingValleys(steps, path) { // DDUU DDUDUU UD
    let seaLvl = 0;
    let valleys = ''; // 'DUUD'
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') seaLvl += 1
        if (path[i] === 'D') seaLvl += -1
        if (seaLvl === 0 && path[i] === 'U') valleys += path[i]
        if (seaLvl === 0 && path[i] === 'D') valleys += path[i]
        if (i === 0 && seaLvl === -1) valleys += 'D'
    }
    let count = 0;
    for (let i = 0; i < valleys.length-1; i++) {
        if (valleys[i] === 'D' && valleys[i+1] === 'U') count++
        if (valleys[i] === 'U' && valleys[i+1] === 'U') count++
    }
    return count;
}

const steps1 = 12;
const path1 = 'DDUUDDUDUUUD';

console.log(countingValleys(steps1, path1));