const nombre = 'Fernando';
const apellido = 'Herrera';

const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `${nombre}  ${apellido} ${ 1 + 1 }`;

console.log( nombreCompleto );

function getSaludo(nombre) {
    return 'hola' + nombre;
}

console.log(`Este es un texto ${ getSaludo(nombre)}`);