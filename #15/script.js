/*

Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]
arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false

*/




function arraysSimilar(arr1, arr2) {
  arr1.sort(function(a,b) {return a-b});
  arr2.sort(function(a,b) {return a-b});
  let res = true;
  if (arr1.length != arr2.length) res = false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) res = false;
    }
  }
  return res;
}

