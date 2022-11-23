# Maze Roooms for Videogame Company

## Graph

>We work for a video game company, and they have an algorithm that generates mazes for players to solve. The mazes are rooms connected by doors. Some of the doors might be locked with a key of some color, and some rooms have a key in them. But it doesn’t always generate a maze that can be solved!

### Write a function, `can_solve`, which takes a maze as its input and returns boolean `true` if a player could get from the start of the maze to the pot of gold, or false if there is a locked door without an available key between the start and the gold

---

## Approach & Efficiency

- Graph implementation with a depth-first-search approach.
- Each Maze is a new graph
- The doors represent edges between the rooms(nodes) and have properties of name and status ('locked' or 'unlocked').
- The rooms represent nodes and have properties of name, gold and a key.
  - Both the gold and key are booleans defaulted to false.
- When building the maze, it's very similar to building a standard graph with weighted edges.

---

## API

- `.addRoom`
  - Arguments: name, optional args: gold & key
  - Returns: The added room
  - Add a room to the maze

- `.addDoor`
  - Arguments: 2 rooms to be connected by the door, status (optional)
  - Returns: nothing
  - Adds a new door between two rooms in the maze
  - If specified, assign a 'locked' status to the door in the maze.
  - Both rooms should already be in the Maze

- `.getAllRooms`
  - Arguments: none
  - Returns all of the rooms in the maze as a collection (set, list, or similar)

- `.getAdjoiningRooms`
  - Arguments: room
  - Returns a collection of doors connected to the given room
  - Include the status of the connection in the returned collection

- `canSolve`
  - Arguments: maze and room
  - Return: boolean `true` if a player could get from the start of the maze to the pot of gold, or `false` if there is a locked door without an available key between the start and the gold

---

## Whiteboard Process

### [Graph for video game company](https://miro.com/app/board/uXjVPdgoi_Q=/)