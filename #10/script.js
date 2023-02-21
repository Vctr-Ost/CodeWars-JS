/*

Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

*/


function consonantCount(str) {
  const alp = 'aeiou01234567890_^&$# '
  let alpArr = alp.split('');
  return str.split('').reduce((acc, i) => {
    console.log(alp.includes(i.toLowerCase()));
    return alp.includes(i.toLowerCase()) ? acc : acc += 1;
  }, 0)
}

console.log(consonantCount('01234567890_ '));