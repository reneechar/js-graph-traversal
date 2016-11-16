'use strict';

const Node = require('./graphGenerator');

const BFS = (start) => {

  let list = [start.name];
  if (start.neighbors.length === 0) {
    return list;
  }

  start.neighbors.forEach(neighbor => {
    list.push(neighbor.name);
  })
  start.neighbors.forEach(neighbor => {
    let next = BFS(neighbor).slice(1);
    list = list.concat(next)
  })


  return list
}

module.exports = BFS;
