export default function generateData(length) {
  let counterValue = "1";
  let value = 1;
  let data = [];

  let numberLength = Number(length);

  if(numberLength > 0) {
    do {
      if(value % 3 === 0 && value % 5 === 0) {
        counterValue = "FizzBuzz";
      }else if(value % 3 === 0) {
        counterValue = "Fizz";
      }else if(value % 5 === 0) {
        counterValue = "Buzz";
      }else {
        counterValue = value.toString();
      }
      data.push(counterValue);
  
      value++;
    }while (data.length !== numberLength);

    // Display the data.
    document.getElementById("data").innerText = data.toString().replace(/,/g, ", ");
  }else {
    // Invalid number.
    document.getElementById("data").innerHTML = "<strong><span style=\"color: red;\">ERROR: </span>You did not enter a number or a valid number, or your number it too big!</strong>"
  }
}
