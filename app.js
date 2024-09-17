
function addTodo() {
    let myinp = document.getElementById('myInp').value; // Get the value from the input
    let result = document.getElementById('result');     // Get the result element
    result.innerText = myinp;                           // Set the text of result element to input value
  }