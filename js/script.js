// /*Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.*/

// const zucchine = [
//     {
//      varietà:'aldo',
//      peso: 50,
//      lunghezza:6,
//     },
//     {
//      varietà:'giovanni',
//      peso: 83,
//      lunghezza:12,
//     },
//     {
//      varietà:'giacomo',
//      peso: 46,
//      lunghezza:7,
//     },
//     {
//      varietà:'daniele',
//      peso: 77,
//      lunghezza:10,
//     },
//     {
//      varietà:'roberto',
//      peso: 23,
//      lunghezza:17,
//     },
//     {
//      varietà:'valerio',
//      peso: 79,
//      lunghezza:13,
//     },
//     {
//      varietà:'francesco',
//      peso: 56,
//      lunghezza:9,
//     },
//     {
//      varietà:'andrea',
//      peso: 12,
//      lunghezza:9,
//     },
//     {
//      varietà:'luca',
//      peso: 89,
//      lunghezza:11,
//     },
//     {
//      varietà:'mario',
//      peso: 47,
//      lunghezza:14,
//     },
// ];

// // let sum = 0;
// // for (let i = 0; i < zucchine.length; i++) {
// //     const element = zucchine[i];
// //     sum += element.peso;
    
// //     console.log(sum);
// // }



// /*Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/
// let small = [];
// let big = [];
// let pesoSmall = 0;
// let pesoBig = 0;
// for (let i = 0; i < zucchine.length; i++) {
//     const element = zucchine[i];
//     if (element.lunghezza < 15) {
//         small.push(element.lunghezza);
//         pesoSmall += element.peso;
//     } else {
//         big.push(element.lunghezza);
//         pesoBig += element.peso;
//     }
// }
// console.log(pesoSmall);
// console.log(pesoBig);




/*Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].*/

const arrayUno = ['a', 'b', 'c', 'd','e'];
const arrayDue = ['1', '2', '3', '4', '5'];
let arrayAlt = [];

function arrayFusion(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        arrayAlt.push(array1[i]);
        arrayAlt.push(array2[i]);
    }
    return array3;
}