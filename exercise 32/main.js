"use strict";
let currrent_users = ["Areeba", "Habiba", "Sana", "Shehnila", "Sania"];
let new_users = ["Areeba", "Ajwa", "Asma", "Sana", "Somi"];
new_users.forEach(new_one_user => {
    let our_condition = currrent_users.some(currrent_one_user => currrent_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is avalible`);
    }
});
