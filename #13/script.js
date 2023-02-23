/*

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

*/




function numberOfPairs(gloves){
  let set = new Set(gloves);
  let obj = {};

  set.forEach(i => obj[i] = 0);
  gloves.forEach(i => obj[i] += 0.5)

  return Object.values(obj).reduce((acc, i) => acc += Math.floor(i), 0);
}

console.log(numberOfPairs(['red', 'blue', 'green', 'blue', 'reds', ]))