var expect = chai.expect;
chai.should();

describe("Comprueba que funcionan los botones de la string", function(){
    it("Mitad cadena", function(){
        mitadCar("Hola Mundo").should.equal("Hola ");
        mitadCar("Hola Mundo Cruel").should.equal("Hola Mun");
        mitadCar("Tres tristes tigres").should.equal("Tres tris");
        mitadCar("       Comiendo comino      ").should.equal("Comiend");
        mitadCar("           Sarten rota por el mango         ").should.equal("Sarten rota ");
    });
    it("Comprueba que se muestre la última letra", function(){
        ultimoCaracter("Hola Mundo").should.equal("o");
        ultimoCaracter("Hola Mundo Cruel").should.equal("l");
        ultimoCaracter("Tres tristes tigres").should.equal("s");
        ultimoCaracter("       Comiendo comino      ").should.equal("o");
        ultimoCaracter("           Sarten rota por el mango         ").should.equal("o");
    });
    it("Comprueba que se invierte la cadena", function(){
        cadenaInversa("Hola Mundo").should.equal("odnuM aloH");
        cadenaInversa("Hola Mundo Cruel").should.equal("leurC odnuM aloH");
        cadenaInversa("Tres tristes tigres").should.equal("sergit setsirt serT");
        cadenaInversa("       Comiendo comino      ").should.equal("onimoc odneimoC");
        cadenaInversa("           Sarten rota por el mango         ").should.equal("ognam le rop ator netraS");
    });
});