import 'mocha';
import {expect} from 'chai';
import {AddReduce} from '../src/modificacion/addreduce';
import {SubReduce} from '../src/modificacion/subreduce';
import {Reduce} from '../src/modificacion/reduce';

describe('Modificación', () => {

    describe('Prueba AddReduce', () => {
        var array1 = new AddReduce();
        array1.setArray([1,2,3,4])

        it('array1.reduce() returns 10', () => {
            expect(array1.reduce()).to.be.equal(10);
        });

        it('array1.run() not null', () => {
        expect(array1.run()).not.to.be.equal(null);
        });

    });

    describe('Prueba SubReduce', () => {
        var array2 = new SubReduce();
        array2.setArray([1,2,3,4])

        it('array2.reduce() returns -8', () => {
            expect(array2.reduce()).to.be.equal(-8);
        });

        it('array2.run() not null', () => {
        expect(array2.run()).not.to.be.equal(null);
        });

    });
});