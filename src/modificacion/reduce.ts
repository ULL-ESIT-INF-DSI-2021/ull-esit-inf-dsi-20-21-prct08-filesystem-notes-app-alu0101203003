/**
 * Clase Reduce
 */
export abstract class Reduce {
    protected array: number[];
  
    constructor(){
            this.array = [];
    }

    public getArray(){
        return this.array
    }

    public setArray(arr :number[]){
        this.array = arr
    }
    /**
    * Paso 1
    */
    public run() {
    // Reducir
    this.reduce();
    // Hook
    this.afterReduce();
    }

    public abstract reduce(): void;

    protected afterReduce() {}
}


