// const printItems = function (array) {
//   for (let item of array) {
//     console.log(item);
//   }
// }

// const array = ["😎", "💩", "🤗", "😼", "😂"];
// printItems(array);
const printItems = function (array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);

    } else {
      console.log(item);
    }
  });
}

//const array = ["😎", ["💩", "🤗"], "😼", "😂"];
const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);