const Edge = require('./edge');

class Graph {
  constructor(){
    this.adjacencyList = new Map();
    // this.adjacencyList = {};
  }

  addNode(node){
    let arr = new Array();
    this.adjacencyList.set(node.value, arr); // an adjacency list is a list of edges
    return node;
  }

  addEdge(start, end, weight = 0) {
    let edge = new Edge(end, weight);
    const neighbors = this.adjacencyList.get(start.value);
    neighbors.push(edge);
  }

  getNodes() {
    const nodes = [];
    for(const key of this.adjacencyList.keys()){
      nodes.push(key);
    }
    return nodes;
  }

  getNeighbors(node) {
    return this.adjacencyList.get(node.value);
  }

  getNeighborsForBusinessTrip(node){
    return this.adjacencyList.get(node);
  }

  breadthFirstSearch(node){  //track breadth first with a queue and depth first with stack
    const results = [];
    const queue = [];
    const visited = new Set();

    visited.add(node.value);
    queue.push(node);

    while(queue.length > 0){
      let front = queue.shift();
      results.push(front.value);
      let neighbors = this.getNeighbors(front);
      for(const item in neighbors){
        if(!visited.has(neighbors[item].node)){
          queue.push(neighbors[item].node);
          visited.add(neighbors[item].node);
        }
      }
    }
    return results;
  }

  size(){
    return this.adjacencyList.size;
  }
}

module.exports = Graph;
