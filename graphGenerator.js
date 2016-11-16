// Implement a graph generator that represents a set of objects where some pairs of objects are connected by links.

const Node = function(name, value) {
  this.name = name;
  this.value = value;
  this.neighbors = [];

  this.addNeighbors = function(arr) {
    if (arr) {
      arr.forEach(neighbor => {
        this.neighbors.push(neighbor);
      })
    }
    return this.neighbors;
  }
}


module.exports = Node;