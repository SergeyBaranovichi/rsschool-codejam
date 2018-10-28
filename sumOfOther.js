function sumOfOther( array = [] ){
    var result = array.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    const array1 = array.map(x => result - x);
    return array1;
}