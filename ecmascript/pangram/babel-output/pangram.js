'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function containsChar(c, s) {
  return s.indexOf(c) !== -1;
}

var Pangram = (function () {
  function Pangram(string) {
    _classCallCheck(this, Pangram);

    this.s = string;
  }

  // let Pangram = function (string) {
  // }
  //
  // Pangram.prototype.isPangram = function () {
  //   return true
  // }

  _createClass(Pangram, [{
    key: 'isPangram',
    value: function isPangram() {
      var abc = 'abcdefghijklmnopqrstuvwxyz';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = abc[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;

          if (!containsChar(c, this.s)) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
  }]);

  return Pangram;
})();

module.exports = Pangram;