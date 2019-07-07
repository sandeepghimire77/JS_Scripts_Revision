

// splice is used to update some data in array and change it to specified . Example yesma ravi dai ko name sanjay dai ko ma change gareko

function UpdateItems(arr, index, changeName) {

  arr.splice(index, 1, changeName);
  return arr;

}

let newArray = ["sandeep", "prakash", "ravi"];

UpdateItems(newArray, 2, "sanjay");

console.log(newArray);





