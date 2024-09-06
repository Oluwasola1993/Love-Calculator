// Function to hide all emojis initially
function hideEmojis() {
    let loveElements = document.querySelectorAll('.emoji');
    loveElements.forEach(el => {
        el.style.visibility = "hidden";  // Hide emojis (use visibility instead of display to preserve layout)
        el.classList.remove(".dropDown");  // Remove animation class
    });
}

// Function to show emojis with animation
function showEmojis() {
    let loveElements = document.querySelectorAll('.emoji');
    loveElements.forEach(el => {
        el.style.visibility = "visible";  // Show emojis
        el.classList.add(".dropDown");  // Add animation class
    });
}

// Main love calculation function
function calculateLove() {
    let firstInput = document.getElementById('inp1').value.trim();
    let secondInput = document.getElementById('inp2').value.trim();
    let errorMessage = document.getElementById('errorMessage');
    let successMessage = document.getElementById('successMessage');
    let result = document.getElementById('result');
    let textResult = document.getElementById('textResult');

    // Hide emojis initially
    hideEmojis();

    if (firstInput === "" || secondInput === "") {
        // Show error message if any input is empty
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 4000);
    } else {
        // Show success message if both inputs are filled
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);

        // Generate random love percentage
        let answer = Math.round(Math.random() * 100);
        result.innerHTML = `${answer}%`;

        // Clear input fields
        document.getElementById('inp1').value = "";
        document.getElementById('inp2').value = "";

        // Display corresponding result message and show emojis based on score
        if (answer <= 30) {
            textResult.innerHTML = `<h4 style="color: Red;">It seems like there's not a lot of love in the air. But don't worry, there's always room for improvement! Try to find some common ground and make an effort to connect with your partner.</h4>`;
        } else if (answer <= 60) {
            textResult.innerHTML = `<h4 style="color: Blue;">Though you have some things in common, it seems like you and your partner have very different interests and values. Perhaps it's time to re-evaluate your relationship and try to find ways to compromise and connect.</h4>`;
        } else if (answer <= 80) {
            textResult.innerHTML = `<h4 style="color: Purple;">You're a GOOD match! You have a lot in common and should be able to build a strong relationship.</h4>`;
            showEmojis();  // Show emojis for 60-80% match
        } else if (answer <= 100) {
            textResult.innerHTML = `<h4 style="color: Pink;">You're a PERFECT match! You have so much in common and should be able to build a good home based on mutual understanding and respect. Congratulations, consider getting married as soon as possible.</h4>`;
            showEmojis();  // Show emojis for 80-100% match
        }
    }
}
