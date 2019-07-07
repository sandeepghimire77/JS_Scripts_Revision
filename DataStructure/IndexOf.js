function quickCheck(arr, elem) {
  // change code below this line
  if(arr.indexOf(elem) === -1 ) {
    return false;

  }
  else {
    return true;
  }
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));
console.log(quickCheck(['squash', 'onions', 'shallots'], 'Mashrooms'));




function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for(let i=0; i < arr.length; i++) {

    if(arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
    else {
      newArr;
    }
  }

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9], [1,5,8]], 3));