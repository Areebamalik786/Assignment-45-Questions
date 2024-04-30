var guestlist = ['Shehnila', 'Areeba', 'Ali', 'Habiba', 'Sana', 'Sania'];
console.log("Unfortunately! the new dinner table won't arrive so we can invite only two guest,");
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry ".concat(removedGuest, ", we can't invite you."));
    }
}
console.log(guestlist);
