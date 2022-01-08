<!-- @format -->

January 7, 2022

# Algorith complexity

can identify when an algorithm takes constant time and when it doesn't
can understand that the run time of an algorithm depends on the number of elementary operations it does
can identify the run time of an algorithm

count speed of algorithm in : elementary operations
running time = n

Algorithms that don't deal with dynamic data, like loops, usually take constant time (no n involved)
Algorithms that iterate over data, involve using n based on the size of the data

## in loops

### running time of 1

let result = 0;
lei i =0;
console.log(result);

### running time of n

i++
let number = array[i];
result += number;

### running time of n+1

i< array.length;

# complexity

1, n +1, n, n
1, 1, 1, n+1, n, n, n, n

computatonal complexity depends on the size of the data size

# Linear vs logarithmic agorithms

https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/running-time-of-binary-search

Binary search halves the size of the reasonable portion upon every incorrect guess.

Every time we double the size of the array, we need at most one more guess. Suppose we need at most mmm guesses for an array of length n

log base 2 of n

https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array

Let min = 0 and max = n-1.
Compute guess as the average of max and min, rounded down (so that it is an integer).
If array[guess] equals target, then stop. You found it! Return guess.
If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
Otherwise, the guess was too high. Set max = guess - 1.
Go back to step 2.

https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

In order to implement an algorithm in a programming language, you will need to understand an algorithm down to the details. What are the inputs to the problem? The outputs? What variables should be created, and what initial values should they have? What intermediate steps should be taken to compute other values and to ultimately compute the output? Do these steps repeat instructions that can be written in simplified form using a loop?

# Binary search

log n

function search(array, item) {
let min = 0; // 1
let max = array.length - 1; // 1

while (true) { // lg n
const endIndex = min + max; // lg n
const middleDecimal = endIndex/2.0; // lg n
const middleIndex = Math.floor(middleDecimal); // lg n

    const currentItem = array[middleIndex]; // lg n

    if (currentItem === item) { // lg n
      return middleIndex;
    } else if (currentItem < item) { // lg n
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1; // lg n
    }

    if (min > max) { // lg n
      return null; // 1
    }

}
}

When the number of items in the array is doubled, the running time of linear search will also double, while the running time of binary search will only be incremented by 1.

In the worst case, binary search takes \log_2(n) + 1log
2

(n)+1log, start base, 2, end base, left parenthesis, n, right parenthesis, plus, 1, rounded down. In this case, that'd be \log_2(1580000) + 1log
2

(1580000)+1log, start base, 2, end base, left parenthesis, 1580000, right parenthesis, plus, 1, rounded down.

# Quadratic

linear vs quadratic

If we have a list of n numbers, the number of comparisons we have to do is (n^2 + n) / 2.

exponential growth as n increases

Compare the largest and smallest numbers
If the result is the one you looking for, stop
If the result is larger, go back to step one with the second largest number
If the result is smaller, go back to step one with the second smallest number

## Assignment

quadratic algorithms are slower
prefer non nested functions

loop through array = n
nested loops = n exp 2
another nested loop = n a la 3

2 dif arrays a \* b
for (let i = 0; i < arrayA.length; i++) {
for (let ii = 0; ii < arrayB.length; ii++) {
doSomething();
}
}

# Big O notation

https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m04w10/activities/672?workbook=18

efficiency of an algorithm:
how the algorithm's run time scales as a whole, rather than the total number of individual steps (elementary operations).
O()

## only large input matters

## drop non dominant terms (n ^ 2)

## drop constatnt termns (n ^ 3)

JavaScript is a high level language. It has a Virtual Machine (VM) that sometimes optimizes JS code to run fewer operations. At other times, it may inefficiently run even more operations than we expected. So as long as we're programming in a high level language like JavaScript, it's going to be hard to get an accurate number for these constant values. Therefore it's easier to just talk about how the complexity grows, not the absolute running time.

## O(1)- constant (check the last element in aray is even)

or if it is a loop of less than 1000 n
array[2] + array[3] + array[4];

## O(n)- linear (find a number in an array, count even numbers in array)

function sumAllNumberInArray(array) {
let result = 0;

for (let i = 0; i < array.length; i++) {
let number = array[i];
result += number;
}

return result;
}

## O(n^2) -quadratic (find frist uniqie number in array, fnd duplicates)

function arrayContainsSum(array, sum) {

for (let i = 0; i < array.length; i++) {
const element1 = array[i];

    for (let ii = 0; ii < array.length; ii++) {

      const element2 = array[ii];

      if (element1 + element2 === sum) {
        return true;
      }
    }

}
return false;
}

## O(log n) - logarithmic doubling the size of input increases runtime by 1

function binarySearch(array, item) {
let min = 0;
let max = array.length - 1;

while (true) {
const middleIndex = Math.floor((min + max)/2.0);
const currentItem = array[middleIndex];

    if (currentItem === item) {
      return middleIndex;
    } else if (currentItem < item) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }

}
}
