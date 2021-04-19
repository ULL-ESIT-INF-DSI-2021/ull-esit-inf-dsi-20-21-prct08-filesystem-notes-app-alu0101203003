import {Reduce} from '../modificacion/reduce';
/**
 * Clase ProdReduce
 */
 export class ProdReduce extends Reduce{
    protected array: number[];
  
    constructor(){
        super()
    }

    /**
    * Funcion reducir: reduce por multiplicación (multiplica valor a valor del array)
    */
    public reduce(){
        var resultado :number = 1
        this.array.forEach(element => {
            resultado = resultado*element;
        });
        return resultado
    }

    /**
    * Funcion afterReduce: sirve de hook
    */
    protected afterReduce() {
        console.log("El vector fue reducido con multiplicación");
      }
}