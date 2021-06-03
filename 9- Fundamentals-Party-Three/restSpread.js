const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], "Luiz");
// ... rest -> ... spread
// const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a1, a2);
console.log(a3);

// ... rest, ... spread
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
