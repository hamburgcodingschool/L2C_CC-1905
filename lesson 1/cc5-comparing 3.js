// var a = 13;
// var b = 7;
// var c = 3;

// if (a > b) {
//   if (a > c) {
//     console.log(a);
//   } else {
//     console.log(c);
//   }
// } else {
//   if (b > c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }

var a = 13;
var b = 70;
var c = 90;

var highest;

if (a > b) {
  highest = a;
} else {
  highest = b;
}

if (c > highest) {
  highest = c;
}

console.log(highest);