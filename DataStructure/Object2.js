// Basic Data Structures: Generate an Array of All Object Keys with Object.keys()

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line

  console.log(Object.keys(obj));
  console.log(Object.values(obj));

  // change code above this line
}

console.log(getArrayOfUsers(users));