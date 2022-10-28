var MinStack = function() {
  this.items = []
};

MinStack.prototype.push = function(val) {
  this.items.push(val)
};

MinStack.prototype.pop = function() {
  return this.items.pop()
};

MinStack.prototype.top = function() {
  return this.items[this.items.length - 1]
};

MinStack.prototype.getMin = function() {
  let min = Number.MAX_SAFE_INTEGER
    this.items.forEach(value => min = Math.min(min, value))

    return min
};



