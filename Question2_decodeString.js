// First we want to create a recursive function that will break down our strings. the number is the amount of brackets we must go through
let findInnermostBracket = (s,num) => {
  let sLength = s.length;
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
    let multiplier = parseInt(s[openingBracket-1], 10);
    let stringToMultiply = s.substring(openingBracket+1,closingBracket);
    for(let i = 0; i<multiplier; i++) {
      newString += stringToMultiply;
    }
  }
  let stringToReturn = (s.substring(0,openingBracket-1)+newString + s.substring(closingBracket+1))
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
