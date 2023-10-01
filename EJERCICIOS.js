// Ejercicio 1
const a = 5;
const b = 3;
const c = 2;
const d = 9;
const e = 14;

const resultadoparentesis = (a + b * c) + d;
const resultadoDerecha = (3 * 5 * e) % 3;

const resultadoFinal = resultadoparentesis > resultadoDerecha;

console.log("Resultado resultadoparentesis:", resultadoparentesis);
console.log("Resultado derecha:", resultadoDerecha);

// Ejercicio 2
const a1 = 4;
const b1 = 10;
const c1 = 8;
const d1 = 2;
const e1 = 36;
const f = 1 / 2;

const resultado = d1 * (a1 - b1 + c1) / d1 * e1 * f;
console.log(resultado);

// Ejercicio 3 
const result1 = 260 / 12 + 54 % 3 - 85 % 7;
console.log(result1);

// Ejercicio 4
const expresion1 = 48 < 2 * 3;
const expresion2 = 2 * 7 < 12;
const result = expresion1 || expresion2;
console.log(`Expresión 1: 48 < 2 * 3 es ${expresion1}`);
console.log(`Expresión 2: 2 * 7 < 12 es ${expresion2}`);
 
//Ejercicio 5
const A = 8 > 2;    // A es true, ya que 8 es mayor que 2
const B = 932 < 23; // B es false, ya que 932 no es menor que 23
const C = 4 == 2;   // C es false, ya que 4 no es igual a 2

const resultado2 = (A || B) && C;
console.log(`Expresión A: 8 > 2 es ${A}`);
console.log(`Expresión B: 932 < 23 es ${B}`);
console.log(`Expresión C: 4 == 2 es ${C}`);
console.log(`Resultado: (A || B) && C es ${resultado2}`);

//Ejercicio 6

const A1 = 3;
const B2 = 7;
const z = 2 * A1 + B2 - (A1 % 3);

console.log(`El valor de y es: ${z}`);

// Ejercicio 7
const X = 10;
const X1 = 4;

const Y1 = (X * X1 + 3) % (X + X1);

console.log(`El valor de z es: ${Y1}`);

// Ejercicio 8
const A3 = 6;
const B3 = 2;

const w = A3 - B3 + 2 * A3 % B3;

console.log(`El valor de w es: ${w}`);

// Ejercicio 9
const A4 = 8;
const B4 = 5;

const v = 2 * B4 + Math.floor(A4 / 2) + 4 * B4 % A4;

console.log(`El valor de v es: ${v}`);

// Ejercicio 10
const A5 = 12;
const B5 = 9;

const u = B5 - A5 + 3 * A5 % B5;

console.log(`El valor de u es: ${u}`);

// Ejercicio 11

let num1 = 20;
let num2 = 15;
let suma = 0;
if ( num1 > num2 ){
    suma = num1 +num2;
    console.log ('la suma de los numeros ${num1} y $ {num2} es: ${suma}.')
}
//ejercicios 12- area de un triangulo

let BASE = 5;
let ALTURA = 8;

let AREA = (BASE * ALTURA) / 2;

console.log("El área del triángulo con base " + BASE + " y altura " + ALTURA + " es: " + AREA);


// ejercicio 13

let numero = 1; 

if (numero % 2 === 0) {
  console.log(`${numero} es un número par.`);
} else {
  console.log(`${numero} es un número impar.`);
}

//ejercicio 14- Calculadora simple

const NUMEROY = 1
const NUMEROF = 2
const operacion = "+"

let RESULTADOS;

switch (operacion) {
  case "+":
    RESULTADOS = NUMEROY + NUMEROF;
    console.log(`Resultado de la suma: ${RESULTADOS}`);
    break;
  case "-":
    RESULTADOS = NUMEROY - NUMEROF;
    console.log(`Resultado de la resta: ${RESULTADOS}`);
    break;
  case "*":
    RESULTADOS = NUMEROY * NUMEROF;
    console.log(`Resultado de la multiplicación: ${RESULTADOS}`);
    break;
  case "/":
    if (NUMEROF !== 0) {
        RESULTADOS = NUMEROY / NUMEROF;
      console.log(`Resultado de la división: ${RESULTADOS}`);
    } else {
      console.log("Error: No se puede dividir por cero.");
    }
    break;
  default:
    console.log("Operación no válida");
}

