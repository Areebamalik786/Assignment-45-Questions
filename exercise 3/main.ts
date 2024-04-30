// Name Cases: Store a person's name in a variable, and then print that person's name in lowercase,uppercase, and titlecase.

let PersonName : string = "yahya";

console.log("lowercase:",PersonName.toLowerCase())

console.log("Uppercase:",PersonName.toUpperCase())

console.log("Titlecase:",PersonName.replace(/\b\w/g, c=> c.toUpperCase()))








