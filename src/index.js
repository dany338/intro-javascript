let arreglo = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];
console.log(arreglo);
let zeros = 0;
for (let i = 0; i < arreglo.length; i++) {
    const a = arreglo[i];
    if (a === 0) {
        arreglo.splice(i, 1);
        zeros++;
    }
}
const newArreglo = [ ...arreglo, ...new Array(zeros).fill(0)];
console.log(newArreglo);
console.log(arreglo);
let numeroficticio = Number(arreglo.join(''));
console.log(numeroficticio);
numeroficticio = numeroficticio + 1;
console.log(numeroficticio);
const arregloNumero = Array.from(numeroficticio.toString()).map(Number);
// Array.from(n.toString()).map(Number);
console.log(arregloNumero);

for (let i = 0; i < arregloNumero.length; i++) {
    const num = Number(arregloNumero[i]);
    arregloNumero[i] = num;
    if (!(i % 2)) {
        arregloNumero[i] = num * -1;
    }
}

console.log(arregloNumero);

const sum = arregloNumero.reduce((a, b) => a + b, 0);

console.log(sum);
