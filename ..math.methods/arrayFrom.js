//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
function monkeyCount(n) {
    return Array.from({length:n}, (_,i)=>i+1)

    //(monkeyCount(5)) // [1, 2, 3, 4, 5]);


    //
    function generateIntegers(m, n) {
        return Array.from({length:n-m+1},(_,i)=>i+m)
      }
      //(generateIntegers(2, 5) //[2, 3, 4, 5]);