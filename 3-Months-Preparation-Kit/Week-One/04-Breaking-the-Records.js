// Maria juega baloncesto en la universidad y quiere convertirse en profesional. Cada temporada mantiene un
// registro de su juego. Ella tabula la cantida de veces que rompe su record de la temporada de más puntos
// y menos puntos en un juego. Los puntos anotados en el primer juego establecen un record para la temporada
// y comienza a contar a partir de ahí.

// Ejemplo:
// scores = [12, 24, 10, 24]
// Las puntuaciones están en el mismo orden que los juegos jugados. Ella tabula los resultados de la sgte manera:
/*                                                  
                                                    Count
            Game    Score   Minimum    Maximum    Min   Max
              0       12       12         12       0     0
              1       24       12         24       0     1
              2       10       10         24       1     1
              3       24       10         24       1     1
*/
// Output: [1, 1]

// Dado los puntajes de una temporada, determine la cantidad de veces que Maria rompe sus records de más y
// menos puntos anotados durante la temporada.

function breakingRecords(scores) {
    let min = 0; 
    let max = 0;
    let minimum = scores[0];
    let maximum = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maximum) {
            maximum = scores[i];
            max++
        }
        if (scores[i] < minimum) {
            minimum = scores[i];
            min++
        }
    }
    const arr = [max, min];
    return arr;
}

const scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];

console.log(breakingRecords(scores1));