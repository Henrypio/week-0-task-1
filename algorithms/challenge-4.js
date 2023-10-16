function findSmallest(num1, num2, num3) {
    let smallest= [num1, num2, num3];
    return(Math.min(...smallest));

}

 result=findSmallest(10, 5, 8);
console.log(result);

module.exports = findSmallest;
