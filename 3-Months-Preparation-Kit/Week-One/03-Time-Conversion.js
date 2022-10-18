// Dada una hora en formato AM/PM de 12 horas, conviértala a hora militar (24 horas)
// Nota: 
//      12:00:00 AM en un reloj de 12 horas es, 00:00:00 en un reloj de 24 horas
//      12:00:00 PM en un reloj de 12 horas es, 12:00:00 en un reloj de 24 horas

// Ejemplo:
// s = '12:01:00PM'     =>      return '12:01:00'
// s = '12:01:00AM'     =>      return '00:01:00'

function timeConversion(s) {
    if (s[0] === "1" && s[1] === "2" && s[8] === "A") {
        s = s.replace("12", "00");
        s = s.replace("AM", "");
        return s;
    }
    if (s[8] === "A") {
        s = s.replace("AM", "");
        return s;
    }
    if (s[0] === "1" && s[1] === "2" && s[8] === "P") {
        s = s.replace("PM", "");
        return s;
    }
    if (s[8] === "P") {
        if (s[0] === "0" && (s[1] === "8" || s[1] === "9")) {
            s = s.replace(s[0], "2");
            if (s[1] === "8") s = s.replace(s[1], "0");
            if (s[1] === "9") s = s.replace(s[1], "1");
        }
        if (s[0] === "1" && parseFloat(s[1]) < 2) {
            s = s.replace(s[0], "2");
            if (s[1] === "0") s = s.replace(s[1], "2");
            if (s[1] === "1") s = s.replace(s[1], "3");
        }
        if (s[0] === "0" && parseFloat(s[1]) < 8) {
            s = s.replace(s[1], (parseFloat(s[1]) + 2).toString());
            s = s.replace(s[0], "1");
        }
        s = s.replace("PM", "");
        return s;
    }
}

const s1 = '07:05:45PM';
const s2 = '01:25:15PM';

console.log(timeConversion(s2));