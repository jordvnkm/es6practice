const readline = require('readline');
const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, function (response) {
    const answer = (response === 'yes') ? true : false;
    callback(answer);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length -1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        innerBubbleSortLoop(arr, ++i, true, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
      }
    })
  }
  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps)
    // reader.close();
  }
}

let a = [8,7,6,5];



absurdBubbleSort(a, function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
