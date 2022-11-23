function canSolve(maze, room){

  let foundKey = false;
  const lockedRooms = [];
  const stack = [];
  const visitedRooms = new Set();

  stack.push(room);
  visitedRooms.add(room);

  while(stack.length){
    const top = stack.pop();

    // look for key after each popped item: only rooms that are 'unlocked' will be pushed to the stack.
    if(top.key === true){
      foundKey = true;
    }
    // all rooms that have a door connect to current room will be stored in an array
    let adjacentRooms = maze.adjacencyList.get(top.name);
    for(const i in adjacentRooms){
      if(adjacentRooms[i].status === 'unlocked' && !visitedRooms.has(adjacentRooms[i])){
        stack.push(adjacentRooms[i].room);
        visitedRooms.add(adjacentRooms[i].room);
      } else {
        lockedRooms.push(adjacentRooms[i].room);
      }
    }
  }

  // if we didn't find a key and we have locked door, simply return false
  if(foundKey === false && lockedRooms.length > 0){
    return false;
  } else {
    return true;
  }
}

module.exports = canSolve;
