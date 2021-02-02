// ### Flattening
//
// Use the existing Array \`reduce\` method in combination with the \`concat\` method to “flatten”an array of arrays into a single array that has all the elements of the original arrays.
// You must name the function "flatten".

// e.g.
//
// ```
// let a = [[1,2],[3,4],[5,6,7]];
// ```
//
// ```
// flatten(a);
// ```
//
// ```
// // result is:
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```
//
// Bonus: make it work even with a nested array like:
//
// ```
// let nested = [[1,2],[3, [4, 5]], [6], 7]
// ```
//
// ```
// flatten(nested);
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```

//given problem doesn't indicate sorting but examples do...
// must use .reduce method as well as .concat method

function flatten(array) {
    // create return array
    let flattenedArray = [];
    // use .reduce to check if array is array of arrays 
    flattenedArray = array.reduce(
        function(a, b) {
            // return single array of all elements
            return a.concat(b);
        }
    )
    return flattenedArray;
}

//console.log(flatten([[1,2],[3, [4, 5]], [6], 7]))

module.exports = flatten;
