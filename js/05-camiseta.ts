//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function(){
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

//Clase (Molde del objeto)
@estampar('Polo')
class Camiseta implements CamisetaBase{
    //Propiedades (Caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    //Métodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public setColor(color){
        this.color  = color;
    }
    public getColor(){
        return this.color;
    }
}

//Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean; 
    
    public setCapucha(capucha: boolean){
        this.capucha  = capucha;
    }
        public getCapucha():boolean{
        return this.capucha;
    } 
       
}
var camiseta = new Camiseta("dasd", "sdasd", "sdaa", "dasd", 20)
console.log(camiseta);
camiseta.estampacion();

var sudadera = new Sudadera("dasd", "sdasd", "sdaa", "dasd", 20);
sudadera.setCapucha(true);
sudadera.setColor("Rojo");
console.log(sudadera);
    
