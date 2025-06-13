// DOM Elements
let startButtons;
let prevButton;
let nextButton;
let submitButton;
let reviewButton;
let retakeButton;
let homeButton;


// Quiz State
// Add with other quiz state variables
let currentDomain = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let quizData = {};
let quizStartTime;
let timerInterval;
const timerDisplay = document.createElement('div');
timerDisplay.id = 'time-display';
timerDisplay.className = 'timer';
timerDisplay.innerHTML = '<i class="fas fa-clock"></i> 00:00';
// Get current user
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));


// Initialize the app based on current page
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.domain-cards')) {
        // Homepage initialization
        initHomePage();
    } else if (document.querySelector('.quiz-container')) {
        // Quiz page initialization
        initQuizPage();
    } else if (document.querySelector('.results-container')) {
        // Results page initialization
        initResultsPage();
    }
});

// Home Page Functions
function initHomePage() {
    startButtons = document.querySelectorAll('.start-btn');
    
    startButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.domain-card');
            const domain = card.getAttribute('onclick').match(/'([^']+)'/)[1];
            startQuiz(domain);
        });
    });
}

function startQuiz(domain) {
    currentDomain = domain;
    currentQuestionIndex = 0;
    userAnswers = Array(12).fill(null);
    quizStartTime = new Date();
    
    // Store domain in session storage
    sessionStorage.setItem('currentDomain', domain);
    
    // Load quiz data
    loadQuizData(domain);
    
    // Redirect to quiz page
    window.location.href = 'quiz.html';
}

// Quiz Page Functions
function initQuizPage() {
    prevButton = document.getElementById('prev-btn');
    nextButton = document.getElementById('next-btn');
    submitButton = document.getElementById('submit-btn');
    
    // Get domain from session storage
    currentDomain = sessionStorage.getItem('currentDomain') || '';
    
    // Set domain title
    document.getElementById('quiz-domain').textContent = `Domain: ${formatDomainName(currentDomain)}`;
    
    // Load quiz data
    loadQuizData(currentDomain);
    
    // Initialize event listeners
    prevButton.addEventListener('click', showPreviousQuestion);
    nextButton.addEventListener('click', showNextQuestion);
    submitButton.addEventListener('click', submitQuiz);
    
    // Show first question
    showQuestion(currentQuestionIndex);
}
  initializeTimer();
    startTimer();
function submitQuiz() {
     {
    // ... existing code ...
    
    // Save results to user data
    if (currentUser) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        
        if (userIndex !== -1) {
            users[userIndex].quizResults = users[userIndex].quizResults || [];
            users[userIndex].quizResults.push({
                domain: currentDomain,
                score: percentage,
                date: new Date().toISOString()
            });
            
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
    
    // ... rest of existing code ...
}
    // Calculate score
    let correctAnswers = 0;
    quizData.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctAnswers++;
        }
    });
    
    // ===== MODIFY THIS SECTION =====
    const timeTaken = stopTimer(); // <-- ADD THIS LINE
    
    // Store results in session storage
    sessionStorage.setItem('quizResults', JSON.stringify({
        domain: currentDomain,
        correctAnswers,
        totalQuestions: quizData.questions.length,
        timeTaken, // <-- ADD THIS PROPERTY
        userAnswers,
        questions: quizData.questions
    }));
    
    // Redirect to results page
    window.location.href = 'results.html';
}

function loadQuizData(domain) {
    // In a real app, you might fetch this from a server
    // For now, we'll use the data from quiz-data.js
    quizData = window.quizDatabase[domain] || {};
}

