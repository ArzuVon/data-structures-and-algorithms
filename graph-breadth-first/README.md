# Implementation: Graphs

- A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.

## Challenge Setup & Execution

Branch Name: graph-breadth-first

Challenge Type: New Implementation/graph-breadth-first

---

## Approach & Efficiency

- `.addNode(value)`
  - Time: O(1)
  - Space: O(1)

- `.addEdge(node1, node2)`
  - Time: O(1)
  - Space: O(1)

- `.getNodes()`
  - Time: O(1)
  - Space: O(n)

- `.getNeighbors(node)`
  - Time: O(n)
  - Space: O(n)

- `.size()`
  - Time: O(1)
  - Space: O(1)

### `breadthFirst()`

- Time: O(n)
- Space: O(n)

---

## API

- `.addNode`
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph

- `.addEdge`
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph

- `.getNodes`
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)

- `.getNeighbors`
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection

- `.size`
  - Arguments: none
  - Returns the total number of nodes in the graph

### `breadthFirst`

- Arguments: node
- Return: a collection of node in the order they were visited
- Display the collection

---

## Whiteboard

![Breadth First]()
