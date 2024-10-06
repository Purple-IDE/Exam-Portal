// Check if user is logged in
if (sessionStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Display user details
const userNameDisplay = document.getElementById('user-name');
const userGenderDisplay = document.getElementById('user-gender');
if (userNameDisplay && userGenderDisplay) {
    userNameDisplay.textContent = 'Name: ' + sessionStorage.getItem('name');
    userGenderDisplay.textContent = 'Gender: ' + sessionStorage.getItem('gender');
}

// Quiz questions
const quizQuestions = [
    {
        question: "1. What is the meaning of HTML?",
        choices: ["HyperText Markup Language", "I don't know", "Hyper Monument Language", "Hello To My Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "2. Which of the following HTML Elements is used for making any text bold?",
        choices: ["p", "i", "li", "b"],
        correctAnswer: "b" 
    },
    {
        question: "3. Which of the following HTML element is used for creating an unordered list?",
        choices: ["ol", "ul", "uol", "unol"],
        correctAnswer: "ul;"
    },
    {
        question: "4. How many heading tags are there in HTML5? ",
        choices: ["6", "36", "1", "0"],
        correctAnswer: "6"
    },
    {
        question: "5. What is HTML?",
        choices: ["HTML describes the structure of a webpage", "HTML is the standard markup language mainly used to create web pages",
            "HTML consists of a set of elements that helps the browser how to view the content", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },
    {
        question: "6. What is the correct syntax of doctype in HTML5?",
        choices: ["&lt;/doctype html&gt;", " &lt;doctype html>", "&lt;doctype html!>", "&lt;!doctype html>"],
        correctAnswer: "&lt;!doctype html>"
    },
    {
        question: "7. Which of the following is used to read an HTML page and render it?",
        choices: ["Web server", "Web network", "Web browser", " Web matrix"],
        correctAnswer: "Web browser" 
    },
    {
        question: "8. Which of the following tag is used for inserting the largest heading in HTML?",
        choices: ["head", "h1", "heading", "h6"],
        correctAnswer: "h1"
    },
    {
        question: "9. Which element is used to get highlighted text in HTML5? ",
        choices: ["u", "mark", "highlight", "b"],
        correctAnswer: "mark"
    },
    {
        question: "10. Which of the following is not a HTML5 tag?",
        choices: ["track", "video", "slider", "source"],
        correctAnswer: "slider"
    },
    {
        question: "11. Which element is used for or styling HTML5 layout?",
        choices: ["CSS", "jQuery", " JavaScript", "PHP"],
        correctAnswer: "CSS"
    },
    {
        question: "12. Which HTML tag is used to insert an image?",
        choices: ["&lt;img url=”htmllogo.jpg” /&gt;", "&lt;img alt=”htmllogo.jpg” /&gt;", "&lt;img src=”htmllogo.jpg” /&gt;", "&lt;mg link=”htmllogo.jpg” /&gt;"],
        correctAnswer: "&lt;img src=”htmllogo.jpg” /&gt;" 
    },
    {
        question: "13. Which character is used to represent when a tag is closed in HTML?",
        choices: ["#", "!", "/", "|"],
        correctAnswer: "/"
    },
    {
        question: "14. Among the following, which is the HTML paragraph tag? ",
        choices: ["p", "pre", "hr", "a"],
        correctAnswer: "p"
    },
    {
        question: "15. Which of the following HTML tag is used to add a row in a table?",
        choices: ["th", "td", "tr", "tt"],
        correctAnswer: "tr"
    },
    {
        question: "16. Which of the following tag is used to create a text area in HTML Form?",
        choices: [" &lt;text>&lt;/text>", "&lt;textarea> &lt;/textarea>", "&lt;input type=”text” />", "&lt;input type=”textarea” />"],
        correctAnswer: "&lt;input type=”textarea” />"
    },
    {
        question: "17. To show deleted text, which HTML element is used?",
        choices: ["del", "em", "strong", "ins"],
        correctAnswer: "del;" 
    },
    {
        question: "18. Which tag is used to create a numbered list in HTML?",
        choices: ["ol", "ul", "li", "nl"],
        correctAnswer: "li"
    },
    {
        question: "19. Which HTML tag is used to convert the plain text into italic format? ",
        choices: ["b", "p", "i", "a"],
        correctAnswer: "i"
    },
    {
        question: "20. Which works similar to &lt;b> element?",
        choices: ["blockquote", "strong", "em", "i"],
        correctAnswer: "strong"
    },

    {
        question: "21. What does CSS stand for?",
        choices: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "22. Where in an HTML document is the correct place to refer to an external style sheet?",
        choices: ["At the end of the document", "In the &lt;head> section", "At the top of the document", "In the <body> section"],
        correctAnswer: "In the &lt;head> section"
    },
    {
        question: "23. Which property is used to change the background color?",
        choices: ["bgcolor:", "background-color:", "color", "color-background:"],
        correctAnswer: "background-color:"
    },
    {
        question: "24. How do you add a background color for all &lt;h1> elements??",
        choices: ["all.h1 {background-color:#FFFFFF}", "h1.all {background-color:#FFFFFF}", "h1 {background-color:#FFFFFF}", "{background-color:#FFFFFF} h1.all"],
        correctAnswer: "h1 {background-color:#FFFFFF}"
    },
    {
        question: "25. Which is the correct CSS syntax?",
        choices: ["body {color: black}", "{body;color:black}", "{body:color=black(body}", "body:color=black"],
        correctAnswer: "body {color: black}"
    },
    {
        question: "26. Which HTML attribute is used to define inline styles?",
        choices: ["font", "class", "styles", "style"],
        correctAnswer: "style"
    },
    {
        question: "27. How do you change the text color of an element?",
        choices: ["text-color=", "fgcolor:", "color:", "text-color:"],
        correctAnswer: "color:"
    },
    {
        question: "28. Which CSS property controls the text size?",
        choices: ["font-size", "font-style", "text-style", "text-size"],
        correctAnswer: "font-size:"
    },
    {
        question: "29. What is the correct CSS syntax for making all the &lt;p> elements bold?",
        choices: ["&lt:p style=”text-size:bold”>", "p {font-weight:bold}", "p {text-size:bold}", "&lt;p style=”font-size:bold”>"],
        correctAnswer: "p {font-weight:bold}"
    },
    {
        question: "30. How do you display hyperlinks without an underline?",
        choices: ["a {text-decoration:no underline}", "a {decoration:no underline}", "a {text-decoration:none}", "a {underline:none}"],
        correctAnswer: "a {text-decoration:none}"
    },
    {
        question: "31. How do you make each word in a text start with a capital letter?",
        choices: ["text-transform:capitalize", "You can’t do that with CSS", "text-transform:uppercase", "a {underline:none}"],
        correctAnswer: "text-transform:capitalize"
    },
    {
        question: "32. How do you change the font of an element?",
        choices: ["font-family:", "font=", "f:", "Not Possible"],
        correctAnswer: "font-family:"
    },
    {
        question: "33. How do you make the text bold?",
        choices: ["font:b", "font-weight:bold", "style:bold", "Not Possible"],
        correctAnswer: "font-weight:bold"
    },
    {
        question: "34. How do you change the left margin of an element?",
        choices: ["margin", "indent", "margin-left", "text-indent"],
        correctAnswer: "margin-left"
    },
    {
        question: "35. What symbol is used as a univeral selector?",
        choices: ["*", "#", "&", "@"],
        correctAnswer: "*"
    },
    {
        question: "36. Which CSS property controls the text size?",
        choices: ["font-size", "font-style", "text-style", "text-size"],
        correctAnswer: "font-size"
    },
    {
        question: "37. The image that welcomes users to a website is called?",
        choices: ["Hero", "Villian", "Boss", "Call to action"],
        correctAnswer: "Hero"
    },
    {
        question: "38. The &lt;p> in HTML means?",
        choices: ["Paragraph", "Parcel", "Part 0f", "Prior to"],
        correctAnswer: "Paragraph"
    },
    {
        question: "39. How do you insert a comment in a CSS file?",
        choices: ["// this is a comment //", "/* this is a comment */", "‘ this is a comment'", "// this is a comment"],
        correctAnswer: "/* this is a comment */"
    },
    {
        question: "40. Rate your lessons so far!",
        choices: ["Good", "Ok", "Manageable", "Bad"],
        correctAnswer: "Good"
    }



    // Add the rest of your quiz questions here...
];

// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;
const userResponses = [];

// Load saved state if exists
const savedState = sessionStorage.getItem('quizState');
if (savedState) {
    const { currentQuestionIndex: savedIndex, score: savedScore, userResponses: savedResponses } = JSON.parse(savedState);
    currentQuestionIndex = savedIndex;
    score = savedScore;
    userResponses.push(...savedResponses);
}

// DOM elements
const idContainer = document.getElementById('idContainer')
const questionContainer = document.getElementById('question-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const resultModal = document.getElementById('resultModal');
const scoreElement = document.getElementById('score');


// Load the first question
loadQuestion();

// Function to load a question
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        endQuiz();
        return;
    }

    const questionData = quizQuestions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h3>${questionData.question}</h3>
        ${questionData.choices.map((choice, index) => `
            <div>
                <input type="radio" id="choice${index}" name="answer" value="${choice}">
                <label for="choice${index}">${choice}</label>
            </div>
        `).join('')}
    `;

    if (userResponses[currentQuestionIndex]) {
        const selectedAnswer = userResponses[currentQuestionIndex];
        document.querySelector(`input[name="answer"][value="${selectedAnswer}"]`).checked = true;
    }

    // Update the Next button to "Submit" on the last question
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextButton.textContent = 'Submit';
    } else {
        nextButton.textContent = 'Next';
    }
}

// Function to submit an answer
function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    // Record response
    const answerValue = selectedAnswer ? selectedAnswer.value : '';
    userResponses[currentQuestionIndex] = answerValue;

    // Check if the answer is correct
    if (answerValue === quizQuestions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    saveQuizState();
}

// Prevent page reload and preserve state / only use for exams
window.addEventListener("beforeunload", saveQuizState);

// Function to save the quiz state
function saveQuizState() {
    sessionStorage.setItem('quizState', JSON.stringify({
        currentQuestionIndex,
        score,
        userResponses
    }));
}

// Function to send score to server
function sendScoreToEmail(score) {
    fetch('/send-score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: sessionStorage.getItem('email'), // Assuming you store user's email in sessionStorage
            score: score,
            totalQuestions: quizQuestions.length
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Score sent successfully!');
        } else {
            console.log('Failed to send score.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to end the quiz
function endQuiz() {
    if (currentQuestionIndex === quizQuestions.length - 1) {
        // Show confirmation modal
        $('#confirmationModal').modal('show');
    } else {
        // End the quiz without confirmation

    }
}

// Function to finalize the quiz
function finalizeQuiz() {
    idContainer.style.display = 'none';
    questionContainer.style.display = 'none';
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Show the loader
    loader.style.display = 'block';

    // Delay showing the results by 5 seconds
    setTimeout(() => {
        loader.style.display = 'none';
        displayResults();
        sendScoreToEmail(score);
    }, 50000);
}

// Event listener for the confirmation submit button
document.getElementById('confirmSubmit').addEventListener('click', () => {
    $('#confirmationModal').modal('hide');
    finalizeQuiz();
});

// Function to display the results
function displayResults() {
    $('#resultModal').modal('show');
    scoreElement.textContent = `${score} / ${quizQuestions.length}`;
    sessionStorage.removeItem('quizState');
}

// Handle Previous button
prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        submitAnswer();
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Handle Next button
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        submitAnswer();
        currentQuestionIndex++;
        loadQuestion();
    } else {
        submitAnswer();
        endQuiz();
    }
});




