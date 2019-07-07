function fun(...a){
  let sum = 0;
  for(let i of a) {
    sum = sum + i;
  }
  return sum;

}
console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3, 4, 5)); // 15


function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.