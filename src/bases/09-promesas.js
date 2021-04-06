import { getHeroeById } from './08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('Hereo', heroe);
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = (id) => { 
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if(p1) {
                resolve( p1 );
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(3)
.then( console.log )
.catch( err => console.warn( err ));