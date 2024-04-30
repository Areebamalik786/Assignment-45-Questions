var gueslist = ["Areeba", "Habiba", "Sana"];
var unableAttend = gueslist.splice(0, 1)[0];
console.log("".concat(unableAttend, " not invited for dinner"));
gueslist.push("sania");
console.log(gueslist);
gueslist.forEach(function (guest) {
    console.log('Dear ${guest}, you are invited to dinner.');
});
