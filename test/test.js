var assert = require('assert');
var Calculator = require('../Calculator');
var Utilities = require('../Utilities');

describe('Calculator', function() {
  describe('count days', function () {
    it('calculate the number of full days elapsed', function () {
      var start = '01/01/2000';
      var end = '03/01/2000';
      var calculator = new Calculator();
      calculator.setStartDate(start);
      calculator.setEndDate(end);
      assert.equal(1, calculator.fullDays());
    });
    it('should never counted the first and the last day', function () {
      var start = '07/11/1972';
      var end = '08/11/1972';
      var calculator = new Calculator();
      calculator.setStartDate(start);
      calculator.setEndDate(end);
      assert.equal(0, calculator.fullDays());
    });
    it('should count 0 if end date is before or equal the start date', function () {
      var calculator = new Calculator();

      var start = '07/11/1972';
      var end = '07/11/1972';
      calculator.setStartDate(start);
      calculator.setEndDate(end);
      assert.equal(0, calculator.fullDays());

      start = '07/11/1972';
      end = '06/11/1972';
      calculator.setStartDate(start);
      calculator.setEndDate(end);
      assert.equal(0, calculator.fullDays());
    });
  });
});


describe('Utilities', function() {
  describe('parseDate', function () {
    it('should return null if format not in DD/MM/YYYY. (eg. asdfasdf/asdf, asdfsdf)', function () {
      assert.equal(null, Utilities.parseDate('asdfasdf/asdf'));
      assert.equal(null, Utilities.parseDate('asdfsdf'));
    });
    it('should return null if day, month or year is not an integer. (eg. 12/dd/1999)', function () {
      assert.equal(null, Utilities.parseDate('12/dd/1999'));
    });
    it('should return null if day, month or year is not a valid date number. (eg. 55/55/1999)', function () {
      assert.equal(null, Utilities.parseDate('55/55/1999'));
    });
  });
  describe('formatDate', function () {
    it('should convert date object into to string with format DD/MM/YYYY', function () {
      assert.equal('12/11/2015', Utilities.formatDate(new Date(2015, 10, 12)));
    });
    it('should fill the 0 into interger under 10. (eg. 1/4/2015 - 01/04/2015)', function () {
      assert.equal('01/04/2015', Utilities.formatDate(new Date(2015, 3, 1)));
    });
  });
});
