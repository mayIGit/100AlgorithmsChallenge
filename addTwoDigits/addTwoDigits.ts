function addTwoDigits(n: any): number {
  //take the number passed in and convert it to an array of characters
  let arr = n.toString().split('');
  console.log(arr);

  //now add the split values inside the array using the reduce method. Since the two are strings, we need to parseInt them
  //to be able to add them
  const result = arr.reduce((a, acc) => {
    return parseInt(a) + parseInt(acc);
  });
  return result;
}

console.log(addTwoDigits(29));
