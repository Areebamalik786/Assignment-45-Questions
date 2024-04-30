var guestlist = ["Areeba", "Habiba", "Sana"];
console.log("Great news!  we found a bigger table;");
guestlist.unshift("Shehnila");
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Ali");
guestlist.push("Sania");
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are invited to dinner."));
});
