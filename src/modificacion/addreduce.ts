import {Reduce} from '../modificacion/reduce';
/**
 * Clase Reduce
 */
 export class AddReduce extends Reduce{
    protected array: number[];
  
    constructor(){
        super()
    }

    public reduce(){
        var resultado :number = 0
        this.array.forEach(element => {
            resultado = resultado + element
        });
        return resultado
    }

    protected afterReduce() {
        console.log("El vector fue reducido con suma");
      }
}