//Sandwiches: Write a function that accept an array of item a person wants on a sandwich. The function
//should have one parameter that collect as many items as the function call provides, and it should
//print a summary of the sandwich that is being ordered. Call the function three times, using a diffrent
//number of arguments each time.

function makeSandwich(...items: string[]){
    console.log("\nMaking a Sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("Now Enjoy Sandwich");
}

makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");