//Ejercicio 15- Tabla de multiplicar

const Numero = 5; 

for (let i = 1; i <= 10; i++) {
    const resultado6 = Numero * i;
    console.log(`${Numero} x ${i} = ${resultado6}`);
}
//Ejercicio 16 - Copiar palabra

const palabra1 = "Hola";
const palabra2 = "Mundo";
const resultado6 = palabra1 + palabra2;

console.log(`Las palabras concatenadas son: ${resultado6}`);
 // Ejercicio 17- Mayor de tres numeros

const numero1 = 10;
const numero2 = 5;
const numero3 = 7;

const mayor = numero1 > numero2
  ? (numero1 > numero3 ? numero1 : numero3)
  : (numero2 > numero3 ? numero2 : numero3);

console.log(`El número mayor es: ${mayor}`);

// Ejercicio 18- Edad mínima para votar

const edad = 17

if (edad >= 18) {
    console.log("Es mayor para votar.");
} else {
    console.log("No es mayor elegible para votar.");
}

// Ejercicio 19- Calculadora de BM
("Ingrese su peso en kg:"); 
("Ingrese su altura en metros:");
let peso = 70
let altura = 1.75

let bmi = peso / (altura * altura);

let categoriaPeso;

if (bmi < 18.5) categoriaPeso = "Bajo peso";
else if (bmi < 25) categoriaPeso = "Peso saludable";
else if (bmi < 30) categoriaPeso = "Sobrepeso";
else categoriaPeso = "Obesidad";

console.log(`Su BMI es: ${bmi.toFixed(2)}`);
console.log(`Está en la categoría de peso: ${categoriaPeso}`);

// Ejercicio 20- Número positivo, negativo o cero

("Ingrese un número:"); 
let nume = 0

if (nume > 0) {
  console.log("El número es positivo.");
} else if (nume < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}
 // Ejercicio 21- Año bisiesto
