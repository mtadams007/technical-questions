let sortByStrings = (s,t) => {
  // set the length of the strings as variables so we don't loop through them on each iteration of the for loops
  let tLength = t.length;
  let sLength = s.length;
  // sortedString will be our answer
  let sortedString = '';
  // cycling through the t string
  for(let i=0; i<tLength; i++) {
    // cycling through the s string
    for(let k=0; k<sLength; k++) {
      if (s[k] === t[i]) {
        // if the letters match, we add that letter to the end of sortedString
        sortedString += t[i]
      }
    }
  }
  return sortedString;
}
