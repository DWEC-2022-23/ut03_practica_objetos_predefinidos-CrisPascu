var expect = chai.expect;
chai.should();
//poco eficiente, investigar más
describe("Generador de números aleatorios", function(){
    describe("Entra entre dos parámetros", function(){
        it("Tiene que ser igual o mayor que el primer parámetro", function(){
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(0, 10).should.be.greaterThan(-1);
            }
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(2, 8).should.be.greaterThan(1);
            }
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(5, 40).should.be.greaterThan(4);

            }
        });
        it("Tiene que ser igual o inferior al segundo valor", function(){
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(0, 10).should.not.be.greaterThan(10);
            }
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(2, 8).should.not.be.greaterThan(8);
            }
            for(let i = 0; i < 1000; i++){
                calcularAleatorio(5, 40).should.not.be.greaterThan(40);
            }
        });
        
    });
});