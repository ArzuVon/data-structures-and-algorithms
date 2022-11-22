const Graph = require('../graph');
const Node = require('../node');
// const Edge = require('../edge');

describe('Graph', () => {
  it('instantiates a new graph', () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  it('creates a new node', () => {
    const n1 = new Node('a');
    expect(n1.value).toBe('a');
  });

  it('adds a single node to the graph', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    graph.addNode(n1);
    expect(graph.size()).toBe(1);
  });

  it('returns a single node in the graph', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    graph.addNode(n1);
    expect(graph.getNodes()).toEqual(['a']);
  });

  it('returns a multiple nodes in the graph', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    const n3 = new Node('c');
    graph.addNode(n1);
    graph.addNode(n2);
    graph.addNode(n3);
    expect(graph.getNodes()).toEqual(['a', 'b', 'c']);
  });

  it('adds one edge between two nodes', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    graph.addNode(n1);
    graph.addNode(n2);
    graph.addEdge(n1, n2, 30);
    expect(graph.getNeighbors(n1)).toEqual([{'node': {'value': 'b'}, 'weight': 30}]);
  });

  it('adds two edges to a single node', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    const n3 = new Node('c');
    graph.addNode(n1);
    graph.addNode(n2);
    graph.addEdge(n1, n2);
    graph.addEdge(n1, n3);
    expect(graph.getNeighbors(n1)).toEqual([{'node': {'value': 'b'}, 'weight': 0}, {'node': {'value': 'c'}, 'weight': 0}]);
  });

  it('adds two edges to a single node with none default weight values', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    const n3 = new Node('c');
    graph.addNode(n1);
    graph.addNode(n2);
    graph.addNode(n3);
    graph.addEdge(n1, n2, 30);
    graph.addEdge(n1, n3, 20);
    expect(graph.getNeighbors(n1)).toEqual([{'node': {'value': 'b'}, 'weight': 30}, {'node': {'value': 'c'}, 'weight': 20}]);
  });

  it('returns all nodes and checks size of graph', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    const n3 = new Node('c');
    const n4 = new Node('d');
    const n5 = new Node('e');
    graph.addNode(n1);
    graph.addNode(n2);
    graph.addNode(n3);
    graph.addNode(n4);
    graph.addNode(n5);
    expect(graph.getNodes()).toEqual(['a', 'b', 'c', 'd', 'e']);
    expect(graph.size()).toBe(5);
  });

  it('returns a graph with only one node and edge', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    graph.addNode(n1);
    graph.addEdge(n1, n1);
    expect(graph.getNeighbors(n1)).toEqual([{'node': {'value': 'a'}, 'weight': 0}]);
  });

  it('returns a graph with two nodes and two edges. One edge points to itself', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    graph.addNode(n1);
    graph.addNode(n2);
    graph.addEdge(n1, n1);
    graph.addEdge(n1, n2, 30);
    expect(graph.getNeighbors(n1)).toEqual([{'node': {'value': 'a'}, 'weight': 0}, {'node': {'value': 'b'}, 'weight': 30}]);
  });


  it('performs a bfs and returns the nodes in the order that they were visited', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    const n3 = new Node('c');
    const n4 = new Node('d');
    const n5 = new Node('e');
    const n6 = new Node('f');

    graph.addNode(n1);
    graph.addNode(n2);
    graph.addNode(n3);
    graph.addNode(n4);
    graph.addNode(n5);
    graph.addNode(n6);

    graph.addEdge(n1, n2, 30);
    graph.addEdge(n1, n3);
    graph.addEdge(n1, n4);

    graph.addEdge(n2, n6);
    graph.addEdge(n2, n5);

    expect(graph.breadthFirstSearch(n1)).toEqual(['a', 'b', 'c', 'd', 'f', 'e']);
  });

  it('performs a bfs and returns the nodes in the order that they were visited', () => {
    const graph = new Graph();
    const n1 = new Node('a');
    const n2 = new Node('b');
    const n3 = new Node('c');
    const n4 = new Node('d');
    const n5 = new Node('e');
    const n6 = new Node('f');

    graph.addNode(n1);
    graph.addNode(n2);
    graph.addNode(n3);
    graph.addNode(n4);
    graph.addNode(n5);
    graph.addNode(n6);

    graph.addEdge(n1, n4);
    graph.addEdge(n1, n5);
    graph.addEdge(n1, n6);

    graph.addEdge(n5, n3);
    graph.addEdge(n6, n2);

    expect(graph.breadthFirstSearch(n1)).toEqual(['a', 'd', 'e', 'f', 'c', 'b']);
  });
});
