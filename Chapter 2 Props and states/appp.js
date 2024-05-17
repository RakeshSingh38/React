const test = ["1", "5", '15'].map((x => parseInt(x)));
console.log(test)

function myFunction(parameter) {
    if (parameter) {
        console.log("Parameter is truthy");
    } else {
        console.log("Parameter is falsy");
    }
}
myFunction({ key: null }); // Object literal with curly braces
myFunction(""); // String without curly braces