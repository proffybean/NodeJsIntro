// mocha test
var should = require('should');
var con = require('./constants.js');
// no need to require mocha

describe('This is my first test', function(){
	it('should double 2', function(){
		con.DoubleInt(2).should.equal(4);
	});
	
	it('should double 3', function(){
		con.DoubleInt(3).should.equal(9);
	});
	
});

describe('Checking for return values', function(){
	
	it('should return even value', function(){
		(con.DoubleInt(4)%2).should.equal(0);
	});
	
	it('should return even value 2', function(){
		(con.DoubleInt(4)).should.be.even;
	});
});

describe('Checking for return type', function(){
	
	it('should be type number', function(){
		con.DoubleInt(5).should.be.type('number');
	});
	
	it('should not be type string', function(){
		con.DoubleInt(5).should.not.be.type('string');
	});
});
