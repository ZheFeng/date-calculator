

function parseDate(str) {
  var dArray = str.split(/\//);
  if (dArray.length !== 3) {
    return null;
  }
  var year = parseInt(dArray[2]);
  var month = parseInt(dArray[1]);
  var day = parseInt(dArray[0]);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return null;
  }
  var date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}
function fillVacancy(n) {
  if (n < 10) {
    return '0' + n;
  }
  return n.toString();
}
function formatDate(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return fillVacancy(day) + '/' + fillVacancy(month) + '/' + year;
}

exports.parseDate = parseDate;
exports.formatDate = formatDate;
