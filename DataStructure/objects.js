let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line
userActivity.data.online = 45;

// change code above this line

console.log(userActivity);




// second program.. VVI.
// Basic Data Structures: Access Property Names with Bracket Notation

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(foods,scannedItem) {
  // change code below this line
  return foods[scannedItem];




}

// change code below this line to test different cases:
console.log(checkInventory(foods,"apples"));
console.log(checkInventory(foods,"bananas"));
console.log(checkInventory(foods,"strawberries"));
console.log(checkInventory(foods,"strawber"));



// 3rd program
// Basic Data Structures: Check if an Object has a Property



let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  return   obj.hasOwnProperty('Alan' && 'Jeff' && 'Sarah' && 'Ryan');
  // change code above this line
}

console.log(isEveryoneHere(users));

// Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement

let users1 = {
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

/* for (let user in users1) {
 console.log(user);



};

console.log(Object.values(users1));
console.log(users1.Alan.age); */




function countOnline(obj) {

  for (let user in obj) {
    console.log(user);


  };

}

console.log(countOnline(users1));