import {Reduce} from '../modificacion/reduce';
/**
 * Clase AddReduce
 */
 export class AddReduce extends Reduce{
    protected array: number[];
  
    constructor(){
        super()
    }

    /**
    * Funcion reducir: reduce por suma (suma valor a valor del array)
    */
    public reduce(){
        var resultado :number = 0
        this.array.forEach(element => {
            resultado = resultado + element
        });
        return resultado
    }

    /**
    * Funcion afterReduce: sirve de hook
    */
    protected afterReduce() {
        console.log("El vector fue reducido con suma");
    }
}