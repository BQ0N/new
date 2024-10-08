// Define variables for input, chat area, and send button
const inputBox = document.getElementById("input-box");
const chatArea = document.getElementById("chat-area");
const sendButton = document.getElementById("send-button");

// Add event listener to send button to handle user input
sendButton.addEventListener("click", function() {
  // Get user input from input box and clear input box
  const userInput = inputBox.value.trim();
  inputBox.value = "";

  // Generate bot response based on user input
  const botResponse = generateResponse(userInput);

  // Add bot response to chat area
  addChatEntry(botResponse, "bot");

  // Scroll to bottom of chat area to show latest entry
  chatArea.scrollTop = chatArea.scrollHeight;
});

// Function to generate bot response based on user input
function generateResponse(userInput) {
  // Example logic for generating response based on user input
  const lowerCaseInput = userInput.toLowerCase();
  if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
    return "Hi there! How can I help you?";
  } if (lowerCaseInput.includes("goodbye") || lowerCaseInput.includes("bye")) {
    return "Goodbye! Have a great day!";
	//LAPTOPS/COMPUTERS
  } if (lowerCaseInput.includes("laptops") || lowerCaseInput.includes("laptop" )) 
	{
    return "What is your prefered brand? dell, hp, lenovo, toshiba or azus\n";
	}
	//LENOVO
	 if(lowerCaseInput === "lenovo")
	{
		return "What would you like to use this product for? lenovo Travel, lenovo Office, lenovo school or lenovo Gaming?";
		//lenovo gaming
  }if(lowerCaseInput.includes("lenovo") && lowerCaseInput.includes("gaming")){
	return "For gaming, you would prefer the following\n Lenovo Legion 7i: (Best Lenovo Laptops for Gaming)\nLenovo Legion 5 Pro: (Best Lenovo Laptops for Gaming)\n Lenovo Yoga 9i: (Best Lenovo Laptops for Gaming)\n Lenovo ThinkPad X1 Yoga (Gen 6, 2021): (Best Lenovo Laptops for Gaming)"
}
	//lenovo officework
	if(lowerCaseInput.includes("lenovo") && lowerCaseInput.includes("office")){
	return "For office work, you would prefer the following:\n ThinkPad X1 Carbon Gen 10\n ThinkPad T14 Gen 3\n ThinkBook 13x Gen 2 13(inch)\n IdeaPad Flex 5i (14(inch) Intel)\n)"
	} 
	//lenovo travel
	if(lowerCaseInput.includes("lenovo") && lowerCaseInput.includes("travel")){
		return "For travel, you would prefer the following:\n Yoga 7i 14(inch) 2-in-1 Laptop\n Yoga 9i 14(inch) 2-in-1 Laptop\n ThinkPad T14 Gen 3.\n IdeaPad Flex 5i (14(inch) Intel))\n)"
		}
//DELL
else if(lowerCaseInput === "dell")
	{
		return "What would you like to use this product for? Dell for Travel, dell for Officework, dell school or dell Gaming?";
		//dell gaming
  }if(lowerCaseInput.includes("dell") && lowerCaseInput.includes("gaming")){
	return "For gaming, you would prefer the following\n DELL Legion 7i: (Best Lenovo Laptops for Gaming)\nLenovo Legion 5 Pro: (Best Lenovo Laptops for Gaming)\n Lenovo Yoga 9i: (Best Lenovo Laptops for Gaming)\n Lenovo ThinkPad X1 Yoga (Gen 6, 2021): (Best Lenovo Laptops for Gaming)"
}
	//dell officework
	if(lowerCaseInput.includes("dell-officework")){
	return "For office work, you would prefer the following:\n Dell Vostro 1015 Gen 10\n ThinkPad T14 Gen 3\n ThinkBook 13x Gen 2 13(inch)\n IdeaPad Flex 5i (14(inch) Intel)\n)"
	} 
	// travel
	if(lowerCaseInput.includes("travel")){
		return "For office work, you would prefer the following:\n ThinkPad X1 Carbon Gen 10\n ThinkPad T14 Gen 3\n ThinkBook 13x Gen 2 13(inch)\n IdeaPad Flex 5i (14(inch) Intel)\n)"
		}

  else {
    return "I'm sorry, I don't understand. Can you please rephrase your question?";
  }
}

// Function to add chat entry to chat area
function addChatEntry(message, sender) {
  const chatEntry = document.createElement("div");
  chatEntry.textContent = message;
  chatEntry.classList.add("chat-entry");
  chatEntry.classList.add(sender);
  chatArea.appendChild(chatEntry);
}
