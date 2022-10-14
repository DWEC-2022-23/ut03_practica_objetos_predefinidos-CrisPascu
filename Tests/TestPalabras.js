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
    it("Comprueba que se divida con guiones cada caracter", function(){
        cadenaGuiones("Hola Mundo").should.equal("H-o-l-a- -M-u-n-d-o");
        cadenaGuiones("Hola Mundo Cruel").should.equal("H-o-l-a- -M-u-n-d-o- -C-r-u-e-l");
        cadenaGuiones("Tres tristes tigres").should.equal("T-r-e-s- -t-r-i-s-t-e-s- -t-i-g-r-e-s");
        cadenaGuiones("       Comiendo comino      ").should.equal("C-o-m-i-e-n-d-o- -c-o-m-i-n-o");
        cadenaGuiones("           Sarten rota por el mango         ").should.equal("S-a-r-t-e-n- -r-o-t-a- -p-o-r- -e-l- -m-a-n-g-o");
    });
    it("Comprueba cuantas vocales hay en la cadena", function(){
        contarVocales("Hola Mundo").should.equal(4);
        contarVocales("Hola Mundo Cruel").should.equal(6);
        contarVocales("Tres tristes tigres").should.equal(5);
        contarVocales("       Comiendo comino      ").should.equal(7);
        contarVocales("           Sarten rota por el mango         ").should.equal(8);
    });
});