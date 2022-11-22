function businessTrip(graph, inputArr){
    let total = 0;
    let size = inputArr.length - 1;
    let neighbors;
  
    for(let i = 0; i < size; i++){
      neighbors = graph.getNeighborsForBusinessTrip(inputArr[i]);
      for(const item of neighbors){
        if(item.node.value === inputArr[i + 1]){
          total += item.weight;
          i++;
        } else {
          return 'null';
        }
      }
    }
    if(total === 0){
      return 'null';
    } else {
      return `$${total}`;
    }
  }
  
  module.exports = businessTrip;
  