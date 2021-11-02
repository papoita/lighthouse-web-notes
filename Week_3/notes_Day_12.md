Nov 2, 2021

# this in music library

gist
https://gist.github.com/papoita/ac192838e3ea202518b2bf5a02dee933

to include the function of the music library to the object library:
Instead of referring to library inside of your methods, you should refer to this instead, ie. this.tracks
Outside of the library object, functions will need to be invoked as follows: library.printTracks()

plus 
const printPlaylists = function () {
    // ...
};
replaced to
printPlaylists: function () {
    // ...
  },

  and

  generateUid function had to call this.generateUid