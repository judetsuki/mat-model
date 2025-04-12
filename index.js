// Adjacency matrix converted from CSV
const adjacencyMatrix = [
  ['A', 'B', 'C', 'D', 'E', 'J', 'K', 'O', 'P', 'Q', 'R', 'M', 'N', 'G', 'F'],
  [0, 14, Infinity, 78, 47, 96, Infinity, Infinity, 73, Infinity, Infinity, Infinity, Infinity, Infinity, 28],
  [14, 0, 29, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 73, Infinity, 45],
  [Infinity, 29, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 70, Infinity, 41],
  [78, Infinity, Infinity, 0, 56, 31, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [47, Infinity, Infinity, 56, 0, 72, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [96, Infinity, Infinity, 31, 72, 0, 35, 30, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, 35, 0, Infinity, 20, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, 30, Infinity, 0, 39, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [73, Infinity, Infinity, Infinity, Infinity, Infinity, 20, 39, 0, 47, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 47, 0, 19, Infinity, Infinity, 44],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 19, 0, 32, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 48, Infinity, 40],
  [Infinity, 73, 70, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 6, 55],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [28, 45, 41, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 44, 40, 55, Infinity, Infinity, 0]
];

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

module.exports = { adjacencyMatrix, floydWarshall, getPath };
