let changePossibilities = (amount, denominations) => {
  // we will order the denominations first
  denominations.sort()
  let possibilities = 0;
  dLength = denominations.length
  // we will cycle through our numbers as often as the amount
  for(let i = 0; i<=amount; i++){
    // we find out how many times the number fits into the amount
    for(let k = 1; k*denominations[i]<=amount; k++){
      if(k*denominations[i] === amount){
        // if our denomination is exactly equal to 0 then we add one to the possibilities
        possibilities++
        break;
      } else {
        let newAmount = amount - k*denominations[i]
        let newDenominations = denominations.slice(i+1)
        // now we try it again with the smaller amount and a smaller array of numbers, missing the latest one.
        possibilities+=changePossibilities(newAmount, newDenominations)
      }
    }
  }
  return possibilities
}
