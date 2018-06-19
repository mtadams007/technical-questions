// First we want to find the innermost brackets and evaluate them first
let findInnermostBracket = (s,num) => {
  let sLength = s.length;

  let multiplier = 1;
  // newString is what we'll add to our old string
  let newString = ''
  // here we're checking if there are any brackets or if we're done
  let openingBracket = 'nope';
  let closingBracket;
  // Since the encoding rule requires a k value, the first bracket cannot be in the first position so we can skip i=0
  let i = 1;
  while (i<sLength) {
    if (s[i] === '[') {
      openingBracket = i;
    } else if (s[i]=== ']') {
      // if we have a closing bracket we break out of the loop so we can evaluate this set
      closingBracket = i;
      break;
    }
    i++
  }
  if (openingBracket === 'nope'){

    return;
  } else {
    // the multiplier is how many times we repeat the string within brackets
    // We need to check cases where the multiplier is greater than 9
    let isNumber = 1
      while(parseInt(s[openingBracket - isNumber],10)||s[openingBracket - isNumber]==='0') {
        multiplier = parseInt(s.substring(openingBracket - isNumber, openingBracket),10)
        isNumber++

      }
    let stringToMultiply = s.substring(openingBracket+1,closingBracket);
    for(let i = 0; i<multiplier; i++) {
      newString += stringToMultiply;
    }
  }
  let stringToReturn = newString
  let exponent = 1
  while(exponent){
    // We need to check cases where the multiplier is greater than 9
    if (multiplier < Math.pow(10, exponent)) {
      stringToReturn = (s.substring(0,openingBracket-exponent)+newString + s.substring(closingBracket+1));
      break;
   } else {
   exponent++
   }
}
  if(num != 1) {
    return findInnermostBracket(stringToReturn, num-1)
  } else {
    return stringToReturn
  }
}

let decodeString = (s) => {
  let counter = 0;
  let sLength = s.length;
  // Here we're going to count the how many brackets there are so we can decide how many times we run the findInnermostBracket function. By the parameters, there can't be an opening bracket at the first or last position of the string so we will skip those when we loop through
  let i = 1;
  while (i<sLength-1) {
    if (s[i]==='['){
      counter++;
    }
    i++;
  }
  return(findInnermostBracket(s,counter))
}
