// document.getElementById('dropdownBtn').addEventListener('click', function() {
//     var dropdown = document.getElementById('dropdownMenu');
//     dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
// });

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('#dropdownBtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             openDropdown.style.display = 'none';
//         }
//     }
// };
// ____________________________________________________________________________________________________________________________________
// Function to update the input with the chosen topic
// function chooseTopic(e) {
//     // Prevent default link behavior
//     e.preventDefault();

//     // Get the text of the clicked dropdown item
//     var topicText = e.target.innerText;

//     // Find the input field and update its value
//     var inputField = document.querySelector('.input_container input[type="text"]');
//     inputField.value = topicText;

//     // Hide the dropdown menu
//     var dropdown = document.getElementById('dropdownMenu');
//     dropdown.style.display = 'none';
// }

// // Add click event listeners to dropdown items
// var dropdownItems = document.querySelectorAll('#dropdownMenu a');
// dropdownItems.forEach(function(item) {
//     item.addEventListener('click', chooseTopic);
// });

// // Existing event listener for the dropdown button
// document.getElementById('dropdownBtn').addEventListener('click', function() {
//     var dropdown = document.getElementById('dropdownMenu');
//     dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
// });

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('#dropdownBtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             openDropdown.style.display = 'none';
//         }
//     }
// };

// ________________________________________________________________________________________________________________________________________________________________________________
// ______________________________________________TOPIC PROPOSITION WITH DROPDOWN__________________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________________________________________________________________


// Function to filter and show the dropdown based on input
function filterTopics() {
    // Get the input value
    var inputValue = this.value.toLowerCase();

    // Get the dropdown menu
    var dropdown = document.getElementById('dropdownMenu');

    // Get all the links in the dropdown
    var dropdownItems = dropdown.querySelectorAll('a');

    // Variable to track if we have any matches
    var hasMatch = false;

    // Loop through the dropdown items
    dropdownItems.forEach(function(item) {
        // Check if the item's text starts with the input value
        if (item.textContent.toLowerCase().startsWith(inputValue)) {
            // If it does, display it and set hasMatch to true
            item.style.display = 'block';
            hasMatch = true;
        } else {
            // Otherwise, don't display it
            item.style.display = 'none';
        }
    });

    // If we have at least one match, show the dropdown
    dropdown.style.display = hasMatch ? 'block' : 'none';
}

// Get the input field
var inputField = document.querySelector('.input_container input[type="text"]');

// Add input event listener to the input field
inputField.addEventListener('input', filterTopics);

// Function to update the input with the chosen topic
function chooseTopic(e) {
    // Prevent default link behavior
    e.preventDefault();

    // Get the text of the clicked dropdown item
    var topicText = e.target.innerText;

    // Update the input field value
    inputField.value = topicText;

    // Hide the dropdown menu
    var dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = 'none';
}

// Add click event listeners to dropdown items (reusing the chooseTopic function)
var dropdownItems = document.querySelectorAll('#dropdownMenu a');
dropdownItems.forEach(function(item) {
    item.addEventListener('click', chooseTopic);
});

// Existing event listener for the dropdown button
document.getElementById('dropdownBtn').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#dropdownBtn') && !event.target.matches('.input_container input[type="text"]')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            openDropdown.style.display = 'none';
        }
    }
};

// ________________________________________________________________________________________________________________________________________________________________________________
// ___________________________________________________Random selection of topic_____________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________________________________________________________________



document.getElementById('randomTopicBtn').addEventListener('click', function() {
    // Get all the topics from the dropdown
    var topics = document.querySelectorAll('#dropdownMenu a');
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * topics.length);
    // Get the text of the random topic
    var randomTopic = topics[randomIndex].textContent;
    // Set the input field value to the random topic
    document.querySelector('.input_container input[type="text"]').value = randomTopic;
});







// ________________________________________________________________________________________________________________________________________________________________________________
// ___________________________________________________DIFFICULTY SELECTION NOTICE_____________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________________________________________________________________

// Function to update the displayed difficulty
function updateDifficulty(e) {
    // Prevent default button behavior
    e.preventDefault();

    // Get the text of the clicked difficulty button
    var difficultyText = e.target.innerText;

    // Find the span where the selected difficulty will be displayed
    var difficultyDisplay = document.getElementById('selectedDifficulty');

    // Update the span's text with the chosen difficulty
    difficultyDisplay.textContent = difficultyText;
}

// Get all the difficulty buttons
var difficultyButtons = document.querySelectorAll('.diff_container .diff_btn');

// Add click event listeners to difficulty buttons
difficultyButtons.forEach(function(button) {
    button.addEventListener('click', updateDifficulty);
});

// ________________________________________________________________________________________________________________________________________________________________________________
// ___________________________________________________DIFFICULTY SELECTION save difficulty_____________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________________________________________________________________

// Function to update the displayed difficulty and highlight the selected button
function updateDifficulty(e) {
    // Prevent default button behavior
    e.preventDefault();

    // Get all the difficulty buttons
    var difficultyButtons = document.querySelectorAll('.diff_container .diff_btn');

    // Remove the 'selected' class from all buttons
    difficultyButtons.forEach(function(button) {
        button.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked button
    e.target.classList.add('selected');

    // Get the text of the clicked difficulty button
    var difficultyText = e.target.innerText;

    // Find the span where the selected difficulty will be displayed
    var difficultyDisplay = document.getElementById('selectedDifficulty');

    // Update the span's text with the chosen difficulty
    difficultyDisplay.textContent = difficultyText;
}

// Add click event listeners to difficulty buttons
difficultyButtons.forEach(function(button) {
    button.addEventListener('click', updateDifficulty);
});

// ________________________________________________________________________________________________________________________________________________________________________________
// ___________________________________________________Start alert if topic/diff not filled_____________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________________________________________________________________


// Function to check if both topic and difficulty have been chosen
function startQuiz() {
    var topicValue = document.querySelector('.input_container input[type="text"]').value;
    var difficultyValue = document.getElementById('selectedDifficulty').textContent;

    if (topicValue === "" || difficultyValue === "None") {
        alert('Please choose a topic and a difficulty to start the quiz.');
    } else {
        // Get the main content element(s)
        var mainContent = document.querySelector('.main'); // Adjust the selector as needed

        // Apply the blur effect
        mainContent.classList.add('blur-background');

        // Show the overlay
        document.getElementById('loadingOverlay').style.display = 'flex';

        // Set the text to show the chosen topic and difficulty
        document.getElementById('topicChosen').textContent = topicValue;
        document.getElementById('difficultyChosen').textContent = difficultyValue;

        // Hide the overlay and remove the blur effect after some time
        setTimeout(function() {
            document.getElementById('loadingOverlay').style.display = 'none';
            mainContent.classList.remove('blur-background');
        }, 3000);
    }
}



// Get the start button
var startButton = document.querySelector('.start_container .start_btn');

// Add click event listener to the start button
startButton.addEventListener('click', startQuiz);





