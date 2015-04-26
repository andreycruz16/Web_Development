function DisplayScreenStats() {
	 // Ask the user about displaying the screen
	 // information.
	 var DoIt = window.confirm("Display the screen dimensions?");

	 // If the user agrees, display the information.
	 if (DoIt) {
	 // Create a new <p> tag to store the data.
	 var Para = document.createElement("p");

	 // Create a new <br> tag to provide space.
	 var Spacer1 = document.createElement("br");
	 var Spacer2 = document.createElement("br");

	 // Create the content for the <p> tag.
	 var Content1 = document.createTextNode("Width: " + window.screen.width);
	 var Content2 = document.createTextNode("Height: " + window.screen.height);
	 var Content3 = document.createTextNode("Colors: " + window.screen.colorDepth);

	 // Add the content to the <p> tag.
	 Para.appendChild(Content1);
	 Para.appendChild(Spacer1);
	 Para.appendChild(Content2);
	 Para.appendChild(Spacer2);
	 Para.appendChild(Content3);
	 // Display the <p> tag on the page.
	 document.body.appendChild(Para);
	}
}