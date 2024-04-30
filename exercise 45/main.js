// Cars: Write a function that stores information about a car in an Object The function should always
// recive a manufacturer and a model name it should then accept an arbitary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an
// opitonal feature. Print the Object that's returned to make sure all the information wasstored correctly.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacture, model, opitonal) {
    return __assign({ manufacture: manufacture, model: model }, opitonal);
}
var mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
