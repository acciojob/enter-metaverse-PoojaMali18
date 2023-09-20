const enterButton = document.getElementById("enterBtn");
const statusParagraph = document.getElementById("status");

// Function to change the text in the p tag
function changeText() {
    const h1Tag = document.createElement("h1");
    h1Tag.textContent = "Entered Metaverse";
    statusParagraph.innerHTML = ''; // Clear any existing content
    statusParagraph.appendChild(h1Tag); // Append the new h1 tag
}

// Add event listener to the button
enterButton.addEventListener("click", changeText);