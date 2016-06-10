const readline = require('readline');
const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number: ", function (number) {
      let num = parseInt(number);
      sum += num;
      console.log('Your running sum is: ' + sum);
      addNumbers(sum, --numsLeft, completionCallback)
    });
  } else {
    completionCallback(sum);
  }
}


addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
