var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const dayofyear = require("../dayofyear");
describe('Day of year problem', function() {
    it('dayofYear should be a function', function(){
       expect( dayofyear(1))
    });
    it("should return 1 if entered date is 01,01,2000", function() {
        expect(dayofyear(01,01,2002)).to.equal(1);
        
    });
    it("should return 2 if entered date is 02,01,2000", function() {
        expect(dayofyear(02,01,2001)).to.equal(2);
        
    });
    it("should return 32 if entered date is 01,02,2000", function() {
        expect(dayofyear(02,02,2004)).to.equal(32);
        
    });
    it("Should return 59 if entered date is 01,03,2001", function() {
        expect(dayofyear(01,03,2001)).to.equal(59);
        
    });
    it("Should return 60 if entered date is 01,03,2004", function() {
        expect(dayofyear(01,03,2004)).to.equal(60);
        
    });
    it("Should return 59 if entered date is 01,03,1900", function() {
        expect(dayofyear(01,03,1900)).to.equal(59);
        
    });
    it("Should return 70 if entered date is 11,03,2004", function() {
        expect(dayofyear(11,03,2004)).to.equal(70);
        
    });
    it("Should return 100 if entered date is 9,03,2008", function() {
        expect(dayofyear(9,04,2004)).to.equal(100);
        
    });
   
});

