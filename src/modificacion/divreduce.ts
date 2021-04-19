import {Reduce} from '../modificacion/reduce';
/**
 * Clase DivReduce
 */
 export class DivReduce extends Reduce{
    protected array: number[];
  
    constructor(){
        super()
    }

    /**
    * Funcion reducir: reduce por división (divide valor a valor del array)
    */
    public reduce(){
        var resultado :number = this.array[0]
        for (var i:number = 1; i < this.array.length; i++){
            resultado = resultado / this.array[i]
        }
        return resultado
    }

    /**
    * Funcion afterReduce: sirve de hook
    */
    protected afterReduce() {
        console.log("El vector fue reducido con division");
      }
}