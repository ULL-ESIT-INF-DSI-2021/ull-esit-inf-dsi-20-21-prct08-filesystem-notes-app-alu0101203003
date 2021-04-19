import {Reduce} from '../modificacion/reduce';
/**
 * Clase SubReduce
 */
 export class SubReduce extends Reduce{
    protected array: number[];
  
    constructor(){
        super()
    }

    /**
    * Funcion reducir: reduce por resta (resta valor a valor del array)
    */
    public reduce(){
        var resultado :number = this.array[0]
        for (var i:number = 1; i < this.array.length; i++){
            resultado = resultado - this.array[i]
        }
        return resultado
    }

    /**
    * Funcion afterReduce: sirve de hook
    */
    protected afterReduce() {
        console.log("El vector fue reducido con resta");
      }
}