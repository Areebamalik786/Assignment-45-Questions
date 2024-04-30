// Cars: Write a function that stores information about a car in an Object The function should always
// recive a manufacturer and a model name it should then accept an arbitary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an
// opitonal feature. Print the Object that's returned to make sure all the information wasstored correctly.

 type car = {
    manufacture: string
    model: string
    [key: string]: any;
 }

 function createCar(manufacture: string, model: string, opitonal: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...opitonal
    }
 }

 const mycar: car = createCar("toyota","corolla" , { color: "silver" , year: "2024"})
 console.log(mycar)