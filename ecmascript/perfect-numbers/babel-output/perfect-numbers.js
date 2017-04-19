"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function getFactors(n) {
  var factors = [];
  for (var i = 1; i < n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function getAliquotSum(n) {
  return getFactors(n).reduce(function (acc, n) {
    return acc + n;
  }, 0);
}

var PerfectNumbers = (function () {
  function PerfectNumbers() {
    _classCallCheck(this, PerfectNumbers);
  }

  // //
  // const pn = new PerfectNumbers()
  // console.log(pn.classify(0))

  _createClass(PerfectNumbers, [{
    key: 'classify',
    value: function classify(n) {
      if (n <= 0) {
        return 'Classification is only possible for natural numbers.';
      }
      var aliquotSum = getAliquotSum(n);
      if (aliquotSum === n) {
        return 'perfect';
      }
      if (aliquotSum > n) {
        return 'abundant';
      }
      if (aliquotSum < n) {
        return 'deficient';
      }
    }
  }]);

  return PerfectNumbers;
})();

exports['default'] = PerfectNumbers;
module.exports = exports['default'];