function showQuestion(index) {
    if (!quizData.questions || index >= quizData.questions.length) return;
    
    const question = quizData.questions[index];
    const optionsContainer = document.getElementById('options-container');
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = `option ${userAnswers[index] === i ? 'selected' : ''}`;
        optionElement.innerHTML = `
            <input type="radio" name="option" id="option-${i}" value="${i}">
            <label for="option-${i}" class="option-label">
                <span>${option}</span>
            </label>
        `;
        
        optionElement.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update progress
    updateProgress(index);
    
    // Update navigation buttons
    prevButton.disabled = index === 0;
    nextButton.disabled = index === quizData.questions.length - 1;
    submitButton.style.display = index === quizData.questions.length - 1 ? 'block' : 'none';
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    showQuestion(currentQuestionIndex); // Refresh to show selection
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function updateProgress(index) {
    const progressBar = document.querySelector('.progress-bar::after');
    const progressText = document.getElementById('progress-text');
    const progressPercentage = ((index + 1) / quizData.questions.length) * 100;
    
    document.querySelector('.progress-bar').style.setProperty('--progress', `${progressPercentage}%`);
    progressText.textContent = `Question ${index + 1} of ${quizData.questions.length}`;
    
    // Animate progress bar
    const progressAfter = document.querySelector('.progress-bar::after');
    if (progressAfter) {
        progressAfter.style.width = `${progressPercentage}%`;
    }
}

function submitQuiz() {
    // Calculate score
    let correctAnswers = 0;
    quizData.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctAnswers++;
        }
    });
    
    // Calculate time taken
    const quizEndTime = new Date();
    const timeTaken = Math.floor((quizEndTime - quizStartTime) / 1000); // in seconds
    
    // Store results in session storage
    sessionStorage.setItem('quizResults', JSON.stringify({
        domain: currentDomain,
        correctAnswers,
        totalQuestions: quizData.questions.length,
        timeTaken,
        userAnswers,
        questions: quizData.questions
    }));
    
    // Redirect to results page
    window.location.href = 'results.html';
}

// Results Page Functions
function initResultsPage() {
    reviewButton = document.getElementById('review-btn');
    retakeButton = document.getElementById('retake-btn');
    homeButton = document.getElementById('home-btn');
    
    // Get results from session storage
    const results = JSON.parse(sessionStorage.getItem('quizResults') || '{}');
    
    if (!results.domain) {
        // No results found, redirect to home
        window.location.href = 'index.html';
        return;
    }
    
    // Display results
    displayResults(results);
    
    // Initialize event listeners
    reviewButton.addEventListener('click', reviewAnswers);
    retakeButton.addEventListener('click', retakeQuiz);
    homeButton.addEventListener('click', goHome);
}

function displayResults(results) {
    // Set domain name
    document.getElementById('result-domain').textContent = `Domain: ${formatDomainName(results.domain)}`;
    
    // Calculate percentage
    const percentage = Math.round((results.correctAnswers / results.totalQuestions) * 100);
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-answers').textContent = `${results.correctAnswers}/${results.totalQuestions}`;
    
    // Set time taken
    const minutes = Math.floor(results.timeTaken / 60);
    const seconds = results.timeTaken % 60;
    document.getElementById('time-taken').textContent = `${minutes > 0 ? `${minutes}m ` : ''}${seconds}s`;
    
    // Set skill level
    const skillLevel = getSkillLevel(percentage);
    document.getElementById('skill-level').textContent = skillLevel;
    
    // Set result message
    const message = getResultMessage(percentage, results.domain);
    document.getElementById('result-message').textContent = message;
    
    // Animate progress ring
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        // Trigger animation
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    }
}

function getSkillLevel(percentage) {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 70) return 'Advanced';
    if (percentage >= 50) return 'Intermediate';
    return 'Beginner';
}

function getResultMessage(percentage, domain) {
    const domainName = formatDomainName(domain);
    
    if (percentage >= 90) {
        return `Excellent work! Your ${domainName} knowledge is at an expert level.`;
    } else if (percentage >= 70) {
        return `Great job! You have strong ${domainName} skills.`;
    } else if (percentage >= 50) {
        return `Good effort! You have basic ${domainName} knowledge but room to improve.`;
    } else {
        return `Keep learning! Consider reviewing ${domainName} fundamentals.`;
    }
}

