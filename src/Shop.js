function Shop(input) {
  this._input = input;
  this._inputArr = null
  this._totalCost = 0
  this._costArr = [
    {letter: "A", cost: 50},
    {letter: "B", cost: 30},
    {letter: "C", cost: 20},
    {letter: "D", cost: 15}
  ];
}

Shop.prototype.checkout = function() {
  if(this.isAnInteger(this._input) || this.hasLowerCase(this._input) || this.hasSymbols(this._input) || this.hasIntegers(this._input)) {
    return -1
  } else {
    this.splitInput(this._input);
    for (var i = 0; i < this._inputArr.length; ++i) {
      var result = this._costArr.find(costs => costs.letter === this._inputArr[i])
      this._totalCost += result.cost
    }
    return this._totalCost
  }
};

Shop.prototype.hasLowerCase = function(inputs) {
  return inputs.toUpperCase() != inputs;
}

Shop.prototype.hasSymbols = function(inputs) {
  return inputs.includes("-")
}

Shop.prototype.hasIntegers = function(inputs) {
  return /\d/.test(inputs);
}

Shop.prototype.isAnInteger = function(inputs) {
  return Number.isInteger(inputs)
}

Shop.prototype.splitInput = function(inputs) {
  this._inputArr = inputs.split("")
}
