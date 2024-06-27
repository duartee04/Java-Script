const arr = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];

console.log((arr[1][1] = 10));
console.log((arr[3][3] = "F"));
console.log((arr[3][(0, 1, 2, 3)] = "Ling Jess"), 28, 43, "A");
console.log((arr[4][3] = "B"));
