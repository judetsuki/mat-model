const { distanceMatrix, nodeNames } = require('./index.js');

function floydWarshall(matrix) {
  const n = matrix.length;
  const dist = matrix.map(row => [...row]);
  const next = Array.from({ length: n }, () => Array(n).fill(null));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && matrix[i][j] !== Infinity) {
        next[i][j] = j;
      }
    }
  }

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

function getPath(next, start, end) {
  if (next[start][end] === null) return [];
  const path = [start];
  while (start !== end) {
    start = next[start][end];
    path.push(start);
  }
  return path;
}

const nodeIndex = nodeNames.reduce((acc, name, index) => {
  acc[name] = index;
  return acc;
}, {});

const { dist, next } = floydWarshall(distanceMatrix);
const start = nodeIndex['A'];
const end = nodeIndex['G'];
const path = getPath(next, start, end);
const pathNodes = path.map(i => nodeNames[i]);

console.log('Distance Matrix:');
console.log(distanceMatrix.map(row => row.map(x => x === Infinity ? '∞' : x).join('\t')).join('\n'));

console.log('\nShortest distance from A to G:', dist[start][end]);
console.log('Path:', pathNodes.join(' -> '));
