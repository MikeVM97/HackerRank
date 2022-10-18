/* Dos jugadores están jugando un juego de Tower Breakers. Jugador 1 siempre se mueve primero, y ambos jugadores
  siempre juegan de manera óptima. Las reglas del juego son las siguientes:
  
  - Inicialmente hay "n" torres
  - Cada torre tiene una altura "m"
  - Los jugadores se mueven en turnos alternos
  - En cada turno, un jugador puede elegir una torre de altura "x" y reducir su altura "y", donde
    1 <= y < x      y    "y" divide uniformemente "x"
  - Si el jugador actual no puede hacer un movimiento, pierde el juego
  
  Dados los valores de "n" y "m", determina que jugador ganará. Si el primer jugador gana, devuelve 1.
  De lo contrario devuelve 2.
  
  Ejemplo:
  n = 2
  m = 6
  Existen 2 torres, cada una 6 unidades de altura. Jugador 1 tiene la opción de dos movimientos:
  - Eliminar 3 pedazos de una torre para dejar 3 como 6 % 3 = 0
  - Retirar 5 piezas para dejar 1

  Dejamos que el jugador 1 retire 3. Ahora las torres son 3 y 6 unidades de altura.
  Jugador 2 hace su movimiento. Ahora las torres son 3 unidades de altura.
  Ahora jugador 1 tiene un solo movimiento.
  Jugador 1 elimina 2 piezas dejando solo 1. Las torres son 1 y 2 unidades de altura.
  Jugador 2 juega de nuevo. Ahora las torres son 1 unidad de altura
  Jugador 1 no tiene movimiento y pierde. Devolver 2 */

function towerBreakers(n ,m) {
  if ( m == 1 || n % 2 == 0 ) return 2
  else return 1;
}

const n1 = 2;
const m1 = 6;

const n2 = 2;
const m2 = 2;

const n3 = 1;
const m3 = 4;