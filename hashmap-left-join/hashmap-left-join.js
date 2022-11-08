function leftJoin(leftMap, rightMap, direction='left'){
  const join = direction.toLowerCase();
  const results = [];

  // check to see if we have an empty map,
  //throw an error if not
  if(!leftMap.size || !rightMap.size){
    throw new Error('empty hashmap!');
  }
  // push a new nested array of key/value pairs 
  //into our results array
  if(join === 'left'){ // left join logic below
    for(const [key, value] of leftMap){
      results.push([key, value]);
    }
    // loop through our results array
    //check if rightMap has the key
    // if key is found
    //push the value in rightMap to our nested array at index[i]
    for(let i = 0; i < results.length; i++){
      if(rightMap.has(results[i][0])){
        const value = rightMap.get(results[i][0]);
        results[i].push(value);
      } else {
        results[i].push(null);
      }
    }
  // } else { // right join logic not working or needed
  //   for(const [key, value] of rightMap){
  //     results.push([key, value]);
  //   }
  //   for(let i = 0; i < results.length; i++){
  //     if(leftMap.has(results[i][0])){
  //       const value = leftMap.get(results[i][0]);
  //       results[i].push(value);
  //     } else {
  //       results[i].push(null);
  //     }}
    
  }
  return results;
}

module.exports = leftJoin;
