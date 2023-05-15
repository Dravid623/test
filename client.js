function addToOutput(message) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML += message + "<br>";
  }
function addToServerOutput(message) {
    let outputDiv = document.getElementById("serverOutput");
    outputDiv.innerHTML += message + "<br>";
  }
  
  for (let i = 1; i < 10; i++) {
    addToOutput(`hello ${i}`);
  }

  fetch('http://localhost:8080')
  .then(response => response.text())
  .then(text => {
    // Do something with the response text, such as updating the UI
    addToServerOutput(text);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });
