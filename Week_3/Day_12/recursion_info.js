for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2);
  }
}
countEvenToTwelve(0);