("Ingrese un año:");
let year =  2005

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} es un año bisiesto.`);
} else {
  console.log(`${year} no es un año bisiesto.`);
}

//Ejercicio 22- Signo zodiacal
("Ingrese el número de su mes de nacimiento (1-12):"); 
("Ingrese el día de su nacimiento (1-31):"); 
let mes = 2
let dia = 23

let signoZodiacal;

switch (mes) {
  case 1:
    if (dia >= 20) {
      signoZodiacal = "Acuario";
    } else {
      signoZodiacal = "Capricornio";
    }
    break;
  case 2:
    if (dia >= 19) {
      signoZodiacal = "Piscis";
    } else {
      signoZodiacal = "Acuario";
    }
    break;
  case 3:
    if (dia >= 21) {
      signoZodiacal = "Aries";
    } else {
      signoZodiacal = "Piscis";
    }
    break;
  case 4:
    if (dia >= 20) {
      signoZodiacal = "Tauro";
    } else {
      signoZodiacal = "Aries";
    }
    break;
  case 5:
    if (dia >= 21) {
      signoZodiacal = "Géminis";
    } else {
      signoZodiacal = "Tauro";
    }
    break;
  case 6:
    if (dia >= 21) {
      signoZodiacal = "Cáncer";
    } else {
      signoZodiacal = "Géminis";
    }
    break;
  case 7:
    if (dia >= 23) {
      signoZodiacal = "Leo";
    } else {
      signoZodiacal = "Cáncer";
    }
    break;
  case 8:
    if (dia >= 23) {
      signoZodiacal = "Virgo";
    } else {
      signoZodiacal = "Leo";
    }
    break;
  case 9:
    if (dia >= 23) {
      signoZodiacal = "Libra";
    } else {
      signoZodiacal = "Virgo";
    }
    break;
  case 10:
    if (dia >= 23) {
      signoZodiacal = "Escorpio";
    } else {
      signoZodiacal = "Libra";
    }
    break;
  case 11:
    if (dia >= 22) {
      signoZodiacal = "Sagitario";
    } else {
      signoZodiacal = "Escorpio";
    }
    break;
  case 12:
    if (dia >= 22) {
      signoZodiacal = "Capricornio";
    } else {
      signoZodiacal = "Sagitario";
    }
    break;
  default:
    signoZodiacal = "Fecha de nacimiento no válida";
    break;
}
console.log(`Su signo zodiacal es: ${signoZodiacal}`);

// Ejercicio 23- Declare un número de día del mes

("ingrese un numero del 1-31");
let Dia = 15 
let quincena;
if (Dia >= 1 && Dia <= 15) {
  quincena = "Primera quincena";
} else if (Dia >= 16 && Dia <= 31) {
  quincena = "Segunda quincena";
} else {
  quincena = "Número de día no válido";
}

console.log(`El Día ${Dia} pertenece a la ${quincena}.`);

//Ejercicio 24-  Día de la semana

("Ingrese un número del 1 al 7:");
let numeroDia = 3 
let nombreDia;

switch (numeroDia) {
  case 1:
    nombreDia = "Domingo";
    break;
  case 2:
    nombreDia = "Lunes";
    break;
  case 3:
    nombreDia = "Martes";
    break;
  case 4:
    nombreDia = "Miércoles";
    break;
  case 5:
    nombreDia = "Jueves";
    break;
  case 6:
    nombreDia = "Viernes";
    break;
  case 7:
    nombreDia = "Sábado";
    break;
  default:
    nombreDia = "Número de día no válido";
    break;
}

console.log(`El número ${numeroDia} corresponde a ${nombreDia}.`);

// Ejercicio 25- Frases iguales

// ingresar fras entre comillas
let frase1 = "hola"
let frase2 = "hola"

if (frase1 === frase2) {
  console.log("Las frases son iguales.");
} else {
  console.log("Las frases no son iguales.");
}

// Ejercicio 26- Calculadora de precio con descuento    

"Ingrese el precio del artículo en dólares:"
let precio = 25
"Ingrese el porcentaje de descuento (%):"

let porcentajeDescuento = 50

let descuento = (porcentajeDescuento / 100) * precio;
let precioFinal = precio - descuento;

console.log(`El precio final después del ${porcentajeDescuento}% de descuento es de $${precioFinal.toFixed(2)}.`);

// Ejercicio 27- Calculadora de factura con impuestos

"Ingrese el total de la factura en dólares:"
let totalFactura = 25
"Ingrese el porcentaje de impuestos (%):"
let porcentajeImpuestos = 12

let impuestos = (porcentajeImpuestos / 100) * totalFactura;

let montoTotal = totalFactura + impuestos;

console.log(`El monto total a pagar, incluyendo ${porcentajeImpuestos}% de impuestos, es de $${montoTotal.toFixed(2)}.`);

// Ejercicio 28- Calculadora de sueldo con aumento

"Ingrese el salario actual en dólares:"

let salarioActual =450

"Ingrese el porcentaje de aumento (%):"

let porcentajeAumento = 21

let aumento = (porcentajeAumento / 100) * salarioActual;

let nuevoSalario = salarioActual + aumento;

console.log(`El nuevo salario después del ${porcentajeAumento}% de aumento es de $${nuevoSalario.toFixed(2)}.`);
 
// Ejercicio 29- Calculadora de compra con múltiples artículos

"Ingrese el precio del primer artículo en dólares:"
let precioArticulo1 = 25
"Ingrese la cantidad del primer artículo:"
let cantidadArticulo1 = 2
"Ingrese el precio del segundo artículo en dólares:"
let precioArticulo2 = 3
"Ingrese la cantidad del segundo artículo:"
let cantidadArticulo2 = 5

let totalCompra = (precioArticulo1 * cantidadArticulo1) + (precioArticulo2 * cantidadArticulo2);

if (totalCompra > 100) {
  let descuento = 0.10 * totalCompra;
  totalCompra -= descuento;
  console.log(`Se aplicó un descuento del 10% por un total de $${descuento.toFixed(2)}.`);
}

console.log(`El total de la compra es de $${totalCompra.toFixed(2)}.`);

// Ejercicio 30- Descuento por antigüedad en la empresa

"Ingrese cuántos años ha estado trabajando en la empresa:" 

let AñosAntigüedad =4

"Ingrese su salario actual en dólares:" 

let SalarioActual = 250


let BonoAntigüedad = 0;


if (AñosAntigüedad > 5) {
  BonoAntigüedad = 0.05 * SalarioActual;
  console.log(`Se otorga un bono de antigüedad del 5% por un total de $${BonoAntigüedad.toFixed(2)}.`);
} else {
  console.log("No califica para un bono de antigüedad.");
}

let SalarioTotal = SalarioActual + BonoAntigüedad;
console.log(`Su salario total incluyendo el bono de antigüedad es de $${SalarioTotal.toFixed(2)}.`);

// Ejercicio 31- Calculadora de envío con tarifas diferentes

"Ingrese la distancia de envío en kilómetros:"

let distanciaEnvio = 23

let costoEnvio;

if (distanciaEnvio < 50) {
  costoEnvio = 10;
} else {
  costoEnvio = 20;
}

console.log(`El costo del envío es de $${costoEnvio}.`);

// Ejercicio 32- Calculadora de descuento por lealtad del cliente

let totalAnualCompras = 0;

for (let mes = 1; mes <= 12; mes++) {
    `Ingrese el total de compras del mes ${mes} en dólares:`
  let compraMensual = 555
  totalAnualCompras += compraMensual;
}

if (totalAnualCompras > 500) {

    "Ingrese el total de la próxima compra en dólares:"

  let proximaCompra = 21
  let descuento = 0.10 * proximaCompra;
  let totalConDescuento = proximaCompra - descuento;
  console.log(`Se aplicó un descuento del 10% por un total de $${descuento.toFixed(2)}.`);
  console.log(`El total a pagar después del descuento es de $${totalConDescuento.toFixed(2)}.`);
} else {
  console.log("No califica para un descuento en la próxima compra.");
}

// Ejercicio 33- Calculadora de descuento por volumen de compra

"Ingrese la cantidad de unidades que va a comprar:"
let CantidadUnidades = 12
"Ingrese el precio unitario del producto en dólares:"
let PrecioUnitario = 22


let PrecioTotalSinDescuento = CantidadUnidades * PrecioUnitario;


let PorcentajeDescuento = 0;


if (CantidadUnidades >= 10 && CantidadUnidades <= 50) {
  PorcentajeDescuento = 0.05; // 5% de descuento
} else if (CantidadUnidades > 50 && CantidadUnidades <= 100) {
  PorcentajeDescuento = 0.10; // 10% de descuento
} else if (cantidadUnidades > 100) {
  PorcentajeDescuento = 0.15; // 15% de descuento
}


let Descuento = PorcentajeDescuento * PrecioTotalSinDescuento;


let PrecioTotalConDescuento = PrecioTotalSinDescuento - Descuento;


console.log(`El precio total sin descuento es de $${PrecioTotalSinDescuento.toFixed(2)}.`);
console.log(`Se aplicó un descuento del ${PorcentajeDescuento * 100}% por un total de $${Descuento.toFixed(2)}.`);
console.log(`El precio total con descuento es de $${PrecioTotalConDescuento.toFixed(2)}.`);

// Ejercicio 34- Calculadora de costo de servicio

"Ingrese la cantidad de horas de servicio que necesita:"

let horasServicio = 3

const costoPorHora = 10;

let costoTotalSinDescuento = horasServicio * costoPorHora;

let Descuento1 = 0;

if (horasServicio > 10) {
  descuento = 0.20 * costoTotalSinDescuento;
}

let costoTotalConDescuento = costoTotalSinDescuento - Descuento1;

console.log(`El costo total sin descuento es de $${costoTotalSinDescuento.toFixed(2)}.`);
if (Descuento1 > 0) {
  console.log(`Se aplicó un descuento del 20% por un total de $${Descuento1.toFixed(2)}.`);
}
console.log(`El costo total con descuento es de $${costoTotalConDescuento.toFixed(2)}.`);

// Ejercicio 35- Suma de números pares

let Suma1 = 0;

for (let Numero12 = 1; Numero12 <= 50; Numero12++) {

  if (Numero12 % 2 === 0) {
    Suma1 += Numero12;
  }
}

console.log(`La suma de los números pares del 1 al 50 es: ${Suma1}`);

// Ejercicio 36- Tabla de multiplicar

"Ingrese un número para mostrar su tabla de multiplicar:"

let NUME = 3

if (!isNaN(NUME)) {

  console.log(`Tabla de multiplicar del ${NUME}:`);
  for (let i = 1; i <= 12; i++) {
    let resultado = NUME * i;
    console.log(`${NUME} x ${i} = ${resultado}`);
  }
} else {
  console.log("Por favor, ingrese un número válido.");
}

// Ejercicio 37- Contador de vocales 

"Ingrese una palabra entre las comillas"

let palabra = "hola"

let contadorVocales = 0;

palabra = palabra.toLowerCase();

let indice = 0;

while (indice < palabra.length) {
  let letra = palabra.charAt(indice);
  
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    contadorVocales++;
  }
  
  indice++;
}
console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocales.`);

