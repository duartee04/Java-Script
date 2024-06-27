const arrpar = [];
const arrimpar = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    arrpar.push(i);
  }
  if (i % 2 != 0) {
    arrimpar.push(i);
  }
}
console.log(arrpar);
console.log(arrimpar);
