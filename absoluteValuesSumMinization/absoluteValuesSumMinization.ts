function absoluteValuesSumMinimization(a: number[]): number {

    //Does the array contain even or odd number of values
    const isEven = a.length % 2 === 0 ? true : false;
    if(!isEven){
        //if odd then find the central value and return it
        return a[Math.floor(a.length/2)]

    }
    else {
        //if even, then split the array into two, return the left value
        return  a[a.length/2 - 1]
    }

}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));