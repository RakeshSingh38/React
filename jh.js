let passionateCoders = {
    user1: "user1 hu bhai",
    user2: "user2 hu bhai",
    kurfat: function () {
        let valHold = "kurfati karne ka man krrha";
        console.log(valHold); // Just to see the output
    }
};

// Function to clone an object including its methods
function cloneWithFunctions(obj) {
    return Object.create(
        Object.getPrototypeOf(obj),
        Object.getOwnPropertyDescriptors(obj)
    );
}
let clonePassionateCoder = cloneWithFunctions(passionateCoders);

console.log(clonePassionateCoder);
clonePassionateCoder.kurfat(); // Call the function to verify it's copied correctly