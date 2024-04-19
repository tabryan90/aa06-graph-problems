function getNeighbors(row, col, graph) {
  const neighbors = []
  const daRow = graph.length;
  const daCol = graph[row].length;

  // Check top
  if (row > 0) {
    if (graph[row - 1][col]) neighbors.push([row - 1, col]);
  }
  // Check bottom
  if (row < daRow - 1) {
    if (graph[row + 1][col]) neighbors.push([row + 1, col]);
  }
  // Check left
  if (col > 0) {
    if (graph[row][col - 1]) neighbors.push([row, col - 1]);
  }
  // Check right
  if (col < daCol - 1) {
    if (graph[row][col + 1]) neighbors.push([row, col + 1]);
  }
  // Return neighbors
  return neighbors
  // Your code here
}


function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  const visited = new Set()
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]]
  // Put the stringified starting node in visited
  visited.add(`${row}, ${col}`)
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    curr = stack.pop()
    let [cRow, cCol] = curr;

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack
    let neighbors = getNeighbors(cRow, cCol, graph);
    // and mark them as visited

    for ( let neighbor of neighbors) {
      if( !visited.has(`${neighbor[0]}, ${neighbor[1]}`) ) {
        visited.add(`${neighbor[0]}, ${neighbor[1]}`);
        stack.push(neighbor);
      }
    }
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  }

  // return size
  return size;

  // Your code here
}

module.exports = [getNeighbors, islandSize];
