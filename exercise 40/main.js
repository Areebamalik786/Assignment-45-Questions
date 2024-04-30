"use strict";
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Areeba", "Album title 1");
let album2 = make_album("Sana", "Album title 2");
let album3 = make_album("Shehnila", "Album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
