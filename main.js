const inputEl = document.getElementById('string');
const buttonEl = document.getElementById('reverse-btn');
const output = document.getElementById('output');

function reverse(string) {
  const arr = string.split('');
  let reverseArr = arr;
  let reverseIndex = arr.length - 1;
  let loopLimit;

  // Check if the given string length is even or not
  if ((reverseIndex % reverseIndex) !== 0) {
    loopLimit = (arr.length - 1) / 2;
  } else {
    loopLimit = arr.length / 2;
  }

  // Iterate through every letter in the string via an array to swap values
  for (let index = 0; index < loopLimit; index++) {
    let leftVal = reverseArr[index];
    let rightVal = reverseArr[reverseIndex];
    reverseArr[index] = rightVal;
    reverseArr[reverseIndex] = leftVal;
    reverseIndex--;
  }
  // Join the array again and output result
  return reverseArr.join('');
}

// When the Reverse button is clicked reverse the given string in the input box
buttonEl.addEventListener('click', function (event) {
  const inputVal = inputEl.value;
  const reverseVal = reverse(inputVal);
  output.innerHTML = reverseVal;
});