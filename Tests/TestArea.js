var expect = chai.expect;
chai.should();

describe("comprueba el area y longitud de una circunferencia", function(){
    it("Comprobar el area", function(){
        calcularAreaCirculo(2).should.equal(12.57);
        calcularAreaCirculo(57).should.equal(10207.03);
        calcularAreaCirculo(10).should.equal(314.16);
    });
    it("Comprobar la longitud", function(){
        calcularLongitudCirculo(2).should.equal(12.57);
        calcularLongitudCirculo(57).should.equal(358.14);
        calcularLongitudCirculo(10).should.equal(62.83);
    });
});