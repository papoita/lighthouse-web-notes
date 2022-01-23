// Implement a function which can run a given function after a delay.

// Arguments:
//  - callback: the function to execute after the delay
//  - delay: number of milliseconds to wait
//  - data: the one (and only) argument to pass to the callback
// */

const doShortly = function(callback, delay, data) {
  // IMPLEMENT ME

  setTimeout(function() {
    callback(data);
    console.log('hello');
  }, delay);

};

const test = doShortly(data => data % 2 === 0, 1000,  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])