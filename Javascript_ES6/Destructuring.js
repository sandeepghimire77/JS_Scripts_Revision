// ES6: Use Destructuring Assignment to Assign Variables from Objects
// ES5 code ho yo
/* var voxel = {
  x: 3.6,
  y: 7.4,
  z: 6.54
};
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54 */

// yehi mathiko code lai aaba ES6 ma lane ho vane
var voxel = {
  x: 3.6,
  y: 7.4,
  z: 6.54
};
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
console.log('es6 x is', x);
console.log('es6 y is', y);
console.log('es6 z is', z);

const { x: a, y: b, z: c } = voxel;

console.log('es6 a is', a);
console.log('es6 b is', b);
console.log('es6 c is', c);

// we may read it as "get the field x and copy the value into a," and so on.