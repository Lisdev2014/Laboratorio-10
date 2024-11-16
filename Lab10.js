let nombre = String;
let edad = Number;
let esEstudiante = Boolean;

console.log(`Nombre: ${nombre}Edad: ${edad} Estudiante: ${esEstudiante}`);

nombre = 'Maria';
edad = '27';
esEstudiante = 'false';

console.log(`Nombre: ${nombre}Edad: ${edad} Estudiante: ${esEstudiante}`);


let a = Math.random() *10;
let b = Math.random() *20;

console.log(`Suma: ${a + b}\nResta: ${a - b}\nMultplicacion: ${a * b}\nDivision: ${a / b}\n`);

console.log(`==: ${a == b}\n !=: ${a != b}\n>: ${a > b}\n<: ${a < b}\n >=: ${a >= b}\n<=: ${a <= b}`);

let esMayorDeEdad = true;
let tieneLiciencia = false;

console.log(`Bienvenido, usted ${((esMayorDeEdad && tieneLiciencia) || tieneLiciencia) ? 'Puede conducir' : 'No puede conducir'}`);