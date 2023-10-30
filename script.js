// script.js
const textElement = document.getElementById("birthday-text");
const textToType = "Happy 18th Birthday, Angel!,  Hope You enjoying your day. Decided To make this type script for you. I dont Have many words but you know I AVOCADO YOU :)";
let index = 0;
const typingSound = new Audio('/Keyboard(chosic.com).mp3');

function typeText() {
    if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        typingSound.currentTime = 3; // Reset the audio to the beginning
        typingSound.play(); // Play the typing sound
        setTimeout(typeText, 100); // Adjust the delay between characters
    } else {
        // Clear the text and restart typing
        textElement.innerHTML = "";
        index = 0;
        setTimeout(typeText, 1000); // Adjust the delay before restarting
    }
}

typeText();

const folderTitle = document.querySelector(".folder-title");
const folderContent = document.querySelector(".folder-content");
const youngerSelfImage = document.getElementById("younger-self-image");
const closeButton = document.getElementById("close-button");

folderTitle.addEventListener("click", function () {
    folderContent.style.display = "block";
    folderTitle.style.display = "none";
    youngerSelfImage.classList.remove("hidden");
    closeButton.style.display = "block";
});

closeButton.addEventListener("click", function () {
    folderContent.style.display = "none";
    folderTitle.style.display = "block";
    youngerSelfImage.classList.add("hidden");
    closeButton.style.display = "none";
});
