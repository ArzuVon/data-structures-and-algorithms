const Maze = require('../maze');
const Room = require('../room');
const canSolve = require('../canSolve');
// const Edge = require('../edge');

describe('can solve maze', () => {
  it('instantiates a new maze', () => {
    const maze = new Maze();
    expect(maze).toBeDefined();
  });

  it('creates a new room in maze', () => {
    const maze = new Maze();
    const r1 = new Room('a');
    maze.addRoom(r1);
    expect(r1.name).toBe('a');
  });

  it('creates two rooms inside maze', () => {
    const maze = new Maze();
    const r1 = new Room('a');
    const r2 = new Room('b');
    maze.addRoom(r1);
    maze.addRoom(r2);
    expect(maze.adjacencyList.size).toBe(2);
  });

  it('connect two rooms with a single unlocked door inside maze', () => {
    const maze = new Maze();
    const r1 = new Room('a');
    const r2 = new Room('b');
    maze.addRoom(r1);
    maze.addRoom(r2);
    maze.addDoor(r1, r2);
    expect(maze.getAdjoiningRooms(r1)).toEqual([{'room': {'gold': false, 'key': false, 'name': 'b'}, 'status': 'unlocked'}]);
  });

  it('connect two rooms with a single locked door inside maze', () => {
    const maze = new Maze();
    const r1 = new Room('a');
    const r2 = new Room('b');
    maze.addRoom(r1);
    maze.addRoom(r2);
    maze.addDoor(r1, r2, 'locked');
    expect(maze.getAdjoiningRooms(r1)).toEqual([{'room': {'gold': false, 'key': false, 'name': 'b'}, 'status': 'locked'}]);
  });

  it('returns true because no doors are locked so no key is needed', () => {
    const maze = new Maze();
    const r1 = new Room('a');
    const r2 = new Room('b', true, false);
    maze.addRoom(r1);
    maze.addRoom(r2);
    maze.addDoor(r1, r2);
    expect(canSolve(maze, r1)).toBe(true);
  });

  it('returns true because a key is found in a maze with two rooms with locked doors', () => {
    const maze = new Maze();
    const r1 = new Room('a', false, true);
    const r2 = new Room('b', true, false);
    maze.addRoom(r1);
    maze.addRoom(r2);
    maze.addDoor(r1, r2, 'locked');
    expect(canSolve(maze, r1)).toBe(true);
  });

  it('returns true because a key is found in a maze with three rooms with locked doors', () => {
    const maze = new Maze();
    const r1 = new Room('a');
    const r2 = new Room('b', false, true);
    const r3 = new Room('c', true, false);
    maze.addRoom(r1);
    maze.addRoom(r2);
    maze.addRoom(r3);
    maze.addDoor(r1, r2);
    maze.addDoor(r2, r3, 'locked');
    expect(canSolve(maze, r1)).toBe(true);
  });

  it('returns false because no key is found and we have locked doors', () => {
    const maze = new Maze();
    const r1 = new Room('a');
    const r2 = new Room('b');
    const r3 = new Room('c');
    const r4 = new Room('d', true, false);
    maze.addRoom(r1);
    maze.addRoom(r2);
    maze.addRoom(r3);
    maze.addRoom(r4);
    maze.addDoor(r1, r2);
    maze.addDoor(r2, r3);
    maze.addDoor(r3, r4, 'locked');
    expect(canSolve(maze, r1)).toBe(false);
  });


});
