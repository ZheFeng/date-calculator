var Calculator = require('./Calculator');

var startMsg = 'Please enter the start date (DD/MM/YYYY): ';
var startErrMsg = 'The start date is invalid, please enter again (DD/MM/YYYY).';
var endMsg = 'Please enter the end date (DD/MM/YYYY): ';
var endErrMsg = 'The end date is invalid, please enter again (DD/MM/YYYY).';

function setStartDate(calculator, dateStr) {
  calculator.setStartDate(dateStr);
  if (!calculator.validStartDate()) {
    return console.log(startErrMsg);
  }
  return console.log(endMsg);
}
function setEndDate(calculator, dateStr) {
  calculator.setEndDate(dateStr);
  if (!calculator.validEndDate()) {
    return console.log(endErrMsg);
  }
  console.log(calculator.print());
  process.exit();
}

function promptDate(calculator) {
  console.log(startMsg);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function (text) {
    var dateStr = text.replace(/\n/, '');
    if (!calculator.validStartDate()) {
      setStartDate(calculator, dateStr)
    }
    else if (!calculator.validEndDate()) {
      setEndDate(calculator, dateStr)
    }
  });
}

promptDate(new Calculator);
