import * as yargs from 'yargs';
import { Usuario } from '../aplicacion/usuario';
const chalk=require('chalk')

/**
 * Comando add.
 * Añade una nota al directorio del usuario
 */
 yargs.command({
    command: 'add',
    describe: 'Añade una nueva nota',
    builder: {
      usuario: {
        describe: 'Nombre del usuario',
        demandOption: true,
        type: 'string',
      },
      titulo: {
        describe: 'Titulo de la nota',
        demandOption: true,
        type: 'string',
      },
      cuerpo: {
        describe: 'Cuerpo de la nota',
        demandOption: true,
        type: 'string',
      },
      color: {
        describe: 'Color de la nota',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.usuario === 'string' && typeof argv.titulo === 'string' && typeof argv.cuerpo === 'string' && typeof argv.color === 'string') {
        var usuario = new Usuario(argv.usuario);
        usuario.añadirNota(argv.titulo, argv.cuerpo, argv.color);
        
      } else {
        console.log(chalk.red("Error. Comando mal especificado"));
      }
    },
  });

  yargs.argv;

