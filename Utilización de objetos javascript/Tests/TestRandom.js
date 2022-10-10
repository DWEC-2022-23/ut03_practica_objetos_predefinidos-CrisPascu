var expect = chai.expect;
chai.should();

describe("Generador de números aleatorios", function(){
    describe("Entra entre dos parámetros", function(){
        it("Tiene que ser igual o mayor que el primer parámetro", function(){
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(0, 10).should.be.at.least(0);
            }
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(2, 8).should.be.at.least(2);
            }
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(5, 40).should.be.at.least(5);
            }
        });
        it("Tiene que ser igual o inferior al segundo valor", function(){
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(0, 10).should.be.at.most(10);
            }
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(2, 8).should.be.at.most(8);
            }
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(5, 40).should.be.at.most(40);
            }
        });
        
    });
});