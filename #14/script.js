/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/




function moveZeros(arr) {
  let count = 0;
  let res = [];
  arr.forEach(i => {
    if (i === 0) count++;
    else res.push(i);
  });
  for (let i = 0; i < count; i++) {
    res.push(0)
  };
  return res;
}

