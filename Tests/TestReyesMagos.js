var expect = chai.expect;
chai.should();

describe("Comprobación de fecha para ver cuanto falta para los reyes magos", function(){
    describe("Quedan días para la fecha", function(){
        it("Tiene que decir cuantos días quedan", function(){
            reyesMagos(12/10/2022).should.equal(86);
            reyesMagos(04/01/2023).should.equal(2);
            reyesMagos(23/01/2023).should.equal(348);
            reyesMagos(23/01/2018).should.equal(348);
            reyesMagos(10/06/2000).should.equal(210);
            
        });
        
    });
    describe("Es el día de los reyes magos", function(){
        it("Tiene que decir que hoy son los reyes", function(){
            reyesMagos(06/01/2022).should.equal(0);
            reyesMagos(06/01/2023).should.equal(0);
            reyesMagos(06/01/2024).should.equal(0);
            reyesMagos(06/01/2010).should.equal(0);
            reyesMagos(06/01/2018).should.equal(0);
            reyesMagos(06/01/2000).should.equal(0);
        });
        
    });
});