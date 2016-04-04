var Utilities = require('./Utilities');

function Calculator() {
  var startDate = null;
  var endDate = null;

  this.validStartDate = function() {
    return startDate !== null;
  }
  this.validEndDate = function() {
    return endDate !== null;
  }
  this.setStartDate = function(str) {
    startDate = Utilities.parseDate(str);
    return this;
  }
  this.setEndDate = function(str) {
    endDate = Utilities.parseDate(str);
    return this;
  }
  this.fullDays = function() {
    var days = ((endDate - startDate) / (1000 * 60 * 60 * 24)) - 1;
    return days < 0 ? 0 : days;
  }
  this.print = function() {
    return Utilities.formatDate(startDate) +
      ' - ' +
      Utilities.formatDate(endDate) +
      ': ' +
      this.fullDays() +
      ' days';
  }
}

module.exports = Calculator;
