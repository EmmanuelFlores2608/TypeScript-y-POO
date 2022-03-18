type alfanumerico = string | number;
//String
var cadena: alfanumerico = "3";

//Number
var numero: number = 12;


//Boolean
var verdadero_falso: boolean = true;

//Cualquiera
var calquiera: any = "Hola";

//Array
var lenguajes: Array<string> = ["PHP", "JS", "C"]

var years: number[] = [1, 2, 3, 4];

console.log(cadena, numero, verdadero_falso, calquiera, years);


//Var vs let
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}
console.log(numero1, numero2)
