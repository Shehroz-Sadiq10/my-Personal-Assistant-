function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  var chatDisplay = document.getElementById("chat-display");

  // Display user's message
  chatDisplay.innerHTML += "<div class='user-message'><strong>You:</strong> " + userInput + "</div>";

  // Handle different user inputs
  handleUserInput(userInput);

  // Clear user input field
  document.getElementById("user-input").value = "";
}

function handleUserInput(input) {
  var chatDisplay = document.getElementById("chat-display");

  // Example: simple responses based on user input
  if (input.toLowerCase() === "hello" || input.toLowerCase() === "hi") {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong> Hello there!</div>";
  } else if (input.toLowerCase() === "how are you") {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong> I'm just a bot, but thanks for asking!</div>";
  } else if (input.toLowerCase() === "what is your name") {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong> My name is Alex created by shehroz.</div>";
  } else if (input.toLowerCase() === "who made you") {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong> I was made by a developer, Shehroz.</div>";
  } 
  else if (input.toLowerCase() === "assalam o alaikum") {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong> Walaikum assalam.</div>";
  } 
  else if (input.toLowerCase() === "aoa") {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong> walaikum assalam.</div>";
  } else if (input.toLowerCase() === "are you muslim") {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong> I am just bot made by muslim developer, shehroz.</div>";
  } 
  else if (input.toLowerCase() === "what is the age of shehroz") {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong> His age is 18 years.</div>";
  } 
  else if (input.toLowerCase() === "in which class shehroz read") {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong>  He is a student of FSC Computer Science.</div>";
  } else {
    chatDisplay.innerHTML += "<div class='bot-message'><strong>Bot:</strong> Sorry, I didn't understand that.</div>";
  }

  // Scroll to the bottom of the chat display
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
