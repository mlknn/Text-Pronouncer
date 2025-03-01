let clickCount = 0;
let lastClickTime = 0;
let speechInstance = null; // Store the speech instance

// Create the floating result box (only once)
let resultBox = document.createElement("div");
resultBox.style.position = "fixed";
resultBox.style.top = "30%";
resultBox.style.right = "10px";
resultBox.style.width = "250px"; // Bigger width
resultBox.style.padding = "15px";
resultBox.style.border = "1px solid #aaa";
resultBox.style.backgroundColor = "#fff";
resultBox.style.boxShadow = "4px 4px 15px rgba(0,0,0,0.3)";
resultBox.style.fontFamily = "Arial, sans-serif";
resultBox.style.fontSize = "16px"; // Bigger text
resultBox.style.lineHeight = "1.5";
resultBox.style.display = "none"; // Hidden initially
resultBox.style.borderRadius = "8px"; // Rounded edges
document.body.appendChild(resultBox);

document.addEventListener("click", function (event) {
  const currentTime = new Date().getTime();

  if (currentTime - lastClickTime > 800) {
    clickCount = 0; // Reset if too much time passed
  }

  clickCount++;
  lastClickTime = currentTime;

  if (clickCount === 3) {
    clickCount = 0; // Reset counter

    let selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      // Stop any previous speech before starting new one
      if (speechInstance) {
        window.speechSynthesis.cancel();
      }

      // Pronounce the text
      speechInstance = new SpeechSynthesisUtterance(selectedText);
      speechInstance.lang = "en-US";
      window.speechSynthesis.speak(speechInstance);

      // Check if it's a single letter
      if (selectedText.length === 1) {
        let explanation = getLetterExplanation(selectedText);
        resultBox.innerHTML = `<strong>Letter: ${selectedText}</strong><br>${explanation}`;
        resultBox.style.display = "block";
      } 
      // If it's a word or sentence, translate it
      else {
        translateToTurkish(selectedText);
      }
    }
  }
});

// Function to explain a letter
function getLetterExplanation(letter) {
  const explanations = {
    "A": "A is the first letter of the alphabet, a vowel.",
    "B": "B is the second letter, representing a voiced bilabial stop.",
    "C": "C is the third letter, often a soft or hard sound.",
    "D": "D represents a voiced dental stop.",
    // Add more letter explanations as needed...
  };

  return explanations[letter.toUpperCase()] || "No explanation available.";
}

// Function to translate text to Turkish
function translateToTurkish(text) {
  fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|tr`)
    .then(response => response.json())
    .then(data => {
      let translatedText = data.responseData.translatedText;
      resultBox.innerHTML = `<strong>English:</strong> ${text}<br><strong>Turkish:</strong> ${translatedText}`;
      resultBox.style.display = "block";
    })
    .catch(error => {
      console.error("Translation failed:", error);
      resultBox.innerHTML = "Translation unavailable.";
      resultBox.style.display = "block";
    });
}

// Stop speech when "M" is pressed
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "m") {
    window.speechSynthesis.cancel();
    speechInstance = null;
    console.log("Speech stopped by user.");
  }
});