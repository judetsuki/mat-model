// Import adjacency matrix from index.js
const { adjacencyMatrix } = require('./index.js');

// Floyd-Warshall algorithm implementation
function floydWarshall(matrix) {
  const n = matrix.length;
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
  const next = Array.from({ length: n }, () => Array(n).fill(null));

  // Initialize distance and next matrices
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dist[i][j] = matrix[i][j];
      if (matrix[i][j] !== Infinity && i !== j) {
        next[i][j] = j;
      }
    }
  }

  // Main algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
          next[i][j] = next[i][k];
        }
      }
    }
  }

  return { dist, next };
}

// Path reconstruction
function getPath(next, start, end) {
  if (next[start][end] === null) return [];
  const path = [start];
  while (start !== end) {
    start = next[start][end];
    path.push(start);
  }
  return path;
}

// Calculate path from A (0) to G (13)
const { dist, next } = floydWarshall(adjacencyMatrix.slice(1)); // Skip header row
const path = getPath(next, 0, 13);
const pathNodes = path.map(i => adjacencyMatrix[0][i]);

console.log('Shortest distance from A to G:', dist[0][13]);
console.log('Path:', pathNodes.join(' -> '));

module.exports = { floydWarshall, getPath };
