process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;

class Fairness {
    is_fair(a, b) {

    }
}

describe("Fairness App", function() {
    it("it should only accept 2 arguments", function(){
        let fairness = new Fairness();
        let a = 1;
        let b = 2;
        let c = 3;
          
        expect(fairness.is_fair(a)).to.not.be.ok;

        expect(fairness.is_fair(a, b, c)).to.not.be.ok;
    });

    it("should return a success message if the two values are equal");
    it("should return a fail message if 2 values are not equal");
    it("should return an error message if any of the 2 arguments are not numbers.");
});