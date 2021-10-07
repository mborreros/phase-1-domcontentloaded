//First, set up a DOMContentLoaded event listener to detect when the HTML page has loaded and the document is ready to be manipulated. Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"

function addListener(){ 
document.addEventListener('DOMContentLoaded', function changeText() {
  console.log(document.querySelector('p').textContent);
  document.querySelector('p').textContent = "This is really cool!";
  console.log(document.querySelector('p').textContent);
})
}

console.log("we have not read the contents yet");

addListener();