var expect = chai.expect;
chai.should();

describe("Comprobación de fecha ", function(){
    it("Tiene que decir la fecha actual", function(){
        let tiempo = new Date();
        let fecha = new Date(tiempo);
        fechaHoraActual().should.equal("Hoy es " + fecha.toString() + "horas.");
    });
});