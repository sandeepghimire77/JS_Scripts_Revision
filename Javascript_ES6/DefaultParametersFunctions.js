function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous


function add(secondvalue = 5) {
  return 2 + secondvalue;
}

console.log(add());
console.log(add(10));
