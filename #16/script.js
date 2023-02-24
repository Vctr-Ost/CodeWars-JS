/*

Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.

*/




function sumNoDuplicates(numList) {
  let arr = [];
  for (let i = 0; i < numList.length; i++) {
    let nums = 0;
    for (let k = 0; k < numList.length; k++) {
      if (numList[i] == numList[k]) nums++;
    }
    if (nums == 1) arr.push(numList[i]);
  }
  return arr.reduce((acc, m) => acc += m, 0);
}

