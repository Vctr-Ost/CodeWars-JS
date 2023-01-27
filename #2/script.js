/*

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any 
need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the 
beginning or the end of the sentence!

*/


function theVar(theVariables) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let fArr = theVariables.split('+');
    
    let sum = 0;
    fArr.forEach(i => {
        sum += alph.indexOf(i) + 1;
    })
    
    return sum;
  }

console.log(theVar('a+b'));




function smash (words) {
    return words.join(' ')
};