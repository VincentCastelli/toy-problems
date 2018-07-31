var doubleValue = function (obj, arr) {
  var result = 0;

  Object.keys(obj).forEach(function (key) {
    if (arr.includes(key.toLowerCase())) {
      result += obj[key] * 2;
    } else {
      result += obj[key];
    }
  });

  return result;
};

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('Passed ' + testName);
  } else {
    console.log('Test [' + testName + '] failed: expected ', expected, ' but got, ', actual);
  }
};

assertEqual(doubleValue({ a: 1, b: 2, c: 3 }, ['a', 'c']), 10, 'value doubled');
assertEqual(doubleValue({ A: 1, B: 2, C: 3 }, ['a', 'c']), 10, 'value doubled');