// Ejercicio 38- Contador de digitos

"Ingrese una palabra:"

let Palabra1 = "HOLA00"


let contadorDigitos = 0;


for (let i = 0; i < Palabra1.length; i++) {
  let caracter = Palabra1.charAt(i);
  
 
  if (!isNaN(parseInt(caracter))) {
    contadorDigitos++;
  }
}


console.log(`La palabra "${Palabra1}" tiene ${contadorDigitos} dígitos.`);

// Ejercicio 39- Adivina el número

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let intentos = 0;

while (true) {
    "Adivina el número entre 1 y 10:"
  const intento = 0

  intentos++;   

  if (intento === numeroAleatorio) {
    console.log (`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
    break; 
  }
}

// Ejercicio 40- contandor de Alfabeto 

"Ingrese una  PAlabra:"

let PAlabra = "hola"

let contadorLetrasAlfabeto = 0;

PAlabra =  PAlabra.toLowerCase();

for (let i = 0; i <  PAlabra.length; i++) {
  let letra =  PAlabra.charAt(i);
  
  if (letra >= "a" && letra <= "z") {
    contadorLetrasAlfabeto++;
  }
}

console.log(`La  PAlabra "${ PAlabra}" contiene ${contadorLetrasAlfabeto} letras del alfabeto.`);

// Ejercicio 41- Suma de números impares

let sumaImpares = 0;

let NUMEro = 1;

while (NUMEro <= 100) {
  if (NUMEro % 2 !== 0) {
    sumaImpares += NUMEro;
  }
  NUMEro++;
}

console.log(`La suma de los números impares del 1 al 100 es: ${sumaImpares}`);

// Ejercicio 42- Contador de caracteres

"Ingrese una Palabra:"
let PALAbra = "Hola"
let longitud = PALAbra.length;
console.log(`La PALAbra "${PALAbra}" tiene ${longitud} caracteres.`);

// Ejercicio 43- Suma de números

let SUma = 1;
while (true) {
  "Ingrese un número entero positivo (o un número negativo para terminar):"
  let NUMERO2 = -1  
  if (NUMERO2 < 0) {
    break; 
  }

  if (!isNaN(NUMERO2) && NUMERO2 >= 0) {

    SUma += NUMERO2;
  } else {
    console.log ("Por favor, ingrese un número entero positivo válido.");
  }
}
console.log(`La suma de los números ingresados es: ${SUma}`);

// Ejercicio 44- cuenta regresiva

"Ingrese un número entero positivo:"
let NUMERO1 = 10
if (!isNaN(NUMERO1) && NUMERO1 > 0) {
  while (NUMERO1 >= 1) {
    console.log(NUMERO1);
    NUMERO1--;
  }
} else {
  console.log ("Por favor, ingrese un número entero positivo válido.");
}
