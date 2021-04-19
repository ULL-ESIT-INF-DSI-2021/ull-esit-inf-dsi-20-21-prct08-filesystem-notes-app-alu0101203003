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
    // Hook inicial
    this.beforeReduce();
    // Reducir
    this.reduce();
    // Hook final
    this.afterReduce();
    }

    public abstract reduce(): void;

    // Hooks (opcionales)
    protected beforeReduce() {
        console.log("El vector ha reducir es:" + this.array);}
    protected afterReduce() {
    }
}


