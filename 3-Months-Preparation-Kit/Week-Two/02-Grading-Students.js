// La Universidad de HackerLand tiene la siguiente política de calificación
// - Cada estudiante recive una calificación en el rango inclusivo de 0 a 100
// - Cualquier calificación menor a 40 es una nota reprobatoria

// Sam es profesor en la universidad y le gusta redondear la calificación de cada estudiante de acuerdo
// con estas reglas:

// - Si la diferencia entre la calificación y el siguiente múltiplo de 5 es menor que 3, redondee al siguiente
//   múltiplo de 5.
// - Si el valor de la calificación es inferior a 38, no se redondea, ya que el resultado seguirá siendo
//   una calificación reprobatoria.

// Dado el valor inicial de calificación para cada estudiante, escribe código para automatizar el proceso de redondeo.

// Ejemplo:
// grade = 84 redondear a 85 (85 - 84 es menor que 3)
// grade = 29 no redondear (el resultado es menor que 40)
// grade = 57 no redondear (60 - 57 es mayor o igual que 3)

// Input:
// grades = [73, 67, 38, 33]

// Output:
// [75, 67, 40, 33]

function gradingStudents(grades) {
    function round(grade) {
        if (grade < 38) return grade;
        const arr = []; // 73, 74, 75, 76, 77, 78
        let i = grade;
        while (i <= grade+5) {
            arr.push(i);
            i++
        }
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] % 5 === 0) {
                if (arr[j] - grade < 3) return arr[j];
                else return grade;
            }
        }
    }
    const newArr = [];
    for (let i = 0; i < grades.length; i++) {
        newArr.push(round(grades[i]));
    }
    return newArr;
}

const grades1 = [73, 67, 38, 33];

console.log(gradingStudents(grades1));