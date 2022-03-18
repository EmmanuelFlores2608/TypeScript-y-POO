//String
var cadena = "3";
//Number
var numero = 12;
//Boolean
var verdadero_falso = true;
//Cualquiera
var calquiera = "Hola";
//Array
var lenguajes = ["PHP", "JS", "C"];
var years = [1, 2, 3, 4];
console.log(cadena, numero, verdadero_falso, calquiera, years);
//Var vs let
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
