
const adjacencyMatrix = [
  [0, 14, Infinity, 78, 47, 96, Infinity, Infinity, 73, Infinity, Infinity, Infinity, Infinity, Infinity, 28],
  [14, 0, 29, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 73, Infinity, 45],
  [Infinity, 29, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 70, Infinity, 41],
  [78, Infinity, Infinity, 0, 56, 31, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [47, Infinity, Infinity, 56, 0, 72, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [96, Infinity, Infinity, 31, 72, 0, 35, 30, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, 35, 0, Infinity, 20, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, 30, Infinity, 0, 39, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [73, Infinity, Infinity, Infinity, Infinity, Infinity, 20, 39, 0, 47, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 47, 0, 19, Infinity, Infinity, 44],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 19, 0, 32, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 32, 0, 48, Infinity, 40],
  [Infinity, 73, 70, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 48, 0, 6, 55],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 6, 0, Infinity],
  [28, 45, 41, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 44, Infinity, 40, 55, Infinity, 0]
];

const nodeNames = ['A','B','C','D','E','J','K','O','P','Q','R','M','N','G','F'];

module.exports = { 
  distanceMatrix: adjacencyMatrix,
  nodeNames 
};
