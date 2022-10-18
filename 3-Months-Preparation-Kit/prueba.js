

function processData(input) {
  const arr = [];

  let array = [...input];
  array.sort((a, b) => a - b);
  let j = 0;
  while (j < array.length) {
    let value = array[j];
    let temp = array.slice(j + 1);
    if ( temp.includes(value) ) cut();
    j++
  }
  function cut() {
    for (let i = 0; i < array.length - 1; i++) {
      let val = array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] == val) {
          array = array.slice(0, j).concat(array.slice(j + 1));
          break;
        }
      }
    }
  }
  return array
}
// [0, 0, 1, 1, 2, 2, 2, 3]
const arr1 = [0, 1, 1, 2, 2, 3, 0, 2];

console.log(processData(arr1));