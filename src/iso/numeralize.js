var numeralize = function(num) {
  if (num === null || num === "") return ""

  var numerals = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  };

  // Ex. 21-99
  var hyphenator = function(input) {
    var factor = 10;
    var leftNum = Math.floor(input/factor) * factor;
    var left = numerals[leftNum];
    var right = numerals[Math.floor(input - leftNum)];
    return [left, right].join('-');
  };

  if (numerals[num]) {
    return numerals[num];
  } else if (num < 100) {
    return hyphenator(num);
  } else {
    var steps = [
      { scale: 'hundred', limit: 1000, factor: 100},
      { scale: 'thousand', limit: 1000000, factor: 1000},
      { scale: 'million', limit: 1000000000, factor: 1000000}
    ];

    for (var i = 0; i < steps.length; i++) {
      var limit = steps[i].limit;
      var factor = steps[i].factor;

      if (num < limit) {
        var leftDigits = Math.floor(num / factor);
        var left = numerals[leftDigits];
        if (!left) {
          left = numeralize(leftDigits);
        }
        var rightDigits = num - leftDigits*factor; // remainder
        var right = numerals[rightDigits];
        if (rightDigits !== 0 && !right) {
          right = numeralize(rightDigits);
        }
        return [left, steps[i].scale, right].join(' ').trim();
      }
    }
  }
};

module.exports = numeralize;
