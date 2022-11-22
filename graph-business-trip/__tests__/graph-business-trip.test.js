const Graph = require('../../graph/graph');
const Node = require('../../graph/node');
const businessTrip = require('../graph-business-trip');

describe('Graph', () => {
  it('return the price between two nodes', () => {
    const arr = ['a', 'b', 'c'];
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    graph.addNode(n1);
    graph.addNode(n2);
    graph.addEdge(n1, n2, 30);
    expect(graph).toBeDefined();
    expect(businessTrip(graph, arr)).toBe('$30');
  });

  it('returns the price between three nodes', () => {
    const arr = ['a', 'b', 'c'];
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    const n3 = new Node('c');
    graph.addNode(n1);
    graph.addNode(n2);
    graph.addEdge(n1, n2, 30);
    graph.addEdge(n1, n3, 20);
    expect(graph).toBeDefined();
    expect(businessTrip(graph, arr)).toBe('$50');
  });

  it('returns null since there are no direct edges', () => {
    const arr = ['a', 'b', 'c'];
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    const n3 = new Node('c');
    graph.addNode(n1);
    graph.addNode(n2);
    graph.addNode(n3);
    expect(graph).toBeDefined();
    expect(businessTrip(graph, arr)).toBe('null');
  });

});
