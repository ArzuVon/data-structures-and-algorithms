const Door = require('./door');

class Maze {
  constructor() {
    this.adjacencyList = new Map();
  }

  addRoom(room) {
    let arr = new Array();
    this.adjacencyList.set(room.name, arr);
  }

  addDoor(start, end, status = 'unlocked') {
    let door = new Door(end, status);
    const neighbors = this.adjacencyList.get(start.name);
    neighbors.push(door);
  }

  getAllRooms() {
    const rooms = [];
    for (const key of this.adjacencyList.keys()) {
      rooms.push(key);
    }
    return rooms;
  }

  getAdjoiningRooms(room) {
    let results = [];
    let adjoiningRooms = this.adjacencyList.get(room.name);
    for (const room in adjoiningRooms) {
      results.push(adjoiningRooms[room]);
    }
    return results;
  }
}

module.exports = Maze;
