const repeatString = function(a, b) {
  if ( b >= 0 ) {
  let result = "";
  for (let i = 1; i <= b; i++) {
    result += a;
}
  return result;
} else {
  return "ERROR";
}
};

// Do not edit below this line
module.exports = repeatString;