function reviewAnswers() {
    // In a full implementation, this would show each question with correct/incorrect answers
    alert('Review feature would show each question with your answers and correct solutions.');
}

function retakeQuiz() {
    // Get stored quiz results
    const quizResults = JSON.parse(sessionStorage.getItem('quizResults'));
    
    // Clear previous answers while keeping domain and questions
    if (quizResults && quizResults.domain) {
        sessionStorage.setItem('currentDomain', quizResults.domain);
        sessionStorage.removeItem('quizResults');
        
        // Reset all quiz state variables
        currentDomain = quizResults.domain;
        currentQuestionIndex = 0;
        userAnswers = Array(quizResults.questions.length).fill(null);
        quizStartTime = new Date();
        
        // Redirect to quiz page
        window.location.href = 'quiz.html';
    } else {
        // Fallback to home if no results exist
        window.location.href = 'index.html';
    }
}

function goHome() {
    window.location.href = 'index.html';
}

// Helper Functions
function formatDomainName(domain) {
    return domain.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}
// Add to the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.domain-cards')) {
        initHomePage();
    } else if (document.querySelector('.quiz-container')) {
        initQuizPage();
    } else if (document.querySelector('.results-container')) {
        initResultsPage();
    } else if (document.querySelector('.review-container')) {
        initReviewPage();
    }
});

// Add these new functions
function initReviewPage() {
    const backButton = document.getElementById('back-to-results');
    const reviewData = JSON.parse(sessionStorage.getItem('quizResults'));
    
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'results.html';
        });
    }
    
    if (reviewData && reviewData.questions) {
        displayReviewQuestions(reviewData.questions, reviewData.userAnswers);
    }
}

function displayReviewQuestions(questions, userAnswers) {
    const container = document.getElementById('review-questions');
    if (!container) return;
    
    container.innerHTML = '';
    
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'review-question';
        
        const isCorrect = userAnswers[index] === question.correctAnswer;
        
        questionElement.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
            <p>Difficulty: ${question.difficulty}</p>
            <div class="options-container">
                ${question.options.map((option, i) => `
                    <div class="review-option 
                        ${i === question.correctAnswer ? 'correct' : ''}
                        ${userAnswers[index] === i ? 'selected' : ''}
                        ${userAnswers[index] === i && !isCorrect ? 'incorrect' : ''}">
                        ${option}
                        ${i === question.correctAnswer ? ' (Correct Answer)' : ''}
                        ${userAnswers[index] === i && !isCorrect ? ' (Your Answer)' : ''}
                    </div>
                `).join('')}
            </div>
            ${isCorrect ? 
                '<p class="result-feedback correct-feedback">✓ You answered this correctly</p>' : 
                '<p class="result-feedback incorrect-feedback">✗ Your answer was incorrect</p>'}
        `;
        
        container.appendChild(questionElement);
    });
}

// Update the existing reviewAnswers function
function reviewAnswers() {
    const results = JSON.parse(sessionStorage.getItem('quizResults') || '{}');
    if (results.questions) {
        window.location.href = 'review.html';
    } else {
        alert('No quiz results to review. Please take a quiz first.');
    }
}
// ===== TIMER FUNCTIONS (ADD THESE NEW FUNCTIONS) =====
function initializeTimer() {
  const quizHeader = document.querySelector('.quiz-header');
  if (quizHeader) {
    quizHeader.appendChild(timerDisplay);
  }
}

function startTimer() {
  quizStartTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const now = new Date();
  const elapsed = Math.floor((now - quizStartTime) / 1000);
  const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
  const seconds = (elapsed % 60).toString().padStart(2, '0');
  timerDisplay.innerHTML = `<i class="fas fa-clock"></i> ${minutes}:${seconds}`;
}

function stopTimer() {
  clearInterval(timerInterval);
  const now = new Date();
  return Math.floor((now - quizStartTime) / 1000);
}

