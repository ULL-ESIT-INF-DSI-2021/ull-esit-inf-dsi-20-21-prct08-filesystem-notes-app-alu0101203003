import 'mocha';
import {expect} from 'chai';
import {Nota} from '../src/aplicacion/nota';
import {Usuario} from '../src/aplicacion/usuario';
const chalk=require('chalk')

describe('Pruebas App', () => {
  

  describe('Pruebas Nota', () => {
    
    var nota1 = new Nota("Nota1","Cuerpo","rojo")

    it('nota1.getTitulo() returns "Nota1"', () => {
      expect(nota1.getTitulo()).to.be.equal("Nota1");
    });
   
    it('nota1.getCuerpo() returns "Cuerpo"', () => {
      expect(nota1.getCuerpo()).to.be.equal("Cuerpo");
    });

    it('nota1.getColor() returns "rojo"', () => {
      expect(nota1.getColor()).to.be.equal("rojo");
    });

    it('nota1.formatear() returns not null', () => {
        expect(nota1.formatear()).not.to.be.equal(null);
    });

  });

  describe('Pruebas Usuario', () => {

    var usuario1 = new Usuario("raul");

    it('usuario1.getNombre() returns raul', () => {
      expect(usuario1.getNombre()).to.be.equal("raul");
    });

    it('usuario1.existeUsuario(usuario1.getNombre()) returns true', () => {
        expect(usuario1.existeUsuario(usuario1.getNombre())).to.be.equal(true);
    });

    it('usuario1.existeNota(usuario1.getNombre(),"Nota1")) returns true', () => {
        expect(usuario1.existeNota(usuario1.getNombre(),"Nota1")).to.be.equal(true);
    });

    it('usuario1.colorear("texto","rojo") returns red texto', () => {
        expect(usuario1.colorear("texto","rojo")).to.be.equal(chalk.red("texto"));
    });
   
    it('usuario1.añadirNota("Nota1","Cuerpo","rojo") returns not null', () => {
        expect(usuario1.añadirNota("Nota1","Cuerpo","rojo")).not.to.be.equal(null);
    });
    
  });

});