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
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
}

console.log(getArrayOfUsers(users));