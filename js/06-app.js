// 6. Convertir Strings a Números.mp4
const numberaString1 = '20';
const numberaString2 = '20.2';
const numberaString3 = 'Uno';
const numberaString4 = 20;

// saber que es un string o numero typeof
console.log(typeof numberaString1);

// convertir string a numero ENTERO
console.log( Number.parseInt(numberaString1) );
// convertor string a numero FLOTANTE
console.log( Number.parseFloat(numberaString2) );

// Revisar si un número es entero o no
console.log(Number.isInteger(numberaString2)); //false
console.log(Number.isInteger(numberaString3)); //false
console.log(Number.isNaN(numberaString3)); //false
console.log(Number.isInteger(numberaString4)); //true
    