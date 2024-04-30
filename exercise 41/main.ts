//  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


  
function show_magicians(show_magicians: string[]){
    show_magicians.forEach(name => console.log(name));
}

let magnician_names = ["Harry Poter", "Areeba", "Habiba"]

show_magicians(magnician_names);