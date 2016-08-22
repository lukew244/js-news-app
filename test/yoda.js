(function(exports) {

  function Yoda() {}

  Yoda.prototype.testAnything = function(test, testName) {
      if (test === true) {
      console.log (("Passed " + testName + " has"));
    } else {
      console.log (("Failed " + testName + " has"));
      console.log (("Patience you must have, my young padawan"));
    }
  };


  exports.Yoda = Yoda;
})(this);
