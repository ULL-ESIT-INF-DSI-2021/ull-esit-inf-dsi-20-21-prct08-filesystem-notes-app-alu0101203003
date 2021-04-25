import * as fs from 'fs';
const chalk=require('chalk');
import {Nota} from './nota';

/**
 * Clase Usuario.
 * Almacena las propiedades de un usuario.
 * Implementa las funciones para manipular las notas de un usuario.
 */
export class Usuario {
    /**
     * Constructor
     * @param nombre del usuario
     */ 
    constructor(private nombre :string) {
        if (!this.existeUsuario(this.nombre)){
            fs.mkdirSync(`src/aplicacion/notas/${this.nombre}`);
        }
    }

    /**
     * Funcion getNombre
     * @returns nombre
     */
    public getNombre(){
        return this.nombre
    }  

    /**
     * Función añadirNota.
     * Permite añadir una nota en el directorio del usuario
     * @param titulo titulo de la nota
     * @param cuerpo cuerpo de la nota
     * @param color color de la nota
     */ 
    public añadirNota(titulo :string, cuerpo :string, color :string){
        if (this.existeNota(this.nombre,titulo)){
            console.log(chalk.red("Error. La nota ya existe"));
        } else {
            var nota = new Nota(titulo,cuerpo,color);
            var notaFormateada = nota.formatear();
            fs.writeFile(`src/aplicacion/notas/${this.nombre}/${titulo}.json`, notaFormateada, () => {
                console.log(chalk.green('Nota añadida con éxito'));
              });
        }
    }

    public existeUsuario (nombre :string){
        if (fs.existsSync(`src/aplicacion/notas/${nombre}`)){
            return true
        } else {
            return false
        }
    }
    
    public existeNota (nombre :string, titulo :string){
        if (fs.existsSync(`src/aplicacion/notas/${nombre}/${titulo}.json`)){
            return true
        } else {
            return false
        }
    }
    
    public colorear (texto :string, color :string){
        var resultado = "";
    
        switch (color){
            case "rojo":
                resultado = chalk.red(`${texto}`)
                break;
            case "verde":
                resultado = chalk.green(`${texto}`)
                break;
            case "azul":
                resultado = chalk.blue(`${texto}`)
                break;
            case "amarillo":
                resultado = chalk.yellow(`${texto}`)
                break;
            default:
                break;
        }
    
        return resultado
    }
